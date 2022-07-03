$(document).ready(function(){
    let isInitialized = localStorage.getItem("isInitialized");
    if(isInitialized){
        localStorage.clear();
        isInitialized = true;
    }else{
        isInitialized = true;
        console.log('initialized');
        preloadAllImages();
    }
    localStorage.setItem("isInitialized", isInitialized);

    $("#play_button").click(function(){
        let player1 = document.getElementById("name1").value;
        localStorage.setItem("player1", player1);
        let player2 = document.getElementById("name2").value;
        localStorage.setItem("player2", player2);
        let rounds = document.getElementById("selection").value;
        localStorage.setItem("rounds", rounds);
        localStorage.setItem("selectedRounds", rounds);
        localStorage.setItem("count1", "NaN");
        localStorage.setItem("count2", "NaN");
        let timer = document.getElementById("timer").checked;
        localStorage.setItem("timer", timer);
        if(document.getElementById("name1").value.length == 0 || document.getElementById("name2").value.length == 0){
            alert("Inserire i nomi dei giocatori");
        }
        else if(document.getElementById("selection").value == "select your option"){
            alert("Inserire un numero di rounds");
        }
        else{
            getQuestionsNumber().then((questionsNumber)=>{
                let selectedQuestions = [...Array(questionsNumber).keys()].map( i => i+1).sort(() => 0.5 - Math.random()).slice(0, rounds);

                console.log(selectedQuestions);
                localStorage.setItem("questionsIDs", JSON.stringify(selectedQuestions));
                window.location = "mainPage.html";
            }).catch((error)=>{
                alert(error);
            });

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
        }
    });
    function preloadAllImages() {
        const width = $(window).width();

        let request = $.ajax({
            url: "server/actions.php",
            type: "POST",
            data: {"action" : "getAllImages"},
            dataTypes: "json",
        });
        request.done(function (data){
            console.log(data['data']);
            $(data['data']).each(function (index, object) {
                console.log('preloading '+ object['lr-link']);
                let imageLink = object['lr-link'];
                if ((width >= 2 * object['lr-width']) && (width < 2 * object['mr-width'])) {
                    imageLink = object['mr-link'];
                } else if (width >= 2 * object['mr-width']) {
                    imageLink = object['hr-link'];
                }
                $('<img/>')[0].src = imageLink;
            });
        });
    }
});