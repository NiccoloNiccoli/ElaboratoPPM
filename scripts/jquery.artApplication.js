//SE IL BROWSER NON CARICA I CAMBIAMENTI È NECESSARIO APRIRE LA CONSOLE, ANDARE IN NETWORK E DISABILITARE LA CACHE
(function ($){
    $.fn.loadImage = function (options){
        let imageId = 0;
        const width = $(window).width();
        const height = $(window).height();
        imageId = selectImageIndex();
        //console.log("select image id: " + imageId);
        //getImage(imageId);

        function selectImageIndex(){
            let request_type = 'count';
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"action" : request_type},
                dataTypes: "json",
            });
            imageId = -1;
            request.done(function (data){
                //console.log(data + 'rows');
                imageId = Math.floor((Math.random() * data) + 1);
                console.log(imageId);
                getImage(imageId)
            });
            request.fail(
                function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });
            return imageId;
        }

        function getImage(id) {
            let request_type = 'get';
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
                });
                $('.areaToClick').on('click', function (event) {
                    $('.areaToClick').css({'border': '3px solid green'});
                    alert("Complimenti! Hai indovinato!");

                });
            });
            request.fail(
                function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });
        }
    }




})(jQuery);