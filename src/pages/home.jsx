import CoinSearch from '../components/coin-search';

const Home = ({ coins }) => {
	return (
		<div>
			<CoinSearch coins={coins} />
		</div>
	);
};

export default Home;
