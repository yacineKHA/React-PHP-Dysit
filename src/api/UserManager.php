<?php

header("Access-control-Allow-Origin: http://localhost:3000");
header("Access-control-Allow-Methods: POST, GET, PUT");

require_once "Database.php";
require_once "User.php";

class UserManager
{
    private $user;

    function __construct()
    {
        $this->user = new User();
    }

    /* Fonction d'inscription d'un utilisateur*/
    function registerUser($mail, $pseudo, $password)
    {
        $messages = [
            "Inscription réussie, vous pouvez maintenant vous connecter",
            "Erreur, l'inscription n'a pas pu se dérouler comme prévu."
        ];

        $req = Database::getBdd()->prepare("SELECT email, pseudo FROM user WHERE email = ? or pseudo = ?");
        $req->execute([
            $mail,
            $pseudo
        ]);
        $data = $req->fetch();
        if ($data != null) {
            echo json_encode($messages[1]);
        } else {
            if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
                try {
                    $password_hashed = password_hash($password, PASSWORD_DEFAULT);
                    $req2 = Database::getBdd()->prepare("INSERT INTO user(pseudo, email, mdp, id_droits) VALUES (?,?,?,?)");
                    $req2->execute([
                        $pseudo,
                        $mail,
                        $password_hashed,
                        2
                    ]);
                    echo json_encode($messages[0]);
                } catch (Exception $e) {
                    echo json_encode($messages[1] + ' '+$e);
                }
            }
        }
    }

    /* fonction de connexion d'un utilisateur*/
    function loginUser($mail, $password)
    {

        $req = Database::getBdd()->prepare("SELECT * FROM user WHERE email = ? ");
        $req->execute([
            $mail
        ]);
        $data = $req->fetchAll();

        if ($data != null) {

            foreach ($data as $key) {
                if (password_verify($password, $key['mdp'])) {

                    $id = $key['id_user'];
                    $pseudo = $key['pseudo'];
                    $mail = $key['email'];
                    $image = $key['image_profile'];
                    $id_droits = $key['id_droits'];

                    $userData = [
                        $id,
                        $pseudo,
                        $mail,
                        $image,
                        $id_droits
                    ];

                    echo json_encode($userData);

                } else {
                    echo json_encode(500);
                }
            }
        } else {
            echo json_encode(500);
        }
    }


    /*Fonction de mise à jour des informations d'un utilisateur*/
    function updateUser(){
        $mail = htmlspecialchars((trim($_POST['email'])));
        $oldPassword = htmlspecialchars((trim($_POST['oldPassword'])));
        $newPassword = htmlspecialchars((trim($_POST['newPassword'])));

        $req = Database::getBdd()->prepare("SELECT mdp FROM user WHERE email = ? ");
        $req->execute([
            $mail
        ]);
        $data = $req->fetchAll();

        if ($data != null) {
            foreach ($data as $key) {
                if (password_verify($oldPassword, $key['mdp'])) {
                    $password_hashed = password_hash($newPassword, PASSWORD_DEFAULT);

                    $req = Database::getBdd()->prepare("UPDATE user SET mdp = ? WHERE email = ? ");
                    $req->execute([
                        $password_hashed,
                        $mail
                    ]);
                    echo json_encode(100);

                } else {
                    echo json_encode(500);
                }
            }
        } else {
            echo json_encode(500);
        }
    }
}


