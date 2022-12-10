import {
	useShopQuery,
	CacheLong,
	gql,
	useShop,
	Link,
	Image,
} from '@shopify/hydrogen';
import { Suspense } from 'react';
import Layout from '../components/Layout.server';

export default function Blog() {
	const data = useShopQuery({
		query: QUERY,
		cache: CacheLong,
		preload: true,
	});

	const {
		data: {
			blog: {
				articles: { nodes: articles },
			},
		},
	} = data;

	// console.log('data: ', data);
	// console.log('blog: ', blog);
	// console.log('articles: ', articles);

	return (
		<Layout>
			<Suspense>
				<div className="container">
					<div className="article-grid">
						{articles.map((article) => (
							<ArticleGridItem article={article} />
						))}
					</div>
				</div>
			</Suspense>
		</Layout>
	);
}

function ArticleGridItem({ article }) {
	console.log('article.image: ', article.image);
	return (
		<div className="article-grid-item">
			<Link to={`/blog/${article.handle}`} className="image-container">
				<Image data={article.image} />
			</Link>
			<Link
				to={`/blog/${article.handle}`}
				className="article-grid-item-title"
			>
				{article.title}
			</Link>
		</div>
	);
}

const QUERY = gql`
	query articles {
		blog(handle: "news") {
			articles(first: 9) {
				nodes {
					title
					handle
					image {
						url
						altText
					}
				}
			}
		}
	}
`;
