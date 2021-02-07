$(document).ready(function () {
    
   $( function() {
    	$( "#accordion" ).accordion({
      		active: false,
      		collapsible: true,
      		activate: function( event, ui ) {
        		if(!$.isEmptyObject(ui.newHeader.offset())) {
            		$('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top });
        			}
    		}
    	});
  	});

	
	$(function() {
    	$(window).resize(function(){
    	$("#accordion").accordion("refresh");

    	});
	});

	












    });






