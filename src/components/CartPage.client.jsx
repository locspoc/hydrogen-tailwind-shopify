import {
	useCart,
	CartLineProvider,
	Image,
	useCartLine,
	Money,
	Link,
	CartCost,
	CartLineQuantity,
	CartLineQuantityAdjustButton,
} from '@shopify/hydrogen';
import { Suspense } from 'react';

export default function CartPage() {
	return (
		<Suspense>
			<CartTable />
		</Suspense>
	);
}

function CartTable() {
	const { lines, checkoutUrl, status } = useCart();

	if (lines.length === 0) {
		if (status == 'idle') {
			return <div>No items are currently in the cart</div>;
		}
	}

	return (
		<table>
			<tbody>
				{lines.map((line) => {
					return (
						<CartLineProvider key={line.id} line={line}>
							<CartLineItem />
						</CartLineProvider>
					);
				})}
			</tbody>
		</table>
	);
}

function CartLineItem() {
	const { lineId, merchandise, cost } = useCartLine();

	const { image, product, selectedOptions } = merchandise;

	return (
		<tr key={lineId}>
			<td>
				<Image data={image} />
			</td>
			<td>
				<Link to={`/products/${product.handle}`}>{product.title}</Link>
				<br />
				{(selectedOptions || []).map((option) => (
					<span key={option.name}>
						{option.name}: {option.value}
					</span>
				))}
				<br />
				Individual Price
			</td>
			<td>Quantity Selector</td>
			<td>
				Line Total <br />
				Remove
			</td>
		</tr>
	);
}
