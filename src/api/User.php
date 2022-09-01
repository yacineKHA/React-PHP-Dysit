<?php

class User
{
    private int $id;
    private string $pseudo;
    private string $email;
    private string $image;
    private string $password;
    private int $id_droit;


    public function getId(): int
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getPseudo(): string
    {
        return $this->pseudo;
    }

    public function setPseudo($pseudo): void
    {
        $this->pseudo = $pseudo;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage(): string
    {
        return $this->image;
    }

    public function setEmail($email): void
    {
        $this->email = $email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword($password): void
    {
        $this->password = $password;
    }

    public function getId_droit(): int
    {
        return $this->id_droit;
    }

    public function setId_droit($id_droit)
    {
        $this->id_droit = $id_droit;
    }
}