import { Link, Image, Money } from '@shopify/hydrogen';
import placeholderImage from '../assets/images/Placeholder.png';

export default function ProductCard({ product }) {
	const { priceV2 } = product.variants.nodes[0] || {};
	const { amount } = priceV2 || {};
	const { url: image_url, altText: image_alt } = product.featuredImage || {};
	// console.log(product);
	// console.log('image_url: ', image_url);
	// console.log('image_alt: ', image_alt);

	return (
		<div className="card">
			<Link to={`/products/${product.handle}`} className="">
				<img
					src={image_url ? image_url : placeholderImage}
					alt={image_alt ? image_alt : 'No alt text specified'}
					className="rounded shadow"
				/>
			</Link>
			<div className="flex flex-col items-center justify-center p-5">
				<Link to={`/product/${product.handle}`}>
					<h2 className="text-lg">{product.title}</h2>
				</Link>
				<p>${amount}</p>
				<button className="primary-button" type="button">
					Add To Cart
				</button>
			</div>
		</div>
	);
}
