import { makeStyles } from '@material-ui/styles';
import theme from '../../styles';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import axios from "axios"
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import imagen1 from '/Users/juani/Downloads/proyecto/comic/client/src/images/imagen3.jpg'


const About = ({ user }) => {
    const classes = useStyles();
    const [comics, setComics] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    
    return (
        <div className={classes.container} >
            <div >
                <p >
                    <strong>About us</strong>
                </p>
                <img
                src={imagen1}
                />
                <p>
                    Este es un proyecto realizado para la materia de Practica de Desarrollo 2{" "}
                </p>
                <p>
                    <strong>Equipo:</strong>{" "}
                    Anaya Arias
                    Dueñas Salman
                    Castillo Morales
                    Mazon Flores
                    Urguijo Mungarro
                </p>
                <p>
                    <strong>2022</strong>{" "}
                </p>
    
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

export default About;