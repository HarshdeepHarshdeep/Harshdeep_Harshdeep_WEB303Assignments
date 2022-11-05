/*
    Student Name: Harshdeep Harshdeep
    ID: 0788912
    Date: 03-10-22
   Assignment 6:
*/
$(document).ready(function(){
  //Accordion 
  $('.accordion_tab').on('click',function(){
      let $accordion=$(this).closest('.accordion_wrapper');
      $accordion.find('.accordion_tab.active').removeClass("active");
      $(this).toggleClass('active');
     
  });
  //Tabs
  $('.tabs li').on('click',function(){
      let panel=$(this).closest('.tab-panels');
      panel.find('.tabs li.active').removeClass('active');
      $(this).addClass('active');
       //figure out which panel to show
       var panelToShow=$(this).attr('rel');
       panel.find('.panel.active').removeClass('active');
       $('#'+panelToShow).addClass('active');
    
  
  });
  });