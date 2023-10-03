import { useEffect, useState } from "react";
import { testDatabase } from "./services/test-firestore-service";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { ProductsContextProvider } from "./context/ProductContextProvider";
import NavBar from "./components/NavBar/NavBar";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
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
						<Route path="/products/:category" element={<ProductsPage />} />
						<Route path="/products/:category/:id" element={<ProductPage />} />
					</Routes>
				</BrowserRouter>
			</ProductsContextProvider>
		</>
	);
}

export default App;
