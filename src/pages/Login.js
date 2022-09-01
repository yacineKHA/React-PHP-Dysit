import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";


function Login() {

    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [message, setMessage] = useState();

    function emailOnChange(e) {
        setEmailState(e.target.value)
    }

    function passwordOnChange(e) {
        setPasswordState(e.target.value)
    }

    /* Fonction qui permet d'envoyer les informations de connexions (du formulaire) vers l'index.php */
    const loginUser = () => {

        const formData = new FormData();

        formData.append('mail', emailState);
        formData.append('mdp', passwordState);

        console.log(emailState);

        if (emailState !== "" && passwordState !== "") {
            axios.post('http://localhost/dysit-real/src/api/index.php?url=connectionUser', formData)

                .then((response) => {
                    if (response.data){
                        switch (response.data) {
                            case 500:
                                setMessage("Les informations saisies ne correspondent pas");
                                break;
                            case 200:
                                setMessage("Veuillez remplir tous les champs");
                                break;
                            default:
                                const dataStringify = JSON.stringify(response.data)
                                localStorage.setItem('user', dataStringify);
                                window.location.replace("/");
                                console.log(response.data)
                        }
                    } else {
                        setMessage('Pas de réponse du serveur')
                    }

                })
                .catch(function (error) {
                    setMessage('Erreur: pas de réponse du serveur')
                    console.log("Poste ne fonctionne pas: " + error.message);
                });
        } else {
            setMessage("Veuillez remplir tous les champs.")
        }
    }

    let content;

    if (localStorage.getItem('user')) {

        window.location.replace("/");

    } else {
        content =

            <section style={sectionStyle}>
                <div style={modalContainer}>
                    <h3>Login</h3>
                    <p>Veuillez saisir votre email et mot de passe de connexion</p>
                    <TextField
                        style={textFields}
                        onChange={emailOnChange}
                        helperText=" "
                        id="textFieldEmail"
                        label="Email"
                        type="email"
                        required
                    />
                    <TextField
                        style={textFields}
                        onChange={passwordOnChange}
                        helperText=" "
                        id="textFieldPassword"
                        label="Password"
                        type="password"
                        required
                    />

                    {message &&
                        <div style={divStyle}>
                            <p style={messageStyle}>{message}</p>
                        </div>
                    }

                    <Button style={{width: '60%', height: '50px',}} onClick={loginUser} variant="contained">Se
                        connecter</Button>


                    <p style={{marginTop: '50px'}}>Pas de compte ? <Link to="/register"
                                                                         style={{fontWeight: 'bold'}}>S'inscrire</Link>
                    </p>

                </div>
            </section>
    }

    return (
        content
    )
}


export default Login;


/* ----------------- CSS ------------------*/

const divStyle = {
    color: "white",
}

const messageStyle = {
    color: "white",
    fontSize: "bold",
    padding: "9px",
    backgroundColor: "lightBlue",
    top: "100px",
}

const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    height: "100%",
}

const modalContainer = {
    marginTop: "50px",
    textAlign: 'center',
    backgroundColor: 'white',
    zIndex: '9999',
    width: '50%',
    height: '600px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const textFields = {
    width: '60%',
    backgroundColor: 'white',
    color: 'white'
}