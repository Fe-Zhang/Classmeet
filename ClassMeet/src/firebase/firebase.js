import firebase from '@firebase/app';
import '@firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyADE6PThgj1GgTX16WR1lOcKXAfgMPRlGA",
    authDomain: "classmeet-1539411560280.firebaseapp.com",
    databaseURL: "https://classmeet-1539411560280.firebaseio.com",
    projectId: "classmeet-1539411560280",
    storageBucket: "classmeet-1539411560280.appspot.com",
    messagingSenderId: "97360663308"
};

const devConfig = {
    apiKey: "AIzaSyADE6PThgj1GgTX16WR1lOcKXAfgMPRlGA",
    authDomain: "classmeet-1539411560280.firebaseapp.com",
    databaseURL: "https://classmeet-1539411560280.firebaseio.com",
    projectId: "classmeet-1539411560280",
    storageBucket: "classmeet-1539411560280.appspot.com",
    messagingSenderId: "97360663308"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};