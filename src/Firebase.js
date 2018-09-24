import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "<<API_Key_From_Firebase>>",
    authDomain: "<<projectId>>.firebaseapp.com",
    databaseURL: "https://<<projectId>>.firebaseio.com",
    projectId: "<<projectId>>",
    storageBucket: "<<projectId>>.appspot.com",
    messagingSenderId: "936414420779"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
