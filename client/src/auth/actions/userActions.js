import axios from "axios"
import { sessionService } from "redux-react-session";

export const loginUser = (credentials, setFieldError, setSubmitting) => {
    axios.post("http://localhost:3001/user/signin",
    credentials,
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
    ).then((response) => {
        const {data} = response;

        if (data.success === false) {
            const {message} = data;

            if (message.includes("credentials")){
                setFieldError("email", message);
                setFieldError("password", message);
            } else if (message.includes("password")){
                setFieldError("password", message);
            }
        } else if (data.success === true) {
            const userData = data.data;
            console.log("user data :", userData);
            console.log(userData.accessToken);
            const token = userData.accessToken;

            sessionService.saveSession(token).then(() => {
                sessionService.saveUser(userData).then(() => {
                    // navigate.push("/dashboard");
                }).catch(err => console.error(err))
            }).catch(err => console.error(err))
        }

        //Complete submission
        setSubmitting(false);

    }).catch(err => console.error(err))
} 

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {
    return (dispatch) =>
    axios.post("https://still-mesa-47558.herokuapp.com/user/signup",
    credentials,
    {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        const {data} = response;

        if (data.status === "FAILED") {
            const {message} = data;
            
            //Checking for specific error
            if (message.includes("name")) {
                setFieldError("name", message);
            } else if (message.includes("email")) {
                setFieldError("email", message);
            } else if (message.includes("date")) {
                setFieldError("dateOfBirth", message);
            } else if (message.includes("password")) {
                setFieldError("password", message);
            }

            //Complete submission
            setSubmitting(false);

        } else if (data.status === "SUCCESS") {
            //Login user after succesful signup
            const {email, password} = credentials;

            dispatch (loginUser({email, password}, history, setFieldError, setSubmitting))
        }
    }).catch(err => console.error(err))
};

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push('/');
    }
};