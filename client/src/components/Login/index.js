import { Button, Modal } from "react-bootstrap";
// import {Form, InputGroup} from 'react-bootstrap';
import {
    StyledFormButton,
    colors,
    ButtonGroup,
} from '../Styles';

//Formik
import { Formik, Form } from 'formik';
import { TextInput } from '../FormLib';
import * as Yup from 'yup';

//Icons
import { FiMail, FiLock } from 'react-icons/fi'

//Rings
import { Rings } from 'react-loader-spinner'

//Auth & redux

import { connect } from 'react-redux';
import { loginUser } from '../../auth/actions/userActions'
import { useHistory } from "react-router-dom";


export function LoginModal(props) {
    const navigate = useHistory();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
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
        </Modal>
    );
} 
