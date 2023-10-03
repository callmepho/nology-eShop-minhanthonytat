import { db } from "../config/firestore";
import { collection, getDocs } from "firebase/firestore";

export const testDatabase = async () => {
	const collectionRef = collection(db, "test-collection");
	const snapshot = await getDocs(collectionRef);
	// snapshot.docs.forEach((doc) => console.log(doc.id, doc.data()));
	const documents = snapshot.docs.map((doc) => ({
		key: doc.id,
		...doc.data(),
	}));
	console.log(documents);
	return documents;
};
