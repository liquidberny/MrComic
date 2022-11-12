import axios from "axios"
//snackbar
export const getComics = ({ enqueueSnackbar }) => {
    axios.get(`${process.env.REACT_APP_API_URL}/comic/read`
    ).then((response) => {
        console.log(response.data)
        return (response.data);
    }).catch((err) => {
        enqueueSnackbar(`Error loading comics`, {
            variant: 'error'
        });
    });
}