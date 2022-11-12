import {
    Card,
    Col,
    Row
} from 'react-bootstrap';

//styles
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
import { getComics } from "../../auth/actions/comicActions"
import { useEffect, useState } from 'react';
//snackbar
import { useSnackbar } from 'notistack';

const Comic = () => {
    const classes = useStyles();
    const [comics, setComics] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        setComics(getComics(enqueueSnackbar))
    },[])
    console.log(comics)

    return (
        <div className={classes.container}>

            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
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
export default Comic;