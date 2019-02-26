// configure page initialization
// https://nextjs.org/docs/#custom-app

import App, { Container as NextContainer } from 'next/app';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from 'next/router';
import { Container as UIContainer } from 'semantic-ui-react';
import styled from 'styled-components';
import withApolloClient from '../lib/with-apollo-client';

import Head from '../components/HeadData';
import Nav from '../components/Nav';

class NextApp extends App {
	render() {
		const { Component, pageProps, apolloClient } = this.props;
		const propsWithClient = {
			...pageProps,
			client: apolloClient
		};
		return (
			<NextContainer>
				<ApolloProvider client={apolloClient}>
					<StyledContainer>
						<Head />
						<Nav {...propsWithClient} />
						<Component {...propsWithClient} />
					</StyledContainer>
				</ApolloProvider>
			</NextContainer>
		);
	}
}

export default withApolloClient(NextApp);

const StyledContainer = styled(UIContainer)`
	&&& {
		min-height: 100vh;
		display: scroll;
		flext-direction:
	}
`;
