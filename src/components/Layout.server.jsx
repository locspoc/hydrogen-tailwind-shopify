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
						<div>
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
							<Link to="/cart" className="p-2">
								Cart
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
