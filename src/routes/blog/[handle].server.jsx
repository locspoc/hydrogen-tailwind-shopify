import {
	useShopQuery,
	useLocalization,
	Seo,
	gql,
	Image,
	useRouteParams,
} from '@shopify/hydrogen';
import { Suspense } from 'react';
import Layout from '../../components/Layout.server';

export default function Article() {
	const { handle } = useRouteParams();

	console.log('handle: ', handle);

	const {
		data: {
			blog: { articleByHandle },
		},
	} = useShopQuery({
		query: QUERY,
		variables: {
			handle,
		},
	});

	const article = articleByHandle;

	// console.log('data: ', data);
	// console.log('article: ', article);

	const {
		language: { isoCode: languageCode },
		country: { isoCode: countryCode },
	} = useLocalization();

	const formattedDate = new Intl.DateTimeFormat(
		`${languageCode}-${countryCode}`,
		{
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}
	).format(new Date(article.publishedAt));

	// console.log("article: ", article);

	if (!article) {
		return (
			<Layout>
				<div className="container">
					<div>Article not found</div>
				</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<Suspense>
				<Seo type="defaultSeo" data={article} />
			</Suspense>
			<div className="article-page container prose">
				<div className="article-page-header">
					<h1>{article.title}</h1>
					<span>
						{formattedDate} • {article.authorV2.name}
					</span>
				</div>
				<article>
					<Image
						data={article.image}
						// altText={article.image.altText}
					/>
					<div
						dangerouslySetInnerHTML={{
							__html: article.contentHtml,
						}}
						className="article-body"
					/>
				</article>
			</div>
		</Layout>
	);
}

const QUERY = gql`
	query article($handle: String!) {
		blog(handle: "news") {
			articleByHandle(handle: $handle) {
				title
				publishedAt
				authorV2 {
					name
				}
				image {
					url
					altText
				}
				contentHtml
			}
		}
	}
`;
