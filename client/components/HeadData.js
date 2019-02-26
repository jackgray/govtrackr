import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription =
	'A way to follow events in the political world. Built to leverage Node/Express, Prisma/Graphql, and Apollo/React/Next.js';
const defaultTitle = 'GovTrackr';

const Head = (props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || defaultTitle}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</NextHead>
);

export default Head;
