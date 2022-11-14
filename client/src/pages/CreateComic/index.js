import { makeStyles } from '@material-ui/styles';
import theme from '../../styles/';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
const CreateComic = () => {
    // const classes = useStyles();
    const [character, setCharacter] = useState("")
    const [list, setList] = useState([]);
    const addCharacter = () => {
        setList([...list, character])
        console.log(list)
    }
    return (
        <div>
            <br />
            <Form>
                <h3> Create comic post </h3>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Comic name">
                            <Form.Control type="text" placeholder="Comic name" />
                        </FloatingLabel>
                    </Col>

                    <Col md>
                        <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Editorial"
                        >
                            <Form.Select aria-label="Editorial">
                                <option value="Marvel">Marvel</option>
                                <option value="DC">DC</option>
                                <option value="Dark horse">Dark Horse</option>
                                <option value="Image">Image Comics</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Genre"
                        >
                            <Form.Select aria-label="Genre">
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <br />
                <Row className="g-2">
                    <Col md>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Characters"
                                aria-label="Add comic character appearance"
                                aria-describedby="basic-addon2"
                                onChange={e => setCharacter(e.target.value)}
                            />
                            <Button variant="outline-secondary" id="button-addon2"
                                onClick={() => addCharacter()}
                            >
                                Add Character
                            </Button>
                        </InputGroup>
                        <Form.Text muted>
                            {list.map(char => {
                                return (
                                    <li>
                                        {char}
                                    </li>
                                )
                            })}
                        </Form.Text>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Year of comic publication">
                            <Form.Control type="number" placeholder="20XX" />
                        </FloatingLabel>

                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Comic Description">
                            <Form.Control type="text" placeholder="Comic description" />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>
            <br />
        </div>
    )
}
const useStyles = makeStyles({
    container: {
        ...theme.globals.containerYFlexstart,
        paddingTop: '20px',
        paddingBottom: "20px",

        [theme.breakpoints.down('sm')]: {
            padding: '20px 30px',
        },
    }
});
export default CreateComic;