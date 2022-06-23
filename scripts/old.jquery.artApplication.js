(function($){
    console.log("JQUERY: " + $);

    $.fn.helloWorld = function (options){
        console.log("Hello world " + options['serverURL']);

        return this.each(function(i) {
            console.log("INITIALIZE PLUGIN " + i);
            // cache "this."
            let $this = $(this);

            // Wrap "this" in a div with a class of "plugin_wrapper"
            $this.wrap('<div class="wrapper" />');

            $this.addClass('container');

            $('<h2>Hello World</h2>' +
                '<input type="button" value="Click me" class="button" />').insertBefore($this);

            let $submitButton = $('.button', $this.parent());


            $submitButton.on("click", function (event) {
                //alert("To Do Submitted");
                getData($this);
            });
        });

        function getData($el) {
            console.log('Trying to get infos');
            let request_type = 'get';
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"action" : request_type},
                dataTypes: "json",
            });

            request.done(function (data){
                console.log("done: " + data["infos"]);
                let html = "";
                $(data["infos"]).each(function (index, object){
                    console.log(object["id"] + " " + object["name"] + " " + object["author"]);
                    html += "<img class='mainImg'  src = "+ object['image'] + "><div class='areaToClick'></div>";
                });
                $('.imageBox').append($(html));
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