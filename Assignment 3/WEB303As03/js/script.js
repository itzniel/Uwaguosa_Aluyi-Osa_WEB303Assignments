function forJson(){$.getJSON("team.json").done( function(data){
    msg =""
    $.each(data, function(key, val){
       
        $('#team').append('<h2> ' + val.name +' </h2>',
        '<h5> '+ val.position +' </h5>', '<p>  '+val.bio+'</P>') 
 
    })
     
})}
function forAjax(){$.ajax({
    url: '/team.json',
    type: "GET",
    dataType: "jsonp",
    success: function (data){
        alert(data)
    }
})

}
forAjax() ;
