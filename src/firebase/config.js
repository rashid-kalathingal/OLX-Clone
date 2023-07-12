import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArvoAV5Py89szVXEEG_p3EoVn-Y91X5Lw",
    authDomain: "fir-16661.firebaseapp.com",
    projectId: "fir-16661",
    storageBucket: "fir-16661.appspot.com",
    messagingSenderId: "67060734644",
    appId: "1:67060734644:web:5711aac08364bb1eca15e1",
    measurementId: "G-CQ9BPV7TQM"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;