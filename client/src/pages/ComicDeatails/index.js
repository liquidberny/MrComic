//styles
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
const ComicDetails = () => {
    const classes = useStyles();

    return (
        <div className={classes.container} >
            <p>Comic Details</p>
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