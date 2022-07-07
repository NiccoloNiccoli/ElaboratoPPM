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
                return new Promise((resolve)=>{
                    $.getJSON("artapplication.json", function(json) {
                        resolve(json[1].data.length);
                    });
                });
            }
        }
    });
    function preloadAllImages() {
        const width = $(window).width();

        $.getJSON("artapplication.json", function(json) {
            let images = json[0].data;
            $.each(images, function (index, val){
                let imageLink = val['low-res_link'];
                if ((width >= 2 * val['low-res_width']) && (width < 2 * val['mid-res_width'])) {
                    imageLink = val['mid-res_link'];
                } else if (width >= 2 * val['mid-res_width']) {
                    imageLink = val['high-res_link'];
                }
                $('<img/>')[0].src = imageLink;
            });
        });

    }
});