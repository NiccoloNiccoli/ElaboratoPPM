$(document).ready(function(){
   let infos = JSON.parse(localStorage.getItem("desc"));
   console.log(infos);
   $('.imageBox').html("<img className='mainImg' src=" + infos["image"] + ">");
   $('.description').html(infos["description"]);
});