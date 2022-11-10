import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
import { React } from 'react';
const OurNavar = () => {


    return (
        <Navbar bg="light" expand="lg">
            
            
            <Container fluid>
                <Navbar.Brand href="#">Mr. Comics</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <NavDropdown title="Login/Register" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="login">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="register">
                                Register
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default OurNavar;