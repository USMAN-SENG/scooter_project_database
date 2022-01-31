
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

const empTable = document.querySelector("#empTable");  //myTable

const colRefEmp = collection(db, 'Employee') //colRefCus
    // realtime collection data
    onSnapshot(colRefEmp, (snapshot) => {  //colRefCus
    
        let buttonID = 21
        snapshot.docs.forEach(doc => {
            addEmpToTable(doc, buttonID); // change addDataToTable
            console.log(buttonID)
            buttonID++;
        })
        
      })
    function addEmpToTable(documentss, buttonID) {
    
        if (buttonID==21 ){
    
            empTable.innerHTML=   //myTable
        ` <tr>
            <td >${documentss.data().empFName} </td>
            <td >${documentss.data().empLName}</td> 
            <td >${documentss.data().empEmail}</td> 
            <td >${documentss.data().empPassword}</td>
            <td>${documentss.data().empAddress}</td>
            <td>${documentss.data().empSalary}</td>
            <td><button id=${buttonID} class="btn btn-primary" >Delete</button></td>
          </tr>`;
    
        }else{
    
            empTable.innerHTML +=  //myTable
        ` <tr>
            <td >${documentss.data().empFName} </td>
            <td >${documentss.data().empLName}</td> 
            <td >${documentss.data().empEmail}</td> 
            <td >${documentss.data().empPassword}</td>
            <td>${documentss.data().empAddress}</td>
            <td>${documentss.data().empSalary}</td>
            <td><button id=${buttonID} class="btn btn-primary" >Delete</button></td>
          </tr>`;
    
        }
        
    
        const deleteDocRowButton = document.getElementById(buttonID)
    
        console.log(`${deleteDocRowButton}`)
    
        deleteDocRowButton.addEventListener('click', (e) => {
    
            const deleteDocRef = doc(db, 'Employee', documentss.id);
    
            deleteDoc(deleteDocRef);
                
        })
    }
    
    
    // adding docs for Employee 
    const addEmp = document.querySelector('#empForm') //addCustomer
    addEmp.addEventListener('submit', (e) => {
        e.preventDefault()
    
        addDoc(colRefEmp, { //colRefCus
                empFName: addEmp.empFName.value,
                empLName: addEmp.empLName.value,
                empEmail: addEmp.empEmail.value,
                empPassword: addEmp.empPass.value,
                empAddress: addEmp.empAddress.value,
                empSalary: addEmp.empSalary.value
            })
            .then(() => {
                addEmp.reset()
            })
    })