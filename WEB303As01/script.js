/*
	WEB 303 Assignment 1 - jQuery
	Harshdeep Harshdeep
	Student ID :-  0788912
	
*/

	$(document).ready(function() {
		console.log("ready!");

		
		// var amount_calculation;

		 $("input").keyup(function(){

		
		var txtbox_Salary = $('#yearly-salary').val(); 
		var txtbox_Percentage = $('#percent').val(); 

		 console.log("Salary==",txtbox_Salary);


		// Formula to Calculate
		 var amount_calculation = (txtbox_Salary * txtbox_Percentage) / 100; 
		 
			
		 console.log(amount_calculation.toFixed(2));
		 
	  
		 $("#amount_calculation").val("Result :" + amount_calculation.toFixed(2));
	  
		 $('#amount').html("$"+amount_calculation.toFixed(2));

		 console.log("calculation==",amount_calculation.toFixed(2));


		});
			

	});