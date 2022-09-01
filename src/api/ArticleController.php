<?php

require "ArticleManager.php";

class ArticleController extends ArticleManager
{

    function getArticles()
    {
        $this->getAllArticles();
    }

    function addArticle()
    {
        if (isset($_POST['title'])) {
            if ($_POST['title'] != null) {
                $this->pushArticleInBdd();
            }
        }
    }

    function deleteArticle()
    {
        $this->deleteAnArticle();
    }

    function getCatOfArticle(){
        $idOfArticleCategory = $_POST['id_cat'];

        $this->getCategoryOfArticle($idOfArticleCategory);
    }
}