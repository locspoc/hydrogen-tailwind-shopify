import { useShopQuery, CacheLong, gql, Seo } from '@shopify/hydrogen';
import Layout from '../components/Layout.server';

export default function Home() {
	return (
		<Layout>
			<h1>Home Page</h1>
		</Layout>
	);
}
