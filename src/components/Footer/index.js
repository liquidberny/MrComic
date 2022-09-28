import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container>
            <Row>
                <hr />
                <Col md={4}>
                    <a href="">Home</a>
                    <a> | </a>
                    <a href="">About Us</a>
                    <a> | </a>
                    <a href="">Contact Us</a>
                </Col>
                {/* <Col md={2}>A cerca de nosotros</Col>
                <Col md={1}>Contactanos</Col> */}
                <Col md={{ span: 4, offset: 4 }} align="right">
                    <a  href="">Copyright</a>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;