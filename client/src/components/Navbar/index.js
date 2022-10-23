import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
import { React, useState } from 'react';
import { LoginModal } from '../Login'
import { RegisterModal } from '../Register';
const OurNavar = () => {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);

    return (
        <Navbar bg="light" expand="lg">
            <LoginModal
                show={loginShow}
                onHide={() => setLoginShow(false)}
            />
            <RegisterModal
                show={registerShow}
                onHide={() => setLoginShow(false)}
            />
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
                            <NavDropdown.Item href="#action3"></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setLoginShow(true)}>
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => setRegisterShow(true)}>
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