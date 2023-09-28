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
	const collectionRef = collection(db, "/eShop/products/keyboards");
	const querySnapshot = await getDocs(collectionRef);
	return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
