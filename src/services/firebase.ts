import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey:process.env.REACT_API_KEY,
  authDomain:process.env.REACT_AUTH_DOMAIN,
  databaseURL:process.env.REACT_DATABASE_URL,
  projectId:process.env.REACT_PROJECT_ID,
  storageBucket:process.env.REACT_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_MESSAGE_SENDER,
  appId:process.env.REACT_APP_ID,
  measurementId:process.env.REACT_MEASUREMENT,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();