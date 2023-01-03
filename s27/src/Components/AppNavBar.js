import React, {Fragment, useContext} from 'react'

import {Link, NavLink} from 'react-router-dom';

import {Navbar, Nav} from "react-bootstrap";

import UserContext from '../UserContext';

export default function AppNavbar(){

	const {user} = useContext(UserContext);

	let leftNav = (user.id !== null) ?
		<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
	:

	<Fragment>

		<Nav.Link as={Nav.Link} to="/login">Login</Nav.Link>
		<Nav.Link as={Nav.Link} to="/register">Register</Nav.Link>

	</Fragment>

	return(
		<Navbar bg="primary" expand="lg">
			<Navbar.Brand as={Link} to="/">Course Booking</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link as={NavLink} to="/home">Home</Nav.Link>
					<Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
					{/* <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
					<Nav.Link as={NavLink} to="/login">Login</Nav.Link> */}
				</Nav>
				<Nav className="me-auto">
					{leftNav}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
