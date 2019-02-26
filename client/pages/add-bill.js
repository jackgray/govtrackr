import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { Button, Form, Input, TextArea, Header, Loader, Message } from 'semantic-ui-react';

import { ADD_BILL, addBillOptions } from '../api/mutations/bill/addBill';

class AddBill extends Component {
	state = {
		code: '',
		title: '',
		summary: '',
		loading: false
	};

	// update state upon input
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = (e, addBill) => {
		e.preventDefault();
		this.setState({ loading: true });
		const formData = new FormData();
		formData.append('timestamp', (Date.now() / 1000) | 0);
		this.setState(async () => {
			try {
				const { data } = await addBill(addBillOptions());
				Router.push('/');
			} catch (error) {
				console.log(error);
				this.setState({
					code: '',
					title: '',
					summary: '',
					loading: false
				});
			}
		});
	};

	render() {
		const { code, title, summary } = this.state;
		return (
			<Mutation mutation={ADD_BILL} variables={{ code, title, summary }}>
				{(addBill, { loading, error, data }) => (
					<PageContainer>
						<Form error={!!error} onSubmit={(e) => this.handleSubmit(e, addBill)}>
							<Header size="large">Add a bill to the database</Header>
							<Form.Field>
								<label htmlFor="">Code</label>
								<Input
									name="code"
									onChange={this.handleChange}
									placeholder="Bill code"
									value={this.state.code}
								/>
							</Form.Field>
							<Form.Field>
								<label htmlFor="">Title</label>
								<Input
									name="title"
									onChange={this.handleChange}
									placeholder="Bill title"
									value={this.state.title}
								/>
							</Form.Field>
							<Form.Field>
								<label htmlFor="">Summary</label>
								<Input
									name="title"
									onChange={this.handleChange}
									placeholder="Bill Summary"
									value={this.state.summary}
								/>
							</Form.Field>
							{error && (
								<Message
									error
									header="Oops! Something went wrong... Try refreshing the page!"
									content={error.message}
								/>
							)}
							{
								this.state.loading || loading ? <Loader active inline /> :
								<Button type="submit">Submit</Button>}
						</Form>
					</PageContainer>
				)}
			</Mutation>
		);
	}
}

const PageContainer = styled.div`padding: 5% 10%;`;

export default AddBill;
