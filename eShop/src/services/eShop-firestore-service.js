import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	increment,
	onSnapshot,
	updateDoc,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllProducts = async () => {
	const collectionRef = collection(db, "eShop");
	const querySnapshot = await getDocs(collectionRef);
	const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
	console.log(data);
	return data[1];
};

export const getCarousel = async () => {
	const collectionRef = collection(db, "eShop");
	const querySnapshot = await getDocs(collectionRef);
	const data = querySnapshot.docs.map((doc) => doc.data());
	return data[0];
};