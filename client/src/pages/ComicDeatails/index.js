//styles
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useSnackbar } from 'notistack';
const ComicDetails = () => {
    const { comicId } = useParams();
    const [comic, setComic] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    const classes = useStyles();
    // useEffect(() => {

    //     setComic(getComicbyId(comicId))

    // }, [comicId]);
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/comic/read/${comicId}`
        ).then((response) => {
            setComic(response.data)
        }).catch((err) => {
            enqueueSnackbar(`Error loading comics`, {
                variant: 'error'
            });
        });

    }, [enqueueSnackbar, comicId])
    const approve = () => {
        axios.put(`${process.env.REACT_APP_API_URL}/comic/approve/`, {
            id: comic._id
        })
        window.location.reload();
    }
    return (
        <div className={classes.container} >
            <img
                src={`${process.env.REACT_APP_API_URL}/comic/image/${comic._id}`}
                alt={"imagen de comic"}
            />
            <div >
                <p >
                    <strong>Title:</strong> {comic.name}
                </p>
                <p>
                    <strong>Editorial:</strong>{" "}
                    {comic.editorial}
                </p>
                <p>
                    <strong>Genres:</strong>{" "}
                    {comic.genre}
                </p>
                <p>
                    <strong>Year:</strong>{" "}
                    {comic.year}
                </p>
                <p>
                    <strong>Characters:</strong>{" "}
                    {comic.characters}
                </p>
                <p>
                    <strong>Description:</strong> {comic.description}
                </p>
                {comic.approved ? null : <button
                    onClick={() => approve()}
                >
                    Approve
                </button>}

            </div>
        </div >
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
export default ComicDetails;