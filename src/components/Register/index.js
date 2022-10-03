import { Button, Modal } from "react-bootstrap";
import {Form, InputGroup} from 'react-bootstrap';
export function RegisterModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Please give us your info 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="E-mail"
                        aria-label="E-mail"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Register</Button>
            </Modal.Footer>
        </Modal>
    );
} 