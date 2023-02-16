//Uwaguosa Aluyi-Osa
//0817788
//Assignment 3
//WEB 303
//2023-02-11
// The $.getJson method
function jsonMethod(){$.getJSON("team.json").done( function(data){
    $.each(data, function( key,value){
       
        $('#team').append('<h2> ' + value.name +' </h2>',
        '<h5> '+ value.position +' </h5>', '<p>  '+value.bio+'</P>') 
 
    })
     
})}
//The $.ajax method
function ajaxMethod(){$.ajax({
  dataType: "json",
  url: "team.json",
  type: "GET",
  //a callback function that would display content if the data from the json file was successfully retrieved
  success: function (data){ 
    $('#team').append("<h1>LOADING...</h1>").hide(3000);
    $('#content').append('<div id="newteam"></div>');
    $('#newteam').hide();
    //using the each function to iterate through the data in the json array
    $.each(data, function  ( key, value){
        $('#newteam').append(
            '<h2>' + value.name + '</h2>',  '<h5>'+  value.position + '</h5>',
            '<p>'+  value.bio + '</p>',
            )
    })
        // timeout function to delay the display allowing the first content to fade out before displaying
        setTimeout (function(){
     $('#newteam').show(200);
    }, 3000);
     
  },
  //a callback function that would display content if retrieving data was unsuccessful
error: function(){
      $('#team').append("The content could not be retrieved")
  }
}
); 
}

$(document).ready(function() {
  ajaxMethod() ;
})

