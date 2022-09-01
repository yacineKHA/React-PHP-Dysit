import React, {useContext, useEffect, useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Favorite';
import './CSS/Card.css'
import axios from "axios";
import {ConnectedContext} from "../../contexts/ConnectedContext";



function ArticleCard(props) {
    const {user} = useContext(ConnectedContext);
    const [userConnected, setUserConnected] = useState();
    const [article, setArticle] = useState({});
    const [nameOfCategory, setNameOfCategory] = useState('');
    let content;


    const urlImage = '/images/' + article.image_article;

    useEffect(() => {
        setUserConnected(user)
        setArticle(props.articlesList)
        getCategoryOfArticles();
    }, []);


    /*Fonction  qui permet d'envoyer vers le routeur les données requises pour la suppression d'article*/
    const deleteArticle = async ()  => {

        const formData = new FormData;
        formData.append('id', article.id_article)

        await axios.post('http://localhost/dysit-real/src/api/index.php?url=deleteArticle', formData)
            .then((response) => {
                    if (response.data === 200) {
                        alert('L\'article a été supprimé !');
                        window. location. reload()
                    } else {
                        alert("Suite à une erreur l'article n'a pas pu être supprimé !");
                    }
                }
            )
    }

    const getCategoryOfArticles =  ()=>{
        const formData = new FormData;
        formData.append('id_cat', article.id_cat)

         axios.post('http://localhost/dysit-real/src/api/index.php?url=getCategoryOfArticle', formData)
            .then((response) =>{

                console.log('nameOfCat: '+ response.data)
            })
            .catch((error)=>{
                console.log('error: '+ error);
            })
    }


    const confirmDeleteArticle = () => {
        if (window.confirm("Voulez vous confirmer la suppression de votre article ?")) {
            deleteArticle();

        } else {
            alert("L'article n'a pas été supprimé !");
        }
    }

    if (userConnected) {
        if (userConnected.id === article.id_user) {
            content =
                <div onClick={confirmDeleteArticle}
                        style={{backgroundColor:'white' ,position: 'absolute', color: 'red', right: '20px', top: '10px', padding:'5px', border:'1px solid black'}}>
                    Supprimer mon article
                </div>
        }
    }

    return (

        <Card className="cardStyle">

            <CardActionArea style={{backgroundColor: 'black'}}>
                {content}
                <CardMedia

                    style={{
                        backgroundImage: 'url(' + urlImage + ')',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                    component="img"

                    image={urlImage}
                    alt={urlImage}
                />

                <CardContent>
                    <Typography color="white" style={{textAlign: 'center', margin: '7px', fontFamily: 'Akira'}}
                                gutterBottom variant="h5" component="div">
                        {article.title}
                    </Typography>
                    <Typography color="white">
                        {article.text}
                    </Typography>
                    <Typography color="white">
                        {article.date_article}
                    </Typography>

                </CardContent>
            </CardActionArea>

        </Card>
    )


}

export default ArticleCard;


// <CardMedia
//     style={{backgroundImage: 'url(' + urlImage + ')',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center center',
//         backgroundSize: 'cover',
//         height: '300px',
//         width: '90%'
//     }}
//     // component="img"
//     // height="100%"
//     //
//     // alt="green iguana"
// />



