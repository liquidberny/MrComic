import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,

} from 'react-bootstrap';
import { React, } from 'react';
import { connect } from "react-redux";
import { logoutUser } from "../../auth/actions/userActions";
import { useHistory } from "react-router-dom";

const OurNavar = ({ user }) => {
    const navigate = useHistory();

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
                        <Nav.Link href="/">Welcome {user.name}</Nav.Link>
                        <Nav.Link href="/">About Us</Nav.Link>
                        <Nav.Link href="/comic">Comic</Nav.Link>

                        {user.name ? null : <NavDropdown title="Log in/Register" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="login">
                                Log in
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="register">
                                Register
                            </NavDropdown.Item>
                        </NavDropdown>}
                        {user.name ? <Button variant="outline-dark" onClick={() => logoutUser(navigate)}>Log out</Button> : null}
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
const mapStateToProps = ({ session }) => ({
    user: session.user
})



export default connect(mapStateToProps, { logoutUser })(OurNavar);

// export default OurNavar;