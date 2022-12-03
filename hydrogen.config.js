import { defineConfig } from '@shopify/hydrogen/config';

export default defineConfig({
	shopify: {
		// storeDomain: 'hydrogen-preview.myshopify.com',
		storeDomain: import.meta.env.PUBLIC_STORE_DOMAIN,
		// storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
		storefrontToken: import.meta.env.PUBLIC_STOREFRONT_API_TOKEN,
		storefrontApiVersion: '2022-07',
	},
});
