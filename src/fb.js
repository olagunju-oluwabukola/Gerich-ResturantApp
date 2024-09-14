import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtr-aa6bPrS3FtlUeua8vydc57qRJTFuE',
  authDomain: 'gericht-bee84.firebaseapp.com',
  databaseURL: 'https://gericht-bee84-default-rtdb.firebaseio.com',
  projectId: 'gericht-bee84',
  storageBucket: 'gericht-bee84.appspot.com',
  messagingSenderId: '793098447980',
  appId: '1:793098447980:web:7107205d9a5ad17d29bc49',
  measurementId: 'G-X6YB4H45BM'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
