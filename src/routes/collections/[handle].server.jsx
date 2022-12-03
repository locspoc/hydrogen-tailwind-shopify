import {
	useShopQuery,
	CacheLong,
	gql,
	useRouteParams,
} from '@shopify/hydrogen';
import { Suspense } from 'react';

import Layout from '../../components/Layout.server';
import ProductCard from '../../components/ProductCard.server';

export default function Collection() {
	const { handle } = useRouteParams();
	console.log('handle: ', handle);

	const data = useShopQuery({
		query: QUERY,
		cache: CacheLong(),
		preload: true,
		variable: {
			handle,
		},
	});

	console.log(data);

	// const {
	// 	data: {
	// 		collections: {
	// 			products: { nodes },
	// 		},
	// 	},
	// } = data;

	return (
		<Layout>
			<Suspense>
				{/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{nodes.map((product) => (
						<ProductCard
							key={product.handle}
							product={product}
						></ProductCard>
					))}
				</div> */}
			</Suspense>
		</Layout>
	);
}

const QUERY = gql`
	query CollectionDetails($handle: String!) {
		collection(handle: $handle) {
			id
			title
			description
			seo {
				description
				title
			}
			products(first: 9) {
				nodes {
					title
					handle
					featuredImage {
						url
						altText
						height
						width
					}
					variants(first: 1) {
						nodes {
							priceV2 {
								amount
								currencyCode
							}
							compareAtPriceV2 {
								amount
								currencyCode
							}
						}
					}
				}
			}
		}
	}
`;
