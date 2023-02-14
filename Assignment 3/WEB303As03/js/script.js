function forJson(){$.getJSON("team.json").done( function(data){
    $.each(data, function(key, val){
       
        $('#team').append('<h2> ' + val.name +' </h2>',
        '<h5> '+ val.position +' </h5>', '<p>  '+val.bio+'</P>') 
 
    })
     
})}
function forAjax(){$.ajax({
  dataType: "json",
  url: "team.json",
  type: "GET",
  //a callback function that would display content if successful
  success: function (data){ 
    $('#team').append("<h1>LOADING...</h1>").hide(3000);
    $('#content').append('<div id="team2"></div>');
    $('#team2').hide();
    
    $.each(data, function  (key, val){
        $('#team2').append(
            '<h2>' + val.name + '</h2>',
            '<h5>'+  val.position + '</h5>',
            '<p>'+  val.bio + '</p>',
            )
    })
        // timeout function to delay the display allowing the first content to fade out before displaying
        setTimeout (function(){
     $('#team2').fadeIn(500);
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
  forAjax() ;
})

