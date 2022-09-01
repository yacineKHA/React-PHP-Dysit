import React, {useState} from "react";
import axios from "axios";
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";

function Registration() {

    const [mail, setMail] = useState();
    const [pseudo, setPseudo] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();

    const [message, setMessage] = useState();

    function password1OnChange(e) {
        setPassword1(e.target.value)
    }

    function password2OnChange(e) {
        setPassword2(e.target.value)
    }

    function mailOnChange(e) {
        setMail(e.target.value)
    }

    function pseudoOnchange(e) {
        setPseudo(e.target.value)
    }

    /* Permet d'envoyer les informations d'inscription vers le backend. Récupère ensuite la réponse*/
    function registerUser() {
        if (mail !== "" && pseudo !== "" && password1 !== "") {
            if (password1 === password2) {
                const formData = new FormData();
                formData.append('mailReg', mail);
                formData.append('pseudoReg', pseudo);
                formData.append('password1', password1);
                formData.append('password2', password2);

                axios.post('http://localhost/dysit-real/src/api/index.php?url=registration', formData)
                    .then((response) => {
                        if (response.data) {
                            setMessage(response.data);
                            console.log("Inscription: " + response.data);
                        } else {
                            setMessage("Erreur durant l'inscription")
                            console.log("data est vide");
                        }
                    })
                    .catch(function (error) {
                        setMessage("Erreur durant l'inscription")
                        console.log("Erreur durant l'inscription: " + error);
                    });
            } else {
                setMessage('Les mots de passes ne correspondent pas.');
                console.log(message);
            }
        } else {
            setMessage('Veuillez remplir tous les champs.');
            console.log(message);
        }
    }

    let content;

    if (localStorage.getItem('user')) {
        window.location.replace("/");

    } else {
        content =
            <section style={sectionStyle}>


                <div style={modalContainer}>
                    <h3 style={{marginTop: "50px", marginBottom: "50px"}}>Register</h3>

                    <TextField
                        style={textFields}
                        onChange={mailOnChange}
                        helperText=" "
                        id="textFieldEmail"
                        label="Email"
                        type="email"
                        required
                    />
                    <TextField
                        style={textFields}
                        onChange={pseudoOnchange}
                        helperText=" "
                        id="textFieldPseudo"
                        label="Pseudo"
                        type="text"
                        required
                    />
                    <TextField
                        style={textFields}
                        onChange={password1OnChange}
                        helperText=" "
                        id="textFieldPassword1"
                        label="Mot de passe"
                        type="password"
                        required
                    />
                    <TextField
                        style={textFields}
                        onChange={password2OnChange}
                        helperText=" "
                        id="textFieldPassword2"
                        label="Vérification du mot de passe"
                        type="password"
                        required
                    />

                    {message &&
                        <div style={divStyle}>
                            <p style={messageStyle}>{message}</p>
                        </div>
                    }

                    <Button style={{width: '60%', height: '50px',}} onClick={registerUser}
                            variant="contained">S'inscrire</Button>


                    <p style={{marginTop: '50px'}}>Déjà un compte ? <Link to="/login" style={{fontWeight: 'bold'}}>Se
                        connecter</Link></p>
                </div>
            </section>
    }


    return (
        content
    )
}

export default Registration


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
/*--------*/
const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    height: "100%",
}

