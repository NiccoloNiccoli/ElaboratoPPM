
$(document).ready(function(){
    $("#play_button").click(function(){
        let player1 = document.getElementById("name1").value;
        localStorage.setItem("player1", player1);
        let player2 = document.getElementById("name2").value;
        localStorage.setItem("player2", player2);
        let rounds = document.getElementById("selection").value;
        localStorage.setItem("rounds", rounds);
        localStorage.setItem("count1", "NaN");
        localStorage.setItem("count2", "NaN");
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

        function getQuestionsNumber() {
            return new Promise((resolve, reject)=>{
                let request = $.ajax({
                    url: "server/actions.php",
                    type: "POST",
                    data: {"action" : 'count'},
                    dataTypes: "json",
                });
                request.done(function (data){
                    console.log(data);
                    resolve(parseInt(data));
                });
                request.fail(
                    function(jqXHR, textStatus) {
                        reject("Request failed: " + textStatus );
                    });
            });
        }

        getQuestionsNumber().then((questionsNumber)=>{
            const PLACEHOLDER_n_rounds = 2; //TODO get number of rounds from ????
            let selectedQuestions = [...Array(questionsNumber).keys()].map( i => i+1).sort(() => 0.5 - Math.random()).slice(0, PLACEHOLDER_n_rounds);
            console.log(selectedQuestions);
            localStorage.setItem("questionsIDs", JSON.stringify(selectedQuestions));
        }).catch((error)=>{
            alert(error);
        });
    });
});