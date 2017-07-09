import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDioaSfoRIDQJzkMn8ZF69DyT_CYUrzy98",
  authDomain: "verdeasy-d832a.firebaseapp.com",
  databaseURL: "https://verdeasy-d832a.firebaseio.com",
  projectId: "verdeasy-d832a",
  storageBucket: "verdeasy-d832a.appspot.com",
  messagingSenderId: "673743291045"
});

export const db = firebaseApp.database();