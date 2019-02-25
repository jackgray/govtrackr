// configure page initialization
// https://nextjs.org/docs/#custom-app

import App, { Container as NextContainer } from 'next/app';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from 'next/router';
import { Container as UIContainer } from 'semantic-ui-react';
import styled from 'styled-components';
import withApolloClient from '../lib/with-apollo-client';

class NextApp extends App {
	render() {
		const { Component, pageProps, apolloClient } = this.props;
		return (
			<NextContainer>
				<ApolloProvider client={apolloClient}>
					<Component {...pageProps} />
				</ApolloProvider>
			</NextContainer>
		);
	}
}

export default withApolloClient(NextApp);

const StyledContainer = styled(UIContainer)`
	&&& {
		min-height: 100vh;
		display: flex;
		flext-direction: column
	}
`;
