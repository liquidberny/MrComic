//styles
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
import Form from 'react-bootstrap/Form';

const ComicDetails = () => {
    const classes = useStyles();
    const action = `${process.env.REACT_APP_API_URL}/comic/upload/`;
    const name = "name";
    return (
        <div className={classes.container} >
            <form method="POST" action={action} enctype="multipart/form-data">
                
                <input type="file" name="myFile" />
                <input type="file" name="myPicture" />
                <input type="file" name="myVideo" />
                <input type="submit" />
            </form>
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