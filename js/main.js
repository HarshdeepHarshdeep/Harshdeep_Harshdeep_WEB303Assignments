

//	WEB 303 Assignment 2 

$(document).ready(function() {
  console.log("ready!");
  
////////////////////////

function makeHttpRequest(param) {
  //console.log(param);
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", `./${param}.html`);
  req.send();

////////////////////////
  function processResponse() {
    if (req.readyState != 4) return; 
    document.getElementById("content").innerHTML = req.responseText;
  }
}

////////////////////////

$("#prospect").on("click", function() {
  $("#content").show("slow");
  $("#content").load("prospect.html");
  
  
////////////////////////
  
});
$("#convert").on("click", function() {
  $("#content").show("slow");
  $("#content").load("convert.html");
  
  
////////////////////////
  
});
$("#retain").on("click", function() {
  $("#content").show("slow");
  $("#content").load("retain.html");
  
});



});