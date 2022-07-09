$(document).ready(function() {
    let currentRound = parseInt(localStorage.getItem("selectedRounds")) - parseInt(localStorage.getItem("rounds")) + 1;
    $(".currentRound").html(currentRound.toString());
    $(".totalRounds").html(localStorage.getItem("selectedRounds"));
    const width = $(window).width();
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
    loadImage();


    function loadImage() {
        let questions = JSON.parse(localStorage.getItem("questionsIDs"));
        let id = questions.pop();
        localStorage.setItem("questionsIDs", JSON.stringify(questions));
        console.log(questions, id);

        function loadDataFromJSON() {
            return new Promise(resolve => {
                $.getJSON("artapplication.json", function (json) {
                    let imageQuestion = json[1].data[id];
                    let imageData = $.grep(json[0].data, function (obj) {
                        let returnValue;
                        if (obj.name === imageQuestion.name && obj.author === imageQuestion.author) {
                            returnValue = obj;
                        }
                        return returnValue;
                    });
                    resolve({"imageQuestion": imageQuestion, "imageData": imageData[0]});
                });

            });
        }

        loadDataFromJSON().then((r)=>{
           console.log(r.imageQuestion, r.imageData);
           console.log(r.imageData["low-res_link"]);
            $('.question').html(r.imageQuestion['question']);
            let imageLink = r.imageData['low-res_link'];
            console.log(imageLink);
            if ((width >= 2 * r.imageData['low-res_width']) && (width < 2 * r.imageData['mid-res_width'])) {
                imageLink = r.imageData['mid-res_link'];
            } else if (width >= 2 * r.imageData['mid-res_width']) {
                imageLink = r.imageData['high-res_link'];
            }

            const loadImagesAndWait = ms=> new Promise(resolve => {
                $('.mainImg').attr("src", imageLink);
                setTimeout(resolve, ms);
            });

            loadImagesAndWait(65).then(()=>{
                const imgDivWidth = $('.imageBox').width();
                const imgDivHeight = $(window).height() - $('.question').height() - $('.header').height() - $('.timer').height() - $('.roundCounter').height();
                let newHeight = $('.mainImg').height() * imgDivWidth/$('.mainImg').width();
                if($('.mainImg').height() > $('.mainImg').width() || newHeight>imgDivHeight){
                    $('.mainImg').css({"height":imgDivHeight, "width":"auto"});
                }else{
                    $('.mainImg').css({"height":"auto", "width":imgDivWidth});
                }
                $('.imageBox').css({"height":$('.mainImg').height(), "width":$('.mainImg').width()});

                let coords = JSON.parse(r.imageQuestion['coordinates']);
                console.log('now area2click', Object.keys(coords));
                $('.areaToClick').css({'top' : coords['top'], 'right' : coords['right'], 'bottom' : coords['bottom'], 'left' : coords['left']});
                const dataDesc = {"name" : r.imageData['name'], "author" : r.imageData['author'], "location" : r.imageData['location'], "year" : r.imageData['year'], "description" : r.imageQuestion["description"], "image" : imageLink};
                localStorage.setItem("desc", JSON.stringify(dataDesc));
            });
        });
        let elements1 = document.getElementsByClassName("playername1");
        for(let i = 0; i < elements1.length; i++) {
            elements1[i].innerHTML = localStorage.getItem("player1");
        }

        let elements2 = document.getElementsByClassName("playername2");
        for(let i = 0; i < elements2.length; i++) {
            elements2[i].innerHTML = localStorage.getItem("player2");
        }

        let counter1 = parseInt(localStorage.getItem("count1"));
        if(isNaN(counter1)) {
            counter1 = 0;
        }
        $(".points1").html(counter1);
        console.log("points1",counter1);

        let counter2 = parseInt(localStorage.getItem("count2"));
        if(isNaN(counter2)) {
            counter2 = 0;
        }
        $(".points2").html(counter2);

        let haveAlreadyAnswered = false;
        $('#areaP1').on('click', function (event) {

            if(!haveAlreadyAnswered){
                $('#areaP1').css({'border': '4px solid #d73346'});
                let c1 = parseInt(localStorage.getItem("count1"));
                if(isNaN(c1)) {
                    c1 = 0;
                }
                c1++;
                localStorage.setItem("count1", c1.toString());
                $(".points1").html(c1.toString());
                haveAlreadyAnswered = true;
                setTimeout(function(){
                    window.location = "descriptionPage.html";
                }, 2000);
            }
        });
        $('#areaP2').on('click', function (event) {
            if(!haveAlreadyAnswered) {
                $('#areaP2').css({'border': '4px solid #d73346'});
                let c2 = parseInt(localStorage.getItem("count2"));
                if (isNaN(c2)) {
                    c2 = 0;
                }
                c2++;
                localStorage.setItem("count2", c2.toString());
                $(".points2").html(c2.toString());
                haveAlreadyAnswered = true;
                setTimeout(function () {
                    window.location = "descriptionPage.html";
                }, 2000);
            }
        });
    }
});