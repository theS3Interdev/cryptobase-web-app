import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { useAuthContext } from '../hooks/use-auth-context';
import { useSignout } from '../hooks/use-signout';
import ThemeToggle from './theme-toggle';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const { signout } = useSignout();
	const { user } = useAuthContext();

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		/** navigation bar start */
		<div className="rounded-div flex h-20 items-center justify-between font-bold">
			{/** application title start */}
			<Link to="/">
				<h1 className="text-2xl">Cryptobase</h1>
			</Link>
			{/** application title end */}

			{/** theme toggle start */}
			<div className="hidden md:block">
				<ThemeToggle />
			</div>
			{/** theme toggle end */}

			{/** user signin/signup buttons start */}
			{!user && (
				<>
					<div className="hidden md:block">
						<Link to="/signin" className="p-4 hover:text-accent">
							Sign In
						</Link>

						<Link
							to="/signup"
							className="ml-2 rounded-2xl bg-button px-5 py-2 text-btnText shadow-lg hover:shadow-2xl"
						>
							Sign Up
						</Link>
					</div>
				</>
			)}

			{user && (
				<>
					<div className="hidden md:block">
						<Link to="/account" className="p-4 hover:text-accent">
							Account
						</Link>

						<button
							className="ml-2 rounded-2xl bg-button px-5 py-2 text-btnText shadow-lg hover:shadow-2xl"
							onClick={signout}
						>
							Sign Out
						</button>
					</div>
				</>
			)}
			{/** user signin/signup buttons end */}

			{/** hamburger menu start */}
			<div onClick={handleNav} className="z-10 block cursor-pointer md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			{/** hamburger menu end */}

			{/** mobile menu start */}
			<div
				className={
					nav
						? 'fixed left-0 top-20 z-10 flex h-[90%] w-full flex-col items-center justify-between bg-primary duration-300 ease-in md:hidden'
						: 'fixed left-[-100%] top-20 flex h-[90%] flex-col items-center justify-between duration-300 ease-in'
				}
			>
				<ul className="w-full p-4">
					<li onClick={handleNav} className="border-b py-6">
						<Link to="/">Home</Link>
					</li>

					<li className="py-6">
						<ThemeToggle />
					</li>
				</ul>

				{/** user signin/signup buttons start */}
				{!user && (
					<>
						<div className="flex w-full flex-col p-4">
							<Link to="/signin">
								<button
									onClick={handleNav}
									className="my-2 w-full rounded-2xl border border-secondary bg-primary p-3 text-primary shadow-xl"
								>
									Sign In
								</button>
							</Link>

							<Link onClick={handleNav} to="/signup">
								<button className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl">
									Sign Up
								</button>
							</Link>
						</div>
					</>
				)}

				{user && (
					<>
						<div className="flex w-full flex-col p-4">
							<Link to="/account">
								<button
									onClick={handleNav}
									className="my-2 w-full rounded-2xl border border-secondary bg-primary p-3 text-primary shadow-xl"
								>
									Account
								</button>
							</Link>

							<button
								className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl"
								onClick={() => {
									signout();
									handleNav();
								}}
							>
								Sign Out
							</button>
						</div>
					</>
				)}
				{/** user signin/signup buttons end */}
			</div>
			{/** mobile menu end */}
		</div>
		/** navigation bar end */
	);
};

export default Navbar;
