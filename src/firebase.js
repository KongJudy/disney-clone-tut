import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAOCsVNVhNhZ1cTioSnic8QfUNtOGNL8YE',
  authDomain: 'disneyplus-clone-78017.firebaseapp.com',
  projectId: 'disneyplus-clone-78017',
  storageBucket: 'disneyplus-clone-78017.appspot.com',
  messagingSenderId: '875958476819',
  appId: '1:875958476819:web:2227e00ec9447f051f9fe6',
  measurementId: 'G-W9ES87MCBT'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
