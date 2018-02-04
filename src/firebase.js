import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCY-NHx7IIPQJwJJkBAej8eooFlnevtWUw",
    authDomain: "therapy-finder.firebaseapp.com",
    databaseURL: "https://therapy-finder.firebaseio.com",
    projectId: "therapy-finder",
    storageBucket: "therapy-finder.appspot.com",
    messagingSenderId: "351121717985"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();