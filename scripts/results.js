$(document).ready(function(){
    let counter1 = parseInt(localStorage.getItem("count1"));
    if(isNaN(counter1)) {
        counter1 = 0;
    }
    let counter2 = parseInt(localStorage.getItem("count2"));
    if(isNaN(counter2)) {
        counter2 = 0;
    }
    if(counter1>counter2){
        document.getElementById("winner").innerHTML = "CONGRATULAZONI " + localStorage.getItem("player1") + " HAI VINTO!";
    }
    else if (counter2>counter1){
        document.getElementById("winner").innerHTML = "CONGRATULAZONI " + localStorage.getItem("player2") + " HAI VINTO!";
    }
    else if(counter1 === counter2){
         document.getElementById("winner").innerHTML = "PAREGGIO!";
    }
});