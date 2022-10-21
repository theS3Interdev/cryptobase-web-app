import { useEffect, useState } from 'react';
import { useAuthContext } from './use-auth-context';
import { auth, signInWithEmailAndPassword } from '../firebase/config';

export const useSignin = () => {
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useAuthContext();

	const signin = async (email, password) => {
		setError(null);
		setIsPending(true);

		try {
			/** signin procedure */
			const userCredentials = await signInWithEmailAndPassword(auth, email, password);

			/** dispatch signin action */
			dispatch({ type: 'SIGNIN', payload: userCredentials.user });

			/** update state */
			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			if (!isCancelled) {
				setError(err.message);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { signin, isPending, error };
};
