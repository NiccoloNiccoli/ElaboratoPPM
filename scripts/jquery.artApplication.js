//SE IL BROWSER NON CARICA I CAMBIAMENTI È NECESSARIO APRIRE LA CONSOLE, ANDARE IN NETWORK E DISABILITARE LA CACHE
(function ($){
    $.fn.loadImage = function (options){
        let imageId = 0;
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
                //console.log(imageId);
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
                console.log('ciao');
            });
            request.fail(
                function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });
        }
    }




})(jQuery);