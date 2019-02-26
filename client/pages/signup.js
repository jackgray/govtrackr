import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Form, Loader, Message, Header } from 'semantic-ui-react';

import StyledSignForm from '../components/StyledSignForm';
import parseError from '../../oldclient/lib/parseError';
import { SIGNUP_MUTATION } from '../api/mutations/user/signup';

class Signup extends Component {
	state = {
		email: '',
		password: '',
		name: ''
	};

	handleChange = (e) => {
		StyleSheetList.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async (e, signup) => {
		e.preventDefault();

		try {
			const { data } = await signup();
			Router.push(`/authcallback?token=${data.signup.token}`);
		} catch (error) {
			this.setState({
				email: '',
				password: '',
				name: ''
			});
		}
	};
	render() {
		const { email, password, name } = this.state;
		return (
			<Mutation mutation={SIGNUP_MUTATION} variables={{ email, password, name }}>
				{(signup, { loading, error, data }) => (
					<PageContainer>
						<StyledSignForm error={!!error} onSubmit={(e) => this.handleSubmit(e, signup)}>
							<Header size="large">Signup</Header>
							<Form.Field>
								<label htmlFor="">Email</label>
								<input
									name="email"
									onChange={this.handleChange}
									placeholder="Please enter your email"
									autoComplete="email"
									value={this.state.email}
								/>
							</Form.Field>
							<Form.Field>
								<label htmlFor="">Name</label>
								<input
									name="name"
									onChange={this.handleChange}
									placeholder="Please enter your name"
									autoComplete="name"
									value={this.state.name}
								/>
							</Form.Field>
							<Form.Field>
								<label htmlFor="">Password</label>
								<input
									name="password"
									onChage={this.handleChange}
									placeholder="Please enter your password"
									autoComplete="password"
									value={this.state.password}
								/>
							</Form.Field>
							{error && <Message error header="Oops!" content={parseError(error.message)} />}
							{
								loading ? <StyledLoader active inline /> :
								<LoginButton type="submit">Signup</LoginButton>}
							<Link href="/login">
								<a href="">Have an account? Click here to login</a>
							</Link>
						</StyledSignForm>
					</PageContainer>
				)}
			</Mutation>
		);
	}
}

export default Signup;

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(200px + 40vh);
`;

const LoginButton = styled(Button)`
    &&& {
        width: 100%;
        height
    }
`;
