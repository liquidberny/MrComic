import {
    StyledFormArea,
    StyledFormButton,
    StyledTitle,
    colors,
    ButtonGroup,
} from "../../components/Styles";
//Formik
import { Formik, Form } from "formik";
import { TextInput } from "../../components/FormLib";
import * as Yup from "yup";

//Icons
import { FiMail, FiLock,  FiUser } from "react-icons/fi";
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
//Audio-Spinner
import { Rings } from "react-loader-spinner";

//Auth&redux
import { signupUser } from "../../auth/actions/userActions";
import { useHistory } from "react-router-dom";

const Signup = ({ signupUser }) => {
    const navigate = useHistory();
    const classes = useStyles();    
    return (
        <div className={classes.container}>
            <StyledFormArea>
                <StyledTitle color={colors.dark1} size={30}>
                    Register
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        name: "",
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                        password: Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required"),
                        name: Yup.string().required("Required"),
                        dateOfBirth: Yup.date().required("Required"),
                        repeatPassword: Yup.string()
                            .required("Required")
                            .oneOf([Yup.ref("password")], "Password must match"),
                    })}
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        signupUser(values, navigate, setFieldError, setSubmitting);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Full name"
                                placeholder="Parque La Ruina"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="algo@algo.com"
                                icon={<FiMail />}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="*******"
                                icon={<FiLock />}
                            />

                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeat password"
                                placeholder="*******"
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                {!isSubmitting && (
                                    <StyledFormButton type="submit">
                                        Register
                                    </StyledFormButton>
                                )}
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
            </StyledFormArea>
            <br></br>
        </div>
    );
};
const useStyles = makeStyles({
    container: {
        ...theme.globals.containerYFlexstart,
        paddingTop: '100px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 30px',
        },
    }
});
export default Signup;
