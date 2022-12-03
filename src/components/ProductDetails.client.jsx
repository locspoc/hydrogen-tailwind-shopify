import {
	ProductOptionsProvider,
	useProductOptions,
	Image,
	ProductPrice,
	AddToCartButton,
	Link,
} from '@shopify/hydrogen';

export default function ProductDetails({ product }) {
	// console.log(product);

	// return <div>Product Details</div>;
	if (!product) {
		return <div>Product Not Found</div>;
	}
	return (
		<ProductOptionsProvider data={product}>
			<div className="py-2">
				<Link to="/catalog">back to catalog</Link>
			</div>
			<div className="grid md:grid-cols-4 md:gap-3">
				<div className="md:col-span-2">
					<Image
						data={product.media.nodes[0].image}
						altText={product.media.nodes[0].image.altText}
						className="product-page-image"
					/>
				</div>
				<ProductForm product={product} />
			</div>
		</ProductOptionsProvider>
	);
}

function ProductForm({ product }) {
	const { options, selectedVariant, selectedOptions, setSelectedOption } =
		useProductOptions();

	const isOutOfStock = !selectedVariant?.availableForSale || false;

	console.log('isOutOfStock: ', isOutOfStock);

	// return <div>Product Form</div>;

	return (
		<>
			<div>
				<ul>
					<li>
						<h1 className="text-lg">{product.title}</h1>
					</li>
					<li
						dangerouslySetInnerHTML={{
							__html: product.descriptionHtml,
						}}
					></li>
				</ul>
			</div>
			<div className="card p-5">
				<div>
					<div className="flex justify-between">
						<div>Price:</div>
						<ProductPrice
							className="mb-2 flex"
							withoutTrailingZeros
							data={product}
							variantId={selectedVariant.id}
						/>
					</div>
				</div>

				{/* <AddToCartButton disabled={isOutOfStock} className="add-to-cart">
				{isOutOfStock ? 'Out of stock' : 'Add to cart'}
			</AddToCartButton> */}
				<button className="primary-button w-full">Add To Cart</button>
			</div>
		</>
	);
}
