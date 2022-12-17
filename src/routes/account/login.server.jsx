import { useShopQuery, CacheLong, gql } from '@shopify/hydrogen';
import { Suspense } from 'react';

import Layout from '../../components/Layout.server';
import AccountLoginForm from '../../components/account/AccountLoginForm.client';

export default function Login() {
	return (
		<Layout title="Login">
			<AccountLoginForm />
		</Layout>
	);
}
