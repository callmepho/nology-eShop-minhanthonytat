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
	where,
	query,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllProducts = async () => {
	const collectionRef = collection(db, "eShop");
	const querySnapshot = await getDocs(collectionRef);
	const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	return data;
};

export const subscribeToProducts = (callback) => {
	const collectionRef = collection(db, "eShop");
	const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
		const data = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		callback(data);
	});

	return unsubscribe;
};

export const subscribeToCarousel = (callback) => {
	const collectionRef = collection(db, "Carousel");
	const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
		const data = snapshot.docs.map((doc) => ({
			...doc.data(),
		}));
		callback(data);
	});

	return unsubscribe;
};

export const subscribeToCart = (callback) => {
	const collectionRef = collection(db, "cart");
	const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
		const cartData = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		callback(cartData);
	});

	return unsubscribe;
};
