import React, {useEffect, useState} from "react";
import './CSS/AddArticle.css'
import {Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function AddArticle (){

    const [addArticle, setAddArticle] = useState(false);
    const [connected, setConnected] = useState();

    useEffect(() => {
        setConnected(localStorage.getItem('user'))
    }, [connected]);

    const handleChange =() =>{
        setAddArticle(true)
    }

    const closeForm = () =>{
        setAddArticle(false)
    }


    let content;
    let formContent;

    if (connected){

        content=

            <div onClick={handleChange} className="divStyle">
                <div><AddIcon/></div>
            </div>

        if (addArticle){
            formContent =
                <>
                    <div style={masterDiv}>
                        <div style={modalBackground} onClick={closeForm}>
                        </div>
                        <div style={modalContainer}>
                            <button onClick={handleChange}>&times;</button>
                            <h3>Ajouter un article</h3>


                            {/*<input  placeholder="email" type="email" required/>*/}
                            {/*<input  placeholder="Mot de passe" type="password" required/>*/}
                            <Button style={{width:'60%', height:'50px',}}variant="contained">Ajouter</Button>



                        </div>
                    </div>
                </>
        }
    }



    return(
        <>
            {formContent}
            {content}
        </>

    )

}

export default AddArticle;

/* ----------------- CSS ------------------*/

const masterDiv = {

    position:'absolute',
    height:'100%',
    width: '100%',
    zIndex: '998',
    justifyContent: 'center',
    alignItems: 'center'
}

const modalBackground = {
    position:'fixed',
    width: '100%',
    height:'500px',
    zIndex: '999',
    backgroundColor: 'rgba(0,0,0,0.61)',

}

const modalContainer = {
    position: 'fixed',
    textAlign: 'center',
    backgroundColor: 'white',
    zIndex:'9999',
    width: '50%',
    height: '500px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const textFields ={
    width: '60%',
    backgroundColor:'white',
    color: 'white'
}