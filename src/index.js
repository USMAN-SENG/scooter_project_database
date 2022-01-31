
// import {
//     initializeApp
// } from 'firebase/app'
// import {
//     getFirestore,
//     collection,
//     getDocs,
//     onSnapshot,
//     addDoc,
//     deleteDoc,
//     doc
// } from 'firebase/firestore'
// //getFirestore to initilize the service
// //collection to get reference of a collection /table 
// //getDocs to get data inside a collection /table 

// const myTable = document.querySelector("#myTable")
// //console.log(myTable)
// // let customerNewID;
// // let customerIds = [];

// const firebaseConfig = {
//     apiKey: "AIzaSyDElha7yht7jnQ4ZxHIpL4crxcHQH3gBXo",
//     authDomain: "scooter-f636d.firebaseapp.com",
//     projectId: "scooter-f636d",
//     storageBucket: "scooter-f636d.appspot.com",
//     messagingSenderId: "787960192890",
//     appId: "1:787960192890:web:8addc2a5acea04dc2000c3"
// };


// // init firebase
// initializeApp(firebaseConfig)

// // init services
// const db = getFirestore()
import './initilize'

// collection reference of customer table
const colRefCus = collection(db, 'Customer')

// get collection data
// getDocs(colRefCus)
//     .then(snapshot => {
//         // console.log(snapshot.docs) snapshot.docs have a lot of unnecessary info
//         //let books = []

//         let buttonID = 1

//         snapshot.docs.forEach(doc => { //doc is 1 single document / row
//             //books.push({ ...doc.data(), id: doc.id }) // ...doc.data() is spereading the data and put them in array. id: doc.id is adding the id of the document / row into array 
//             //console.log(doc.data().cusFName);
//             // customerIds.push(doc.id);

//             //customerNewID =doc.id

//             addDataToTable(doc, buttonID);
//             console.log(buttonID)
//             buttonID++;
//         })

//         // console.log(books)
//     })

//     .catch(err => {
//         console.log(err.message)
//     })


    // realtime collection data
onSnapshot(colRefCus, (snapshot) => {
    
    let buttonID = 1
    snapshot.docs.forEach(doc => {
        addDataToTable(doc, buttonID);
      
        buttonID++;
    })
    
  })
function addDataToTable(documentss, buttonID) {

    if (buttonID==1 ){

        myTable.innerHTML=
    ` <tr>
        <td >${documentss.data().cusFName} </td>
        <td >${documentss.data().cusLName}</td> 
        <td >${documentss.data().cusEmail}</td> 
        <td >${documentss.data().cusPassword}</td>
        <td>${documentss.data().cusPhone}</td>
        <td><button id=${buttonID} class="btn btn-primary" >Delete</button></td>
      </tr>`;

    }else{

        myTable.innerHTML +=
    ` <tr>
        <td >${documentss.data().cusFName}</td>
        <td >${documentss.data().cusLName}</td> 
        <td >${documentss.data().cusEmail}</td> 
        <td >${documentss.data().cusPassword}</td>
        <td>${documentss.data().cusPhone}</td>
        <td><button id=${buttonID} class="btn btn-primary" >Delete</button></td>
      </tr>`;

    }
    

    const deleteDocRowButton = document.getElementById(buttonID)

    

    deleteDocRowButton.addEventListener('click', (e) => {

        const deleteDocRef = doc(db, 'Customer', documentss.id);

        deleteDoc(deleteDocRef);
            // .then(() => {
            //     deleteBookForm.reset()
            // })
    })

    //   myTable.innerHTML +=
    // ` <tr>
    //     <th >${doc.id}</th>
    //   </tr>`;

}


// adding docs for customer
const addCustomer = document.querySelector('#customerForm')
addCustomer.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRefCus, {
            cusFName: addCustomer.cusFName.value,
            cusLName: addCustomer.cusLName.value,
            cusEmail: addCustomer.cusEmail.value,
            cusPassword: addCustomer.cusPass.value,
            cusPhone: addCustomer.cusPhone.value
        })
        .then(() => {
            addCustomer.reset()
        })
})




///*********************** for Employee ********************** */
///*********************** for Employee ********************** */
///*********************** for Employee ********************** */
///*********************** for Employee ********************** */
///*********************** for Employee ********************** */
///*********************** for Employee ********************** */
// const empTable = document.querySelector("#empTable");  //myTable

// const colRefEmp = collection(db, 'Employee') //colRefCus

//     // realtime collection data
// onSnapshot(colRefEmp, (snapshot) => {  //colRefCus
    
//     let buttonID = 21
//     snapshot.docs.forEach(doc => {
//         addEmpToTable(doc, buttonID); // change addDataToTable
//         console.log(buttonID)
//         buttonID++;
//     })
    
//   })
// function addEmpToTable(documentss, buttonID) {

//     if (buttonID==21 ){

//         empTable.innerHTML=   //myTable
//     ` <tr>
//         <td >${documentss.data().empFName} </td>
//         <td >${documentss.data().empLName}</td> 
//         <td >${documentss.data().empEmail}</td> 
//         <td >${documentss.data().empPassword}</td>
//         <td>${documentss.data().empAddress}</td>
//         <td>${documentss.data().empSalary}</td>
//         <td><button id=${buttonID} class="btn btn-primary" >Delete</button></td>
//       </tr>`;

//     }else{

//         empTable.innerHTML +=  //myTable
//     ` <tr>
//         <td >${documentss.data().empFName} </td>
//         <td >${documentss.data().empLName}</td> 
//         <td >${documentss.data().empEmail}</td> 
//         <td >${documentss.data().empPassword}</td>
//         <td>${documentss.data().empAddress}</td>
//         <td>${documentss.data().empSalary}</td>
//         <td><button id=${buttonID} class="btn btn-primary" >Delete</button></td>
//       </tr>`;

//     }
    

//     const deleteDocRowButton = document.getElementById(buttonID)

//     console.log(`${deleteDocRowButton}`)

//     deleteDocRowButton.addEventListener('click', (e) => {

//         const deleteDocRef = doc(db, 'Customer', documentss.id);

//         deleteDoc(deleteDocRef);
            
//     })
// }


// // adding docs for Employee 
// const addCustomer = document.querySelector('#customerForm')
// addCustomer.addEventListener('submit', (e) => {
//     e.preventDefault()

//     addDoc(colRefEmp, { //colRefCus
//             cusFName: addCustomer.cusFName.value,
//             cusLName: addCustomer.cusLName.value,
//             cusEmail: addCustomer.cusEmail.value,
//             cusPassword: addCustomer.cusPass.value,
//             cusPhone: addCustomer.cusPhone.value
//         })
//         .then(() => {
//             addCustomer.reset()
//         })
// })