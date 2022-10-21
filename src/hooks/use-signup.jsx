import { useEffect, useState } from 'react';
import { useAuthContext } from './use-auth-context';
import {
	auth,
	createUserWithEmailAndPassword,
	setDoc,
	doc,
	db,
} from '../firebase/config';

export const useSignup = () => {
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = async (email, password) => {
		setError(null);
		setIsPending(true);

		try {
			/** signup procedure */
			const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

			if (!userCredentials) {
				throw new Error('Could not complete the sign up procedure');
			}

			/** add new document in the "users" collection */
			await setDoc(doc(db, 'users', userCredentials.user.uid), { watchList: [] });

			/** dispatch signin action */
			dispatch({ type: 'SIGNIN', payload: userCredentials.user });

			/** update state */
			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			if (!isCancelled) {
				setError(null);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { signup, isPending, error };
};
