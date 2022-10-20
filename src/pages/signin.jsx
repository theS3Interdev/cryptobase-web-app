import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';

const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = () => {};

	return (
		<div>
			<div className="mx-auto min-h-[600px] max-w-[400px] px-4 py-20">
				<h1 className="text-2xl font-bold">Sign In</h1>

				<form onSubmit={handleSubmit}>
					<div className="my-4">
						<label>Email</label>
						<div className="relative my-2 w-full rounded-2xl shadow-xl">
							<input
								onChange={(e) => setEmail(e.target.value)}
								className="w-full rounded-2xl border border-input bg-primary p-2"
								type="email"
							/>
							<AiOutlineMail className="absolute right-2 top-3 text-gray-500" />
						</div>
					</div>

					<div className="my-4">
						<label>Password</label>
						<div className="relative my-2 w-full rounded-2xl shadow-xl">
							<input
								onChange={(e) => setPassword(e.target.value)}
								className="w-full rounded-2xl border border-input bg-primary p-2"
								type="password"
							/>
							<AiFillLock className="absolute right-2 top-3 text-gray-500" />
						</div>
					</div>

					<button className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl">
						Sign in
					</button>
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
