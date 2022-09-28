import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container>
            <Row>
                <hr />
                <Col md={1}>Home</Col>
                <Col md={2}>A cerca de nosotros</Col>
                <Col md={1}>Contactanos</Col>
                <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
            </Row>
        </Container>
    );
}
export default Footer;