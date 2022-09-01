<?php

require_once "UserController.php";
require_once "ArticleController.php";

$userController = new UserController();
$articleController = new ArticleController();

switch ($_GET["url"]) {
    case "connectionUser":
        $userController->connectUser();
        break;
    case "registration":
        $userController->registration();
        break;
    case "getAllArticles":
        $articleController->getArticles();
        break;
    case "deleteArticle":
        $articleController->deleteArticle();
        break;
    case "getCategoryOfArticle":
        $articleController->getCatOfArticle();
        break;
    case "updateUser":
        $userController->updateUser();
        break;
}
