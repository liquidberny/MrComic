import React, { useState } from 'react';
import {
    Row,
    Container,
    Col,
    Card,
    Tab,
    Tabs
    } from 'react-bootstrap';
const Footer = () => {

    const [key, setKey] = useState('popular');

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Body>
                            <Card.Title>Categories</Card.Title>
                            <Card.Text>
                                lorem ipsum
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Body>
                            <Card.Title>Recomendations</Card.Title>
                            <Card.Text>
                                lorem ipsum
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} border="dark">

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="popular" title="Popular posts">
                            Insert popular posts
                        </Tab>
                        <Tab eventKey="latest" title="Latest post">
                            Latest posts here
                        </Tab>
                        <Tab eventKey="comments" title="Recents comments" >
                            Recents comments
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            <br/>
            <Row>

                <hr />
                <Col md={4}>
                    <a href="/">Home</a>
                    <a> | </a>
                    <a href="/">About Us</a>
                    <a> | </a>
                    <a href="/">Contact Us</a>
                </Col>
                {/* <Col md={2}>A cerca de nosotros</Col>
                <Col md={1}>Contactanos</Col> */}
                <Col md={{ span: 4, offset: 4 }} align="right">
                    <a href="/">Copyright</a>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;