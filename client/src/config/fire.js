import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCHwGPpTXDQjxVb4zgmBATN9ed0e7WY2G8",
    authDomain: "react-nodejs-3498b.firebaseapp.com",
    databaseURL: "https://react-nodejs-3498b.firebaseio.com",
    projectId: "react-nodejs-3498b",
    storageBucket: "react-nodejs-3498b.appspot.com",
    messagingSenderId: "988045752572"
}

const fire = firebase.initializeApp(config);

export default fire;
