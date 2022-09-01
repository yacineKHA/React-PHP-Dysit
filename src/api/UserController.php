<?php

require "UserManager.php";


class UserController
{
    private $userManager;

    function __construct()
    {
        $this->userManager = new UserManager();
    }

    function registration()
    {
        if (isset($_POST['mailReg'], $_POST['pseudoReg'],$_POST['password1'], $_POST['password2'])){

                $mail = htmlspecialchars((trim($_POST['mailReg'])));
                $pseudo = htmlspecialchars((trim($_POST['pseudoReg'])));
                $password = htmlspecialchars((trim($_POST['password1'])));

                $this->userManager->registerUser($mail, $pseudo, $password);
        } else{
            echo json_encode(200);
        }
    }

    function connectUser()
    {
        if (isset($_POST['mail'], $_POST['mdp'])) {

                $mail = htmlspecialchars((trim($_POST['mail'])));
                $password = htmlspecialchars((trim($_POST['mdp'])));

                $this->userManager->loginUser($mail, $password);

        } else {
            echo json_encode(200);
        }
    }

    function updateUser()
    {
        if (isset($_POST['oldPassword'], $_POST['newPassword'])){
            if ($_POST['oldPassword'] != null && $_POST['newPassword'] != null){
                $this->userManager->updateUser();
            } else{
                echo json_encode(200);
            }
        } else {
            echo json_encode(200);
        }
    }
}