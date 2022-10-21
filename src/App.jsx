import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from './hooks/use-auth-context';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Account from './pages/account';
import CoinPage from './pages/coin-page';

const App = () => {
	const { authIsReady, user } = useAuthContext();
	const [coins, setCoins] = useState([]);

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

	useEffect(() => {
		axios.get(url).then((res) => {
			setCoins(res.data);
		});
	}, [url]);

	return (
		<>
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home coins={coins} />} />
						<Route path="/signin" element={user ? <Navigate to="/" /> : <Signin />} />
						<Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
						<Route
							path="/account"
							element={user ? <Account /> : <Navigate to="/signin" />}
						/>
						<Route path="/coin/:coinId" element={<CoinPage />}>
							<Route path=":coinId" />
						</Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			)}
		</>
	);
};

export default App;
