import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';

import { useSignin } from '../hooks/use-signin';

const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signin, isPending, error } = useSignin();

	const handleSubmit = (e) => {
		e.preventDefault();

		signin(email, password);

		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<div className="mx-auto min-h-[600px] max-w-[400px] px-4 py-20">
				<h1 className="text-2xl font-bold">Sign In</h1>

				<form onSubmit={handleSubmit}>
					<div className="my-4">
						<label>Email</label>
						<div className="relative my-2 w-full rounded-2xl shadow-xl">
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
								className="w-full rounded-2xl border border-input bg-primary p-2"
							/>
							<AiOutlineMail className="absolute right-2 top-3 text-gray-500" />
						</div>
					</div>

					<div className="my-4">
						<label>Password</label>
						<div className="relative my-2 w-full rounded-2xl shadow-xl">
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required
								className="w-full rounded-2xl border border-input bg-primary p-2"
							/>
							<AiFillLock className="absolute right-2 top-3 text-gray-500" />
						</div>
					</div>

					{!isPending && (
						<button className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl">
							Sign in
						</button>
					)}

					{isPending && (
						<button className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl">
							Signing in...
						</button>
					)}

					{error && <p className="my-2 bg-red-300 p-3">{error}</p>}
				</form>

				<p className="my-4">
					Don't have an account?{' '}
					<Link to="/signup" className="text-accent">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signin;
