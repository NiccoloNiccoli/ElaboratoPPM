$(document).ready(function() {
    //TODO check current round number
    //TODO prendere nRounds elementi dal DB e inserirli in un array e effettuare l'estrazione da quelli (così che non ci siano duplicati)
    console.log("INIT");
    const url = "server/actions.php";
    let timer = (localStorage.getItem("timer") === 'true');
    const time = 20;
    if(timer){
        let interval = time * 100;
        let startTimer = setInterval(function () {
            interval--;
            let progressWidth = interval/time;
            if(interval > 0){
                $("#timeLeft").css({"width" : progressWidth + "%"});
            }else{
                clearInterval(startTimer);
                $("#timeLeft").css({"width" : "0%"});
                window.location = "descriptionPage.html";
            }
        }, 10);
    }else{
        $(".timer").css({"display" : "none"});
    }
    jQuery(".artApplication").loadImage({serverURL : url});
});