import Link from 'next/link';
import Router from 'next/router';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import React, { Component } from 'react';

class Nav extends Component {
	state = {
		activeItem: 'home'
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<nav>
				<StyledMenu>
					<Link prefetch href="/">
						<StyledLink>Feed</StyledLink>
					</Link>
				</StyledMenu>
			</nav>
		);
	}
}

const StyledMenu = styled(Menu)`
&&& {
    border-bottom: 2px solid #ffd045;
    padding: 0 15px;
}
`;

const StyledLink = styled.a`
	color: #5f5f5f;
	line_height: 70px;
	padding: 0 2vw;
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 1px;
	white-space: nowrap;
`;

export default Nav;
