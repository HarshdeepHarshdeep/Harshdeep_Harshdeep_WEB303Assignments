var characters, startAM, startNZ;

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "data.json",
    data: { get_param: "value" },
    dataType: "json",
    complete: function (data) {
      characters = data;
    },
  });

  $(document).ajaxComplete(function () {
    characters = $.parseJSON(characters.responseText);
    function getSortOrder() {
      return function (a, b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      };
    }

    characters.sort(getSortOrder());
    startAM = characters.filter((item) => /^[a-m]/i.test(item["name"]));
    startNZ = characters.filter((item) => /^[n-z]/i.test(item["name"]));
    populateTable(characters);
    $("#sortAM").text(`Filter A-M (${Object.keys(startAM).length})`);
    $("#sortNZ").text(`Filter N-Z (${Object.keys(startNZ).length})`);
  });
});

function populateTable(data) {
     // adding rows
     var rows = "";
     $.each(data, function (key, value) {
       let row = `<tr>
             <td>${value.firstName}</td>  
             <td>${value.lastName}</td>  
             <td>${value.mainPower}</td>                
             <td>${value.gender}</td>  
             <td>${value.superHeroName}</td> 
             <td>${value.DOB}</td> 

         </tr>`;
       rows += row;
     });
 
     $("#tableBody").empty().append(rows);
}

$("#search").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  if(value){
      $("#tableBody tr").filter(function () {
        if($(this).text().toLowerCase().indexOf(value) > -1){
            this.style.backgroundColor = "darkGreen";
            this.style.color = "White";
        } else {
            this.style.backgroundColor = "White";
            this.style.color = "black";
        }
      });
  } else {
    $("#tableBody tr").css({"background-color": "white", "color": "black"});
  }
});

$("button").on("click", function() {
    var id = $(this).attr("id");
    if(id == "sortAM") {
        populateTable(startAM)
    } else if(id == "sortNZ") {
        populateTable(startNZ)
    }
})
