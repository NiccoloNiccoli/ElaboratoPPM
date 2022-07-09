$(document).ready(function(){
   let rounds = parseInt(localStorage.getItem("rounds")) - 1;
   localStorage.setItem("rounds", rounds.toString());
   let currentRound = parseInt(localStorage.getItem("selectedRounds")) - rounds;
   $("#currentRound").html(currentRound.toString());
   $("#totalRounds").html(localStorage.getItem("selectedRounds"));
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
});