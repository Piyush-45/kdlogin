import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCmtfTwHKUSbZfWqxKFexLMLAeJ0UdN9qM",
  authDomain: "kdhandlooms.firebaseapp.com",
  projectId: "kdhandlooms",
  storageBucket: "kdhandlooms.appspot.com",
  messagingSenderId: "967229483680",
  appId: "1:967229483680:web:466fd12819f9b99f6db7c5",
  measurementId: "G-5346GL5872"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
