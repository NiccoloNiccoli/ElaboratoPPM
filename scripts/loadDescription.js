$(document).ready(function(){
   let rounds = parseInt(localStorage.getItem("rounds")) - 1;
   localStorage.setItem("rounds", rounds.toString());
   let infos = JSON.parse(localStorage.getItem("desc"));
   console.log(infos);
   $('.imageBox').html("<img className='mainImg' src=" + infos["image"] + ">");
   $('.description').html(infos["description"]);
   if (rounds !== 0) {
      document.getElementById("nextRound_link").href="mainPage.html";
      alert("Al prossimo round!");
   }
   else{
      document.getElementById("nextRound_link").href="finalPage.html";
   }
   /*$('#nextRound_button').click(function () {

   });*/
});