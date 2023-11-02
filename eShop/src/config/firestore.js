// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBW511PmJPy3G-siar7hCC4Fn5fB6WrLEY",
	authDomain: "nology-eshop-minhanthony-67797.firebaseapp.com",
	projectId: "nology-eshop-minhanthony-67797",
	storageBucket: "nology-eshop-minhanthony-67797.appspot.com",
	messagingSenderId: "783888532738",
	appId: "1:783888532738:web:843996e1dcb472479b6e1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
