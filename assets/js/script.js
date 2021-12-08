let nombrecopie;
let prixtotal;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function effectuerlecalcul(){
    // récupérer la valeur du nombre de photocopie avec la fonction .value.

    nombrecopie = document.getElementById("valeur-saisi").value;

    // Notre condition du prix de la photocopie selon le nombre de copies et la réduction.

    if(nombrecopie <= 10){
        prixtotal = nombrecopie *0.1;
    }
    else if(nombrecopie <= 30 ){
        prixtotal = 0.09 * (nombrecopie-10) + 1;  
    }
    else{ 
        prixtotal = 0.08 * (nombrecopie-30) + 2.8;
    }
    
    message.innerHTML = "Le prix total est de : " + prixtotal + "euros";  
}


    // Ajout d'un écouteur d'événement sur le bouton qui quand on clique appelera la fonction pour vérifier le prix total ();
    bouton.addEventListener('click', effectuerlecalcul, false);