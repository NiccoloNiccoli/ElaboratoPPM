$(document).ready(function(){
   let rounds = parseInt(localStorage.getItem("rounds")) - 1;
   localStorage.setItem("rounds", rounds.toString());
   let infos = JSON.parse(localStorage.getItem("desc"));
   console.log(infos);
   $('#descriptionPageImgContainer').html("<img id='descriptionPageImg' src=" + infos["image"] + "><div id='infoLeft'><span id='title'></span> - <span id='author'></span></div><div id='infoRight'><span id='location'></span>, <span id='year'></span></div>");
   $('.description').html(infos["description"]);
   $('#title').html(infos['name']);
   $('#author').html(infos['author']);
   $('#location').html(infos['location']);
   $('#year').html(infos['year']);
   if (rounds !== 0) {
      document.getElementById("nextRound_link").href="mainPage.html";
   }
   else{
      document.getElementById("nextRound_link").href="finalPage.html";
   }
   /*$('#nextRound_button').click(function () {

   });*/
});