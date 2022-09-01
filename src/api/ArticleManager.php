<?php

header("Access-control-Allow-Origin: http://localhost:3000");
header("Access-control-Allow-Methods: POST, GET, PUT");

require_once "ImageTrait.php";
require_once "Database.php";

class ArticleManager  {
    use ImageTrait;

    /* Fonction qui permet de récupérer tous les articles en BDD*/
    function getAllArticles(){
        try {
            $req = Database::getBdd()->prepare("SELECT * FROM article");
            $req->execute();
            $data = $req->fetchAll();
            $req->closeCursor();
            if ($data != null) {
                echo json_encode($data);
            } else {
                return false;
            }
        } catch (Exception $e) {
            return json_encode("Erreur articles: ".$e);
        }
    }

    /*Fonction pour créer un article*/
    function pushArticleInBdd(){

//        $request = json_decode(file_get_contents("php://input"));
//        $title = htmlspecialchars($_POST['title']);
//        $text = htmlspecialchars($_POST['text']);
//        $cat = 2;
//        $image = $_FILES['file'];
//
//
//        $date = date("Y-m-d H:i:s");
//        $dir = "../../public/images/";
//        $random = rand(0,99999);
//        $image_name = $random."_".$image['name'];
//
//        try {
//            $req = Database::getBdd()->prepare("INSERT INTO article (title, text, image, date) VALUES (?, ?, ?, ?, ?)");
//            $req->execute([
//                $title,
//                $text,
//                $image_name,
//                $date,
//                $cat
//            ]);
//
//            $this->addImage($image, $dir);
//            echo json_encode($title);
//        } catch (Exception $e){
//            echo "Erreur: " .$e;
//        }
    }


    /*Fonction qui permet à un utilisateur de supprimer son/ses articles*/
    function deleteAnArticle(){
        $id = $_POST['id'];

        try {
            $req = Database::getBdd()->prepare("DELETE FROM article WHERE id_article = ?");
            $req->execute(
               [$id]
            );

            echo json_encode(200);

        } catch (Exception $e){

            echo json_encode($e);
        }
    }

    function getCategoryOfArticle($idOfArticleCategory){

        try {
            $req = Database::getBdd()->prepare("SELECT name_cat FROM category WHERE id_cat = ?");
            $req->execute(
                [$idOfArticleCategory]
            );
            $data = $req->fetchAll();
            if ($data != null) {
                foreach ($data as $names){
                    $name_cat = $names['name_cat'];

                    echo json_encode($name_cat);
                }

            } else {
                echo json_encode(500);
            }
        } catch (Exception $e){
            echo json_encode($e);
        }
    }
}




