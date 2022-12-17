import { Link } from '@shopify/hydrogen';
import { Suspense } from 'react';

export default function AccountLoginForm() {
	return (
		<>
			<Suspense>
				<form className="mx-auto max-w-screen-md p-4">
					<h1 className="mb-4 text-xl">Login</h1>
					<div className="mb-4">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="w-full border border-black"
							id="email"
							autoFocus
						></input>
					</div>
					<div className="mb-4">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="w-full border border-black"
							id="password"
						></input>
					</div>
					<div className="mb-4">
						<button className="primary-button">Login</button>
					</div>
					<div className="mb-4">
						Don&apos;t have an account? &nbsp;
					</div>
					<Link to="/account/register">Register</Link>
				</form>
			</Suspense>
		</>
	);
}
