import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStore} from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyBe1O652slgnsVhlSEOYuwz3pHNrZfs3m4",
    authDomain: "ecomauth-f388c.firebaseapp.com",
    databaseURL: "https://ecomauth-f388c-default-rtdb.firebaseio.com",
    projectId: "ecomauth-f388c",
    storageBucket: "ecomauth-f388c.appspot.com",
    messagingSenderId: "349341857692",
    appId: "1:349341857692:web:c0eea9ac6f832b95347a59",
    measurementId: "G-EBJYCFJFV6"// Initialize Firebaseconst app = initializeApp(firebaseConfig);const analytics = getAnalytics(app
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStore(app);

export {app , firestore , storage};


