import { initializeApp } from 'firebase/app';

/** firebase configuration object containing keys and identifiers */
const firebaseConfig = {
	apiKey: 'AIzaSyANr-JPGzQk_A5q5Bm2Jnyyl5Few7BzU7Q',
	authDomain: 'crypotobase.firebaseapp.com',
	projectId: 'crypotobase',
	storageBucket: 'crypotobase.appspot.com',
	messagingSenderId: '583574113384',
	appId: '1:583574113384:web:ef7baf03797cb068013fdd',
	measurementId: 'G-JR8DHY6ZPH',
};

/** initialize firebase */
const app = initializeApp(firebaseConfig);

/** initialize firebase services */
const auth = getAuth(app);
const db = getFirestore(app);

/** export services */
export { auth, db };
