import axios from "axios"
//snackbar
export const getComics = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/comic/read`
    ).then((response) => {
        console.log(response.data)
        const data = response.data;
        return data;
    }).catch((err) => {
        // enqueueSnackbar(`Error loading comics`, {
        //     variant: 'error'
        // });
        console.log(err)
    });
}