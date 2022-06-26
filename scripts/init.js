$(document).ready(function() {
    //TODO check current round number
    //TODO prendere nRounds elementi dal DB e inserirli in un array e effettuare l'estrazione da quelli (così che non ci siano duplicati)
    console.log("INIT");
    const url = "server/actions.php";

    jQuery(".artApplication").loadImage({serverURL : url});

});