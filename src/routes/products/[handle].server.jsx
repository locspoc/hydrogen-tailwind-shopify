import {
	useShopQuery,
	gql,
	CacheLong,
	CacheNone,
	useRouteParams,
	Seo,
} from '@shopify/hydrogen';
import { Suspense } from 'react';

import Layout from '../../components/Layout.server';
import ProductDetails from '../../components/ProductDetails.client';

export default function Product() {
	const { handle } = useRouteParams();

	const data = useShopQuery({
		query: QUERY,
		cache: CacheLong(),
		preload: true,
		variables: {
			handle,
		},
	});

	// console.log(data);

	const {
		data: { product: product },
	} = useShopQuery({
		query: QUERY,
		variables: {
			handle,
		},
		cache: CacheNone(),
	});

	// console.log(product);

	return (
		<Layout title={product.title}>
			<Suspense>
				<Seo type="product" data={product} />
				<ProductDetails product={product} />
			</Suspense>
		</Layout>
	);
}

const QUERY = gql`
	query Product($handle: String!) {
		product(handle: $handle) {
			title
			descriptionHtml
			media(first: 1) {
				nodes {
					... on MediaImage {
						id
						image {
							url
							width
							height
							altText
						}
					}
				}
			}
			variants(first: 100) {
				nodes {
					id
					availableForSale
					priceV2 {
						amount
						currencyCode
					}
					compareAtPriceV2 {
						amount
						currencyCode
					}
					selectedOptions {
						name
						value
					}
				}
			}
		}
	}
`;
