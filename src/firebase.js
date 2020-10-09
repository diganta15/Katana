import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKyUNdBPKN6FFvgL2QAje03ViChR6aWMo",
    authDomain: "katana-r.firebaseapp.com",
    databaseURL: "https://katana-r.firebaseio.com",
    projectId: "katana-r",
    storageBucket: "katana-r.appspot.com",
    messagingSenderId: "1091710835968",
    appId: "1:1091710835968:web:98358120e38c9bed4b27e5",
    measurementId: "G-QQZVSPC99S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const database = firebaseApp.firestore();

export default firebaseApp;