//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB_WtBwLE7G6qoSHY1I6xltnNuVM9pqavM",
    authDomain: "comp1800-202410-demo-d54bd.firebaseapp.com",
    projectId: "comp1800-202410-demo-d54bd",
    storageBucket: "comp1800-202410-demo-d54bd.appspot.com",
    messagingSenderId: "38578522379",
    appId: "1:38578522379:web:dca273834f823e5c62fa0e"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
