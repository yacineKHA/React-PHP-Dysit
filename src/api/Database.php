<?php

class Database
{
    public static function getBdd()
    {
        $host = 'localhost';
        $dbname = 'dysit';
        $charset = 'utf8';
        $username = 'root';
        $password = 'root';

            try {
                $pdo = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset='.$charset, $username, $password);
            } catch (Exception $e) {
                die("Erreur: " . $e->getMessage());
            }
        return $pdo;
    }
}
