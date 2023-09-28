import { useEffect, useState } from "react";
import { testDatabase } from "./services/test-firestore-service";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsContextProvider } from "./context/ProductContextProvider";
import { NavBar } from "./components/NavBar/NavBar";
import KeyboardPage from "./pages/ProductPage/KeyboardPage";
import SwitchesPage from "./pages/ProductPage/SwitchesPage";
import DeskmatPage from "./pages/ProductPage/DeskmatPage";
import AccessoriesPage from "./pages/ProductPage/AccessoriesPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
	const [test, setTest] = useState(null);
	useEffect(() => {
		testDatabase()
			.then((test) => setTest(test))
			.catch((e) => console.log(e));
		console.log(test);
	}, []);

	return (
		<>
			<ProductsContextProvider>
				<BrowserRouter>
					<header>
						<NavBar />
					</header>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/product/keyboard-kit" element={<KeyboardPage />} />
						<Route path="/product/switches" element={<SwitchesPage />} />
						<Route path="/product/deskmat" element={<DeskmatPage />} />
						<Route path="/product/accessories" element={<AccessoriesPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</BrowserRouter>
			</ProductsContextProvider>
		</>
	);
}

export default App;
