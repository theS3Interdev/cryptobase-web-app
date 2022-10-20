import CoinSearch from '../components/coin-search';
import Trending from '../components/trending-coins';

const Home = ({ coins }) => {
	return (
		<div>
			<CoinSearch coins={coins} />
			<Trending />
		</div>
	);
};

export default Home;
