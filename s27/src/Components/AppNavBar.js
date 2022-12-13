import {Link, NavLink} from 'react-router-dom';

import {Navbar, Nav} from "react-bootstrap"

export default function AppNavbar(){

	return(
		<Navbar bg="primary" expand="lg">
			<Navbar.Brand as={Link} to="/">React Booking</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link as={NavLink} to="/">Home</Nav.Link>
					<Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
					<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
					<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
