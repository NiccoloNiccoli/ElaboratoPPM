//SE IL BROWSER NON CARICA I CAMBIAMENTI È NECESSARIO APRIRE LA CONSOLE, ANDARE IN NETWORK E DISABILITARE LA CACHE
(function ($){
    $.fn.loadImage = function (options){
        let imageId = 0;
        const width = $(window).width();

        getImage()
        function getImage() {
            let request_type = 'get';
            let questions = JSON.parse(localStorage.getItem("questionsIDs"));
            let id = questions.pop();
            localStorage.setItem("questionsIDs", JSON.stringify(questions));
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"action" : request_type, "imageId" : id},
                dataTypes: "json",
            });

            request.done(function (data){
                $(data["data"]).each(function (index, object) {
                    console.log('ciaoooo '+object['name']+' '+object['year']);

                    $('.question').html(object['question']);
                    let imageLink = object['lr-link'];
                    if ((width >= 2 * object['lr-width']) && (width < 2 * object['mr-width'])){
                        imageLink = object['mr-link'];
                    }
                    else if(width >= 2 * object['mr-width']){
                        imageLink = object['hr-link'];
                    }


                    const loadImagesAndWait = ms=> new Promise(resolve => {
                        $('#imgP1').append("<img class = 'mainImg' src = " + imageLink + "><div class='areaToClick' id='areaP1'></div>");
                        $('#imgP2').append("<img class = 'mainImg' src = " + imageLink + "><div class='areaToClick' id='areaP2'></div>");
                        setTimeout(resolve, ms);
                    })
                    loadImagesAndWait(250).then(()=>{
                        const imgDivWidth = $('.imageBox').width();
                        const imgDivHeight = $(window).height() - $('.question').height() - $('.header').height() - $('.timer').height();
                        console.log($('.mainImg').width(), $('.mainImg').height());
                        if($('.mainImg').height() > $('.mainImg').width()){
                            $('.mainImg').css({"height":imgDivHeight, "width":"auto"});
                        }else{
                            $('.mainImg').css({"height":"auto", "width":imgDivWidth});
                        }
                        $('.imageBox').css({"height":$('.mainImg').height(), "width":$('.mainImg').width()});

                        });


                    /*insertImgs().then((d)=>{
                        console.log( d['divHeight'], d['divWidth']);
                        console.log(d['imgHeight'], d['imgWidth'], $('#imgP1').height());
                        if($('.mainImg').height() >= $('.mainImg').width()){
                            $('.mainImg').css({"height":d["y"], "width":"auto"});
                        }else{
                            $('.mainImg').css({"height":"auto", "width":d["x"]});
                        }
                    });*/
                    let coords = JSON.parse(object['coordinates']);
                    $('.areaToClick').css({'top' : coords['top'], 'right' : coords['right'], 'bottom' : coords['bottom'], 'left' : coords['left']});
                    const dataDesc = {"name" : object['name'], "author" : object['author'], "location" : object['location'], "year" : object['year'], "description" : object["description"], "image" : imageLink};
                    localStorage.setItem("desc", JSON.stringify(dataDesc));
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
                        $('#areaP1').css({'border': '3px solid green'});
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
                        $('#areaP2').css({'border': '3px solid green'});
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
            });
            request.fail(
                function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });
        }
    }
})(jQuery);