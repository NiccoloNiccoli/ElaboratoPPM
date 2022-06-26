
$(document).ready(function(){
    $("#play_button").click(function(){
        let player1 = document.getElementById("name1").value;
        let player2 = document.getElementById("name2").value;
        let rounds = document.getElementById("selection").value;
        let timer = document.getElementById("timer").checked;
        if(document.getElementById("name1").value.length == 0 || document.getElementById("name2").value.length == 0){
            document.getElementById("play_link").href="index.html";
            alert("Inserire i nomi dei giocatori")
        }
        else if(document.getElementById("selection").value !== null){
            document.getElementById("play_link").href="index.html";
            alert("Inserire un numero di rounds")
        }
        else{
            document.getElementById("play_link").href="mainPage.html";
        }
    });
});