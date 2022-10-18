import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/** firebase configuration object containing keys and identifiers */
const firebaseConfig = {
	apiKey: 'AIzaSyDBFpfcrBTjdYk0s1GTFiunmhoaQuhaNfw',
	authDomain: 'cryptobase-project.firebaseapp.com',
	projectId: 'cryptobase-project',
	storageBucket: 'cryptobase-project.appspot.com',
	messagingSenderId: '891228626384',
	appId: '1:891228626384:web:d8cb19da9f7d611f35add5',
	measurementId: 'G-BHHYHDHZ70',
};

/** initialize firebase */
const app = initializeApp(firebaseConfig);

/** initialize firebase services */
const auth = getAuth(app);
const db = getFirestore(app);

/** export services */
export { auth, db };
