
import {
    initializeApp
} from 'firebase/app'
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'
//getFirestore to initilize the service
//collection to get reference of a collection /table 
//getDocs to get data inside a collection /table 

const firebaseConfig = {
    apiKey: "AIzaSyDElha7yht7jnQ4ZxHIpL4crxcHQH3gBXo",
    authDomain: "scooter-f636d.firebaseapp.com",
    projectId: "scooter-f636d",
    storageBucket: "scooter-f636d.appspot.com",
    messagingSenderId: "787960192890",
    appId: "1:787960192890:web:8addc2a5acea04dc2000c3"
};


// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()