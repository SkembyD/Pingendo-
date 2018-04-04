$(document).ready(function(){

    $("#submit").click(function(e){
        e.preventDefault();

        $.post(
            'connexion.php', // Script PHP
            {
                username : $("#username").val(),  // Récupère la valeur des inputs dans connexion.php
                password : $("#password").val()
            },

            function(data){

                if(data == 'Success'){
                     // Si connexion établie, affiche message .

                     $("#resultat").html("<p>Vous avez été connecté avec succès !</p>");
                }
                else{
                     // Sinon échec. (data = "failed")

                     $("#resultat").html("<p>Erreur de connexion...</p>");
                }

            },
            'text'
         );
    });
});
