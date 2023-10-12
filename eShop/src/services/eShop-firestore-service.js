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
	const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	console.log(data);
	return data;
};

export const subscribeToCart = (callback) => {
	const collectionRef = collection(db, "cart");
	const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
		const cartData = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		console.log(cartData);
		callback(cartData);
	});

	return unsubscribe;
};
