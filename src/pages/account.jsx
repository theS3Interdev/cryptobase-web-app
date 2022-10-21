import { useAuthContext } from '../hooks/use-auth-context';
import SavedCoins from '../components/saved-coins';

const Account = () => {
	const { user } = useAuthContext();

	return (
		<div className="mx-auto max-w-[1140px]">
			<div className="rounded-div my-12 flex items-center justify-between py-8">
				<div>
					<h1 className="text-2xl font-bold">Account</h1>

					<div>
						<p>Welcome, {user?.email}</p>
					</div>
				</div>

				<div></div>
			</div>

			<div className="justfiy-between rounded-div my-12 flex items-center py-8">
				<div className="min-h-[300px] w-full">
					<h1 className="py-4 text-2xl font-bold">Watch List</h1>
					<SavedCoins />
				</div>
			</div>
		</div>
	);
};

export default Account;
