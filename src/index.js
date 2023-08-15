import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, doc
} from 'firebase/firestore'
import { queries1, dildoParameters } from './queries.js'
import { storedData } from './store.js'

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


//DATA FETCH
setInterval(async function() {
    const totalOfOptions = document.getElementsByClassName("chooser-option");    

    for (let j = 0; j < totalOfOptions.length; j++) {
        if (!isNaN(parseInt(document.getElementsByClassName("chooser-option")[j].id))) {
            const doneQuery = parseInt(document.getElementsByClassName("chooser-option-done")[0].getElementsByClassName("chooser-option")[0].id);
            const categoriesRef = collection(db, queries1[doneQuery]);
            const docsSnap = await getDocs(categoriesRef);

            await queryRunner(docsSnap);
        }
    }
}, 15000);

async function queryRunner(docQ) {
    const items = [];
    
    docQ.forEach(doc => {
        const data = doc.data();
        const dataArray = Object.entries(data);
        
        for (let i = 0; i < dataArray.length; i++) {
            items.push({ id: dataArray[i][0], value: dataArray[i][1][0] });
        }
    });

    //PULL AND WRITE DATA
    for (let i = 0; i < items.length; i++) {
        const itemsRef = collection(db, "items/2W0jVddrrrzAdA6F7ZJS/" + items[i].id);
        const docsSnap2 = await getDocs(itemsRef);
        const itemName = [];
        
        docsSnap2.forEach(doc => {
            itemName.push(doc.data());

            const itemData = { id: items[i].id, name: itemName[0]["name"] };
            for (let j = 0; j < dildoParameters.length; j++) {
                itemData[dildoParameters[j]] = itemName[0][dildoParameters[j]];
            }

            storedData.push(itemData);
        });
    }

    // Remove null properties from storedData
    for (let i = storedData.length - 1; i >= 0; i--) {
        const itemData = storedData[i];
        const isEmpty = Object.values(itemData).every(value => value === null);
        if (isEmpty) {
            storedData.splice(i, 1);
        }
    }

    console.log(storedData);
}
