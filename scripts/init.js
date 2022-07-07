$(document).ready(function() {
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


    function loadImage(){
        let questions = JSON.parse(localStorage.getItem("questionsIDs"));
        let id = questions.pop();
        localStorage.setItem("questionsIDs", JSON.stringify(questions));

        $.getJSON("artapplication.json", function(json) {
            let images = json[0].data;
            $.each(images, function (index, val){
                $('.question').html(val['question']);
                let imageLink = val['low-res_link'];
                if ((width >= 2 * val['low-res_width']) && (width < 2 * val['mid-res_width'])) {
                    imageLink = val['mid-res_link'];
                } else if (width >= 2 * val['mid-res_width']) {
                    imageLink = val['high-res_link'];
                }

                const loadImagesAndWait = ms=> new Promise(resolve => {
                    $('.mainImg').attr("src",imageLink);
                    setTimeout(resolve, ms);
                })

                loadImagesAndWait(65).then(()=>{
                    const imgDivWidth = $('.imageBox').width();
                    const imgDivHeight = $(window).height() - $('.question').height() - $('.header').height() - $('.timer').height();
                    if($('.mainImg').height() > $('.mainImg').width()){
                        $('.mainImg').css({"height":imgDivHeight, "width":"auto"});
                    }else{
                        $('.mainImg').css({"height":"auto", "width":imgDivWidth});
                    }
                    $('.imageBox').css({"height":$('.mainImg').height(), "width":$('.mainImg').width()});
                });

                let coords = val['coordinates'];
                $('.areaToClick').css({'top' : coords['top'], 'right' : coords['right'], 'bottom' : coords['bottom'], 'left' : coords['left']});
                const dataDesc = {"name" : val['name'], "author" : val['author'], "location" : val['location'], "year" : val['year'], "description" : val["description"], "image" : imageLink};
                localStorage.setItem("desc", JSON.stringify(dataDesc));
            });

        });

        let counter1 = parseInt(localStorage.getItem("count1"));
        if(isNaN(counter1)) {
            counter1 = 0;
        }
        document.getElementById("points1").innerHTML = counter1.toString();

        let counter2 = parseInt(localStorage.getItem("count2"));
        if(isNaN(counter2)) {
            counter2 = 0;
        }
        document.getElementById("points2").innerHTML = counter2.toString();

        let haveAlreadyAnswered = false;
        $('#areaP1').on('click', function (event) {

            if(!haveAlreadyAnswered){
                $('#areaP1').css({'border': '3px solid #17C3B2'});
                let c1 = parseInt(localStorage.getItem("count1"));
                if(isNaN(c1)) {
                    c1 = 0;
                }
                c1++;
                localStorage.setItem("count1", c1.toString());
                document.getElementById("points1").innerHTML = c1.toString();
                haveAlreadyAnswered = true;
                setTimeout(function(){
                    window.location = "descriptionPage.html";
                }, 2000);
            }
        });
        $('#areaP2').on('click', function (event) {
            if(!haveAlreadyAnswered) {
                $('#areaP2').css({'border': '3px solid #17C3B2'});
                let c2 = parseInt(localStorage.getItem("count2"));
                if (isNaN(c2)) {
                    c2 = 0;
                }
                c2++;
                localStorage.setItem("count2", c2.toString());
                document.getElementById("points2").innerHTML = c2.toString();
                haveAlreadyAnswered = true;
                setTimeout(function () {
                    window.location = "descriptionPage.html";
                }, 2000);
            }
        });
    }
});