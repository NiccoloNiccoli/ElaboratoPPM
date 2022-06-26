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
                    $('.imageBox').append("<img class = 'mainImg' src = " + imageLink + "><div class='areaToClick'></div>");
                    let coords = JSON.parse(object['coordinates']);
                    $('.areaToClick').css({'top' : coords['top'], 'right' : coords['right'], 'bottom' : coords['bottom'], 'left' : coords['left']});
                    const dataDesc = {"name" : object['name'], "author" : object['author'], "location" : object['location'], "year" : object['year'], "description" : object["description"], "image" : imageLink};
                    localStorage.setItem("desc", JSON.stringify(dataDesc));
                });
                $('.areaToClick').on('click', function (event) {
                    $('.areaToClick').css({'border': '3px solid green'});
                    setTimeout(function(){
                        window.location = "descriptionPage.html";
                    }, 2000);


                });
            });
            request.fail(
                function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });
        }
    }

})(jQuery);