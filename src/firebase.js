import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBveNIE6XAPtW43wGQ-OR4Jte4M2MQ_Wf0",
    authDomain: "ecommerce-clone-6939c.firebaseapp.com",
    databaseURL: "https://ecommerce-clone-6939c.firebaseio.com",
    projectId: "ecommerce-clone-6939c",
    storageBucket: "ecommerce-clone-6939c.appspot.com",
    messagingSenderId: "525843002643",
    appId: "1:525843002643:web:46ab13f99579d69fd816e6",
    measurementId: "G-0R30Z8TVR1"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}; 