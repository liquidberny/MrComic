import {
    Card,
    Col,
    Row
} from 'react-bootstrap';

//styles
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
//import { getComics } from "../../auth/actions/comicActions"
import { useEffect, useState } from 'react';
//snackbar
import { useSnackbar } from 'notistack';
import axios from "axios"
import { Link } from 'react-router-dom';

const Comic = () => {
    const classes = useStyles();
    const [comics, setComics] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/comic/read`
        ).then((response) => {
            setComics(response.data)
        }).catch((err) => {
            enqueueSnackbar(`Error loading comics`, {
                variant: 'error'
            });
        });
        // getComics().then(res => {
        //     console.log(res)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   });
    })
    return (
        <div className={classes.container}>

            <Row xs={1} md={2} className="g-4">
                {comics.map((val, key) => {
                    return (
                        <Col>
                            <Card>
                                <Link to= {"/comic/" + val._id} style={{  color: 'inherit', textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}/comic/image/${val._id}`} />
                                    <Card.Body>
                                        <Card.Title>{val.name}</Card.Title>
                                        <Card.Text>
                                            {val.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    )
                })}
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