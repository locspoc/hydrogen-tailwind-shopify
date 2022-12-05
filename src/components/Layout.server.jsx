import { useShopQuery, CacheLong, gql, Seo, Link } from '@shopify/hydrogen';
import { Suspense } from 'react';

export default function Layout({ children }) {
	const data = useShopQuery({
		query: SHOP_QUERY,
		cache: CacheLong(),
		preload: true,
	});

	const {
		data: { shop },
	} = data;

	return (
		<>
			<Seo
				type="defaultSeo"
				data={{
					title: shop.name,
					description: shop.description,
				}}
			/>

			<div className="flex min-h-screen flex-col justify-between">
				<header>
					<nav className="flex h-12 items-center px-4 justify-between shadow-md">
						<Link to="/" className="text-lg font-bold">
							{shop.name}
						</Link>
						<div className="flex">
							<Link to="/catalog" className="p-2">
								Catalog
							</Link>
							<Link to="/collections/frontpage" className="p-2">
								Front Page
							</Link>
							<Link to="/collections/test1" className="p-2">
								Test 1
							</Link>
							<Link to="/collections/test2" className="p-2">
								Test 2
							</Link>
						</div>
						<div className="flex">
							<Link to="/cart" className="p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									/>
								</svg>
							</Link>
							<Link to="/login" className="p-2">
								Login
							</Link>
						</div>
					</nav>
				</header>
				<main className="container m-auto mt-4">
					<Suspense>{children}</Suspense>
				</main>
				<footer className="flex h-10 justify-center items-center shadow-inner">
					<p>Copyright © 2022 {shop.name}</p>
				</footer>
			</div>
		</>
	);
}

const SHOP_QUERY = gql`
	query ShopInfo {
		shop {
			name
			description
		}
	}
`;
