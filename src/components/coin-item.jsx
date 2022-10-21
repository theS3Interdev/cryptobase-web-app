import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useAuthContext } from '../hooks/use-auth-context';
import { useFirestore } from '../hooks/use-firestore';
import { arrayUnion, Timestamp } from '../firebase/config';

const CoinItem = ({ coin }) => {
	const { user } = useAuthContext();
	const { updateDocument, response } = useFirestore('users');
	const [savedCoin, setSavedCoin] = useState(false);

	const saveCoin = async () => {
		if (user) {
			setSavedCoin(true);

			const coinToAdd = {
				id: coin.id,
				name: coin.name,
				image: coin.image,
				rank: coin.market_cap_rank,
				symbol: coin.symbol,
				createdAt: Timestamp.fromDate(new Date()),
			};

			/** add coin to the watch list */
			await updateDocument(user.uid, { watchList: arrayUnion(coinToAdd) });
		} else {
			alert('Sorry, but you will need to sign in to save a coin to your watch list.');
		}
	};

	return (
		<tr className="h-[80px] overflow-hidden border-b">
			<td onClick={saveCoin}>{savedCoin ? <AiFillStar /> : <AiOutlineStar />}</td>

			<td>{coin.market_cap_rank}</td>

			<td>
				<Link to={`/coin/${coin.id}`}>
					<div className="flex items-center">
						<img className="mr-2 w-6 rounded-full" src={coin.image} alt={coin.id} />
						<p className="hidden sm:table-cell">{coin.name}</p>
					</div>
				</Link>
			</td>

			<td>{coin.symbol.toUpperCase()}</td>

			<td>${coin.current_price.toLocaleString()}</td>

			<td>
				{coin.price_change_percentage_24h > 0 ? (
					<p className="text-green-500">{coin.price_change_percentage_24h.toFixed(2)}%</p>
				) : (
					<p className="text-red-500">{coin.price_change_percentage_24h.toFixed(2)}%</p>
				)}
			</td>

			<td className="hidden w-[180px] md:table-cell">
				${coin.total_volume.toLocaleString()}
			</td>

			<td className="hidden w-[180px] sm:table-cell">
				${coin.market_cap.toLocaleString()}
			</td>

			<td>
				<Sparklines data={coin.sparkline_in_7d.price}>
					<SparklinesLine color="teal" />
				</Sparklines>
			</td>
		</tr>
	);
};

export default CoinItem;
