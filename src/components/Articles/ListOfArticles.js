import React from "react";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import ArticleCard from "./ArticleCard";
import SortBar from "../SortBar";
import {ConnectedContext} from "../../contexts/ConnectedContext";
import {cleanup} from "@testing-library/react";



function ListOfArticles() {

    let urlGetArticles = ' http://localhost/dysit-real/src/api/index.php?url=getAllArticles';
    let urlGetCategory = ' http://localhost/dysit-real/src/api/index.php?url=getCategoryOfArticle';


    const [articles, setArticles] = useState({
        loading: false,
        data: null,
        error: false
    });

    const [categories, setCategories] = useState();


    useEffect(() => {
        fetchArticles();

    }, []);

    // Deps permet optimisation évite rechargement de la requête tant que les données
    //écrites en paramètre ne changent pas - ici - [urlGetArticles].


    /*Fonction get, permet de récupérer les articles en BDD, communique avec le routeur*/
   function fetchArticles() {
        fetch(urlGetArticles)
            .then((response) => response.json()

            )
            .then((result) =>{
                    setArticles( {
                        loading: true,
                        data: result,
                        error: false
                    })
                console.log(result)
            })
            .catch((error) => {

                setArticles({
                    loading: false,
                    data: null,
                    error: true
                })

                console.log("Post ne marche pas: " + error);
            });
    }
    function getCategory(){
        const formData = new FormData();

        formData.append('id', categories);

        axios.post(urlGetCategory, {

       })
           .then((response) =>{
               setCategories(response.data.json())
           })
    }

    let content;

    if (articles.error) {
        content =
            <p>Une erreur s'est produite, essayez de rafraichir la page.</p>
    }

    if (articles.loading){
        content = <p>Chargement animation à mettre</p>
    }

    if (articles.data) {
        content =
            articles.data.map((article) =>
                <div style={cardsList}
                     key={article.id_article}>
                    <ArticleCard
                        articlesList = {article}
                    />
                </div>
            )
    }

    return (
        <div style={styleDiv}>
            <SortBar/>²²    ²²²²
            {content}
        </div>
    )
}

export default ListOfArticles

const styleDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    gridColumn: 2
}

const cardsList = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
    marginBottom: '70px'
}