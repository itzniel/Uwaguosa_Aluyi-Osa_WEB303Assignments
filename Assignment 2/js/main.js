// WEB303 Assignment 2
$(document).ready(function() {
  
    const xhr = new XMLHttpRequest();

    $('#prospect').click(function(){
        xhr.onload = function (){

        document.getElementById('content').innerHTML = xhr.responseText;
        $("#content").animate({width: "toggle"});
    }
        xhr.open("GET", 'prospect.html', true);
        xhr.send();
    })
    
    

    $('#convert').click(function(){
        xhr.onload = function (){
         document.getElementById('content').innerHTML = xhr.responseText;
         $("#content").animate({height: "toggle"});}

         xhr.open("GET", 'convert.html', true);
         xhr.send();
     })
     
     

     $('#retain').click(function(){
        xhr.onload = function (){
        document.getElementById('content').innerHTML = xhr.responseText;
         $("#content").animate({height: "toggle"});
        }
         xhr.open("GET", 'retain.html', true);
         xhr.send();
     })
     
     

    })
