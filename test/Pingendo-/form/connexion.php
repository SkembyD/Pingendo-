<?php

    /**
     * Variables $username et $password
     */

    $username = "Martins";
    $password = "Dowell";

    if( isset($_POST['username']) && isset($_POST['password']) ){

        if($_POST['username'] == $username && $_POST['password'] == $password){ // Si les infos correspondent...
            session_start();
            $_SESSION['user'] = $username;
            echo "Success";
        }
        else{ // Sinon
            echo "Echec";
        }
    }
?>
