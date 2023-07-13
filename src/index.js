import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, doc
} from 'firebase/firestore'
import { queries } from './queries.js'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAi403RTaV0FA-dkJZmh71AUKKNNR5s4y8",
    authDomain: "sepe-c49a5.firebaseapp.com",
    projectId: "sepe-c49a5",
    storageBucket: "sepe-c49a5.appspot.com",
    messagingSenderId: "589049197966",
    appId: "1:589049197966:web:4cf17b3346c7459b3260df",
    measurementId: "G-J49EBC83VM"
  }

// INIT FIREBASE APP
initializeApp(firebaseConfig)

// INNIT SERVICES
const db = getFirestore()

// ARRAYS
const objectRef = [];
const items = []

// ACTION LISTENER END

// COLLECTION REF
const categoriesRef = collection(db, queries[2]);
const docsSnap = await getDocs(categoriesRef);

queryRunner(docsSnap);

function queryRunner(docQ) {
    docQ.forEach(doc => {
        objectRef.push(doc.data())
        const array = Object.entries(objectRef[0]);
        for (let i = 0; i < array.length; i++) {
            items.push([array[i][1][0], array[i][1][1]]);
        }
        console.log(items);
    })
}

//DATA FETCH
for (let i = 0; i < items.length; i++){
    const itemsRef = collection(db, "items/2W0jVddrrrzAdA6F7ZJS/" + items[i][0]);
    const docsSnap2 = await getDocs(itemsRef);
    const itemName = [];

    docsSnap2.forEach(doc => {
        itemName.push(doc.data());
        console.log(itemName[0]["name"]);
        document.getElementById("left-header").innerHTML = itemName[0]["name"];
    })

    setInterval(function(){ 
        console.log("deneme")
    }, 5000);
    
}

  