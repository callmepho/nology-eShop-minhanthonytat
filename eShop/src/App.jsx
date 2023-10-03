import { useEffect, useState } from "react";
import { testDatabase } from "./services/test-firestore-service";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { ProductsContextProvider } from "./context/ProductContextProvider";
import NavBar from "./components/NavBar/NavBar";
import KeyboardPage from "./pages/ProductPage/KeyboardPage";
import SwitchesPage from "./pages/ProductPage/SwitchesPage";
import DeskmatPage from "./pages/ProductPage/DeskmatPage";
import AccessoriesPage from "./pages/ProductPage/AccessoriesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
	return (
		<>
			<ProductsContextProvider>
				<BrowserRouter>
					<header>
						<NavBar />
					</header>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/products/keyboard-kits" element={<KeyboardPage />} />
						<Route path="/products/switches" element={<SwitchesPage />} />
						<Route path="/products/deskmats" element={<DeskmatPage />} />
						<Route path="/products/:id" element={<ProductPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</BrowserRouter>
			</ProductsContextProvider>
		</>
	);
}

export default App;
