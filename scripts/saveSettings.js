
$(document).ready(function(){
    $("#play_button").click(function(){
        let player1 = document.getElementById("name1").value;
        localStorage.setItem("player1", player1);
        let player2 = document.getElementById("name2").value;
        localStorage.setItem("player2", player2);
        let rounds = document.getElementById("selection").value;
        localStorage.setItem("rounds", rounds);
        let timer = document.getElementById("timer").checked;
        localStorage.setItem("timer", timer);
        if(document.getElementById("name1").value.length == 0 || document.getElementById("name2").value.length == 0){
            document.getElementById("play_link").href="index.html";
            alert("Inserire i nomi dei giocatori");
        }
        else if(document.getElementById("selection").value == "select your option"){
            document.getElementById("play_link").href="index.html";
            alert("Inserire un numero di rounds");
        }
        else{
            document.getElementById("play_link").href="mainPage.html";
        }
    });
});