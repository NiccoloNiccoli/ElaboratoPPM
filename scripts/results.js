$(document).ready(function(){
    let counter1 = parseInt(localStorage.getItem("count1"));
    if(isNaN(counter1)) {
        counter1 = 0;
    }
    let counter2 = parseInt(localStorage.getItem("count2"));
    if(isNaN(counter2)) {
        counter2 = 0;
    }
    if(counter1 === counter2){
        document.getElementById("winner").innerHTML = "PAREGGIO!";
    }
    else if (counter2>counter1){
        document.getElementById("winner").innerHTML = "CONGRATULAZONI " + localStorage.getItem("player2") + " HAI VINTO!";
    }
    else if(counter1>counter2){
        document.getElementById("winner").innerHTML = "CONGRATULAZONI " + localStorage.getItem("player1") + " HAI VINTO!";
    }
    
    $("#playAgain_button").click(function () {
        localStorage.setItem("rounds", localStorage.getItem("selectedRounds"));
        let rounds = localStorage.getItem("rounds");
        getQuestionsNumber().then((questionsNumber)=>{
            let selectedQuestions = [...Array(questionsNumber).keys()].map( i => i+1).sort(() => 0.5 - Math.random()).slice(0, rounds);
            console.log(selectedQuestions);
            localStorage.setItem("questionsIDs", JSON.stringify(selectedQuestions));
            window.location = "mainPage.html";
            localStorage.setItem("count1", "NaN");
            localStorage.setItem("count2", "NaN");
        }).catch((error)=>{
            alert(error);
        });

        function getQuestionsNumber() {
            return new Promise((resolve)=>{
                $.getJSON("artapplication.json", function(json) {
                    resolve(json[1].data.length);
                });
            });
        }
    });
});