import React, {useEffect, useState, useContext} from 'react'
import {Button, TextField} from "@mui/material";
import axios from "axios";
import {ConnectedContext} from "../contexts/ConnectedContext";
import ListTest from "../components/Test LIste/ListTest";

const MyProfile = ()=>{
    const {user} = useContext(ConnectedContext);




    const [email, setEmail] = useState();
    const [oldPassword, setOldPassword] = useState();
    const [newPassword1, setNewPassword1] = useState();
    const [newPassword2, setNewPassword2] = useState();
    const [message, setMessage] = useState();

    useEffect(()=>{
        getEmail();
    },[])

    const getEmail = ()=>{
        const userMail = user
        setEmail(userMail.email);
        console.log("profile :"+ userMail.email)
    }

    const oldPasswordOnChange = (e)=>{
        setOldPassword(e.target.value)
    }

    const password1OnChange = (e)=>{
        setNewPassword1(e.target.value)
    }

    const password2OnChange = (e)=>{
        setNewPassword2(e.target.value)
    }

    const changePassword = () =>{
        if (newPassword1 === newPassword2){
            const formData = new FormData();
            formData.append('email', email );
            formData.append('oldPassword', oldPassword);
            formData.append('newPassword', newPassword1);

            axios.post('http://localhost/dysit-real/src/api/index.php?url=updateUser', formData)
                .then((response)=>{

                    switch (response.data){
                        case 100:
                            setMessage("Modification du mot de passe réussie");
                            break;
                        case 200:
                            setMessage("Veuillez remplir tous les champs");
                            break;
                        case 500:
                            setMessage("Erreur 500 lors de la modification");
                            break;
                        default:
                            setMessage("Erreur 'default' lors de la modification 2");
                    }
                })
                .catch((error)=>{
                    setMessage("Erreur :"+ error)
                })
        } else {
            setMessage("Les deux mots de passes ne sont pas identiques")
        }
    }

    let content;
    if (localStorage.getItem('user')){
        content =
                <form style={{maxWidth:"900px", maxHeight:"600px"}}>
                    <p style={{color:"white"}}>Pour modifier votre mot de passe, veuillez remplir les champs demandés</p>

                    <TextField
                        style={textFields}
                        onChange={oldPasswordOnChange}
                        helperText=" "
                        id="oldPassword"
                        label="Mot de passe actuel"
                        type="password"
                        required
                    />

                    <TextField
                        style={textFields}
                        onChange={password1OnChange}
                        helperText=" "
                        id="newPassword1"
                        label="Nouveau mot de passe"
                        type="password"
                        required
                    />
                    <TextField
                        style={textFields}
                        onChange={password2OnChange}
                        helperText=" "
                        id="newPassword2"
                        label="Répéter le nouveau mot de passe"
                        type="password"
                        required
                    />
                    {message && <p style={{color: "white"}}>{message}</p>}
                    <Button style={{width: '60%', height: '50px',}} onClick={changePassword} variant="contained">
                        Changer le mot de passe
                    </Button>
                </form>
    } else {
        return window.location.replace("/");
    }



 return(
     <div style={{marginTop:'100px', height:"100%", width:"100%"}}>
         {content}

         <ListTest/>
     </div>
 )

}
 export default MyProfile;

const textFields = {
    width: '60%',
    backgroundColor: 'white',
    color: 'white'
}
