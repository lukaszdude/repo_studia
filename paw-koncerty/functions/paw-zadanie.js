import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, setDoc}  from "firebase/firestore";
import { collection, addDoc, doc, deleteDoc, getDocs, query, where, updateDoc, deleteField } from "firebase/firestore"; 

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDfK-gbvNifIYK_xUJn-MFQuVVGAevxBVo",
  authDomain: "paw-concerts.firebaseapp.com",
  databaseURL: "https://paw-concerts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "paw-concerts",
  storageBucket: "paw-concerts.appspot.com",
  messagingSenderId: "729814499003",
  appId: "1:729814499003:web:44674b45173bef2b87b39e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Dodanie nowej kolekcji a w niej parę dokumentów
try {
  const docRef = collection(db, "cities");
  await setDoc(doc(docRef, "Warszawa"), {
    country: "Poland",
    population: 1800000,
    capital: true,
    Rivers: ["Wisła", "Wilanówka", "Długa"] });
  await setDoc(doc(docRef, "Wrocław"), {
    country: "Poland",
    population: 640000,
    capital: false,
    Rivers: ["Odra", "Bystrzyca", "Oława", "Ślęza"] });
  await setDoc(doc(docRef, "Berlin"), {
    country: "Germany",
    population: 3700000,
    capital: true,
    Rivers: ["Sprewa", "Hawela"] });
  await setDoc(doc(docRef, "Mediolan"), {
    country: "Italia",
    population: 1400000,
    capital: false,
    Rivers: ["Ticino", "Adda", "Pad"] });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

/*//Wyświetlenie jednego zdefiniowange dokumentu
const docCity = doc(db, "cities", "Wrocław");
const docSnap = await getDoc(docCity);
if(docSnap.exists()){
  console.log(docSnap.data());
} else{
  console.log("Dokument nie istnieje!");
}*/

/*
//wyświetlanie konkretnych dokumentów z zapytaniem
const q = query(collection(db, "cities"), where("population", "<", 1500000));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log("Populacja mniejsza niż 1,5mln - ", doc.id, ":\n", doc.data());
});
*/

/*//Zaktualizowanie dokumentu Mediolan
const updateData = doc(db, "cities", "Mediolan");
  updateDoc(updateData, {
    population: 1650000
  });*/

//Usunięcie konkretnego pola z dokumentu
  /*
const deletePole = doc(db, "cities", "Berlin");
await updateDoc(deletePole, {
  population: deleteField()
});*/


//Usunięcie całego dokumentu
//await deleteDoc(doc(db, "cities", "Mediolan"));

/*
console.log("----- Wyświetlenie wszystkich dokumentów -----")
const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, ":\n", doc.data());
});*/