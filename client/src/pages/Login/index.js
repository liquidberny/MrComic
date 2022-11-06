import {
    StyledFormArea,
    StyledFormButton,
    StyledTitle,
    colors,
    ButtonGroup,
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
    }
});
const mapStateToProps = ({session}) => ({
    checked: session.checked
}) 

export default connect(mapStateToProps, {loginUser})(Login);
