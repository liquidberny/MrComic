import {
    StyledFormArea,
    StyledFormButton,
    StyledTitle,
    Avatar,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink
} from '../../components/Styles';

import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
//Formik
import { Formik, Form } from 'formik';
import { TextInput } from '../../components/FormLib';
import * as Yup from 'yup';

//Icons
import { FiMail, FiLock } from 'react-icons/fi'

//Rings
import { Rings } from 'react-loader-spinner'

//Auth & redux

import { connect } from 'react-redux';
import { loginUser } from '../../auth/actions/userActions';
import { useHistory } from "react-router-dom";

const Login = ({ loginUser }) => {
    const navigate = useHistory();
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <StyledFormArea>
                
                <StyledTitle
                    color={colors.dark1}
                    size={30}>
                    Log in
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                        password: Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required"),
                    })}
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        console.log(values);
                        loginUser(values, navigate,
                            setFieldError, setSubmitting);
                    }}>
                    {({ isSubmitting }) => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="email@somethin.com"
                                icon={<FiMail />}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="*******"
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                {!isSubmitting &&
                                    <StyledFormButton
                                        type="submit">
                                        Login
                                    </StyledFormButton>}
                                {isSubmitting && (
                                    <Rings
                                        color={colors.theme}
                                        height={100}
                                        width={100}
                                        radius="6"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel="rings-loading"
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                {/* <ExtraText>
                    Forgotten password? <TextLink to ="/forgottenpassword">Reset it</TextLink>
                </ExtraText> */}
            </StyledFormArea>
            <br></br>
        </div>
    )
}
const useStyles = makeStyles({
    container: {
        ...theme.globals.containerYFlexstart,
        paddingTop: '100px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 30px',
        },
    },
    caja: {
        ...theme.globals.containerYCenter,
        backgroundColor: theme.palette.darkGreen.main,
        width: '40%',
        padding: '2rem',
        borderRadius: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    title: {
        ...theme.typography.heading3,
        color: theme.palette.white.main,
        width: '100%',
        textAlign: 'center',
        marginTop: '30px',
        marginBottom: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
        },
    },
    input: {
        backgroundColor: 'transparent',
        color: theme.palette.white.main,
        padding: '0 10px',
        cursor: 'pointer',
        border: 'none',
        width: '80%',
        fontFamily: 'Poppins',
        fontWeight: 500,
        textAlign: 'left',
        fontSize: '16px',
        '&:focus': {
            outline: 'none !important',
        },
        "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #0E300C inset",
            WebkitTextFillColor: 'white',
        },
        '&::placeholder': {
            color: theme.palette.white.main,
        },
    },
    inputBox: {
        backgroundColor: 'transparent',
        color: theme.palette.white.main,
        padding: '10px 10px 10px 20px',
        cursor: 'pointer',
        border: `2px solid ${theme.palette.white.main}`,
        boxSizing: 'border-box',
        width: '90%',
        fontFamily: 'Poppins',
        fontWeight: 500,
        textAlign: 'left',
        fontSize: '16px',
        margin: '10px',
        borderRadius: '30px',
        '&:focus': {
            outline: 'none !important',
        },
        '&::placeholder': {
            color: theme.palette.white.main,
        },
    },
    button: {
        backgroundColor: theme.palette.white.main,
        color: theme.palette.black.main,
        width: '80%',
        cursor: 'pointer',
        border: `2px solid ${theme.palette.white.main}`,
        fontFamily: 'Poppins',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '16px',
        margin: '10px',
        marginTop: '50px',
        padding: '10px',
        borderRadius: '30px',
    },
    faIcons: {
        zIndex: '1',
        color: 'white',
        textAlign: 'center',
    },
});
const mapStateToProps = ({session}) => ({
    checked: session.checked
}) 

export default connect(mapStateToProps, {loginUser})(Login);
