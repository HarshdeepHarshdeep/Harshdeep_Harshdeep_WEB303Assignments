$(document).ready(function () {
  Jqery_Method(); 
  Ajx_pRequest();
});

function Jqery_Method() {
  $.getJSON("team.json", function (data) {
    $.each(data, function (index, item) {
      index = index + 1;
      $("#team").append("<h2>" + index + ") Name : " + item.name + "</h2>");
      $("#team").append("<h5>Position : " + item.position + "</h5>");
      $("#team").append("<p>Bio : " + item.bio + "</p>");
    });
  });
}

function Ajx_pRequest() {
  const constantVAl = new XMLHttpRequest();
  constantVAl.onreadystatechange = () => {
    if (constantVAl.readyState === XMLHttpRequest.DONE) {
      const response = JSON.parse(constantVAl.responseText);

      $.each(response, function (index, item) {
          index = index + 1;
          $("#team").append("<h2>" + index + ") Name : " + item.name + "</h2>");
          $("#team").append("<h5>Position : " + item.position + "</h5>");
          $("#team").append("<p>Bio : " + item.bio + "</p>");
        });
    }
  };
  constantVAl.open("GET", "team.json", true);
  constantVAl.setRequestHeader("Accept", "application/json");
  constantVAl.send(null);
}
