$(document).ready(function() {
    let currentRound = parseInt(localStorage.getItem("selectedRounds")) - parseInt(localStorage.getItem("rounds")) + 1;
    $(".currentRound").html(currentRound.toString());
    $(".totalRounds").html(localStorage.getItem("selectedRounds"));
    document.title = "Round "+currentRound.toString()+"/"+localStorage.getItem("selectedRounds")+" - Dov'è?";
    let strikes1 = 3;
    let strikes2 = 3;
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
                $('#areaP1').css({'border': '4px solid #d73346'});
                $('#areaP2').css({'border': '4px solid #d73346'});
                setTimeout(function(){
                    window.location = "descriptionPage.html";
                }, 2000);
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
            $('.question').html(r.imageQuestion['question']);
            let imageLink = r.imageData['low-res_link'];
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
                const imgDivHeight = $(window).height() - $('.question').outerHeight() - $('.header').outerHeight() - $('.timer').outerHeight() - $('.roundCounter').outerHeight();
                let newHeight = $('.mainImg').height() * imgDivWidth/$('.mainImg').width();
                if($('.mainImg').height() > $('.mainImg').width() || newHeight>imgDivHeight){
                    $('.mainImg').css({"height":Math.round(imgDivHeight*0.90).toString(), "width":"auto"});
                }else{
                    $('.mainImg').css({"height":"auto", "width":imgDivWidth});
                }
                $('.imageBox').css({"height":$('.mainImg').height(), "width":$('.mainImg').width()});

                let coords = JSON.parse(r.imageQuestion['coordinates']);
                localStorage.setItem("coords", "coords");
                $('.areaToClick').css({'top' : coords['top'], 'right' : coords['right'], 'bottom' : coords['bottom'], 'left' : coords['left']});
                const dataDesc = {"name" : r.imageData['name'], "author" : r.imageData['author'], "location" : r.imageData['location'], "year" : r.imageData['year'], "description" : r.imageQuestion["description"], "image" : imageLink};
                localStorage.setItem("desc", JSON.stringify(dataDesc));

                const headerShrinkingPercentage = $('.imageBox').width()/$('.player2').width()*100;
                $('.header').css({'width': headerShrinkingPercentage+'%'});
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

        let counter2 = parseInt(localStorage.getItem("count2"));
        if(isNaN(counter2)) {
            counter2 = 0;
        }
        $(".points2").html(counter2);

        let haveAlreadyAnswered = false;


        $('#imgP1').on("click", function() {
            if(!haveAlreadyAnswered && strikes1 > 0) {
                $('#strike'+strikes1+'_P1').attr("src", "src/cross-small.svg");
                $('#strike'+strikes1+'_P1').css({'filter':'invert(31%) sepia(74%) saturate(1679%) hue-rotate(327deg) brightness(85%) contrast(99%)'});
                strikes1--;
                if (strikes1 === 0 && strikes2 === 0){
                    $('#areaP1').css({'border': '4px solid #d73346'});
                    $('#areaP2').css({'border': '4px solid #d73346'});
                    setTimeout(function(){
                        window.location = "descriptionPage.html";
                    }, 2000);
                }
            }
        });

        $('#imgP2').on("click", function() {
            if(!haveAlreadyAnswered && strikes2 > 0) {
                $('#strike'+strikes2+'_P2').attr("src", "src/cross-small.svg");
                $('#strike'+strikes2+'_P2').css({'filter':'invert(31%) sepia(74%) saturate(1679%) hue-rotate(327deg) brightness(85%) contrast(99%)'});
                strikes2--;
                if (strikes1 === 0 && strikes2 === 0){
                    $('#areaP1').css({'border': '4px solid #d73346'});
                    $('#areaP2').css({'border': '4px solid #d73346'});
                    setTimeout(function(){
                        window.location = "descriptionPage.html";
                    }, 2000);
                }
            }
        });

        $('#areaP1').on('click', function () {
            if(!haveAlreadyAnswered && strikes1 > 0){
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
        $('#areaP2').on('click', function () {
            if(!haveAlreadyAnswered && strikes2 > 0) {
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