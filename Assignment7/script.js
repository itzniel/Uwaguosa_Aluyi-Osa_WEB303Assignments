
// Uwaguosa Aluyi-Osa
// 0817788
//Date:2023-04-11


//Javascript for Assignment 7
var compare = {
  name: function(a,b){
      a = a.replace(/^the /i, '');
      b =  b.replace(/^the /i, '');

      if (a < b){
          return -1;
      } else {
          return a>b ? 1 : 0;
      }
  },
  duration: function(a,b){
      a = a.split(':');
      b = b.split(':');

      a = Number(a[0])*60 + Number(a[1]);
      b = Number(b[0])*60 + Number(b[1]);

      return a - b;

  },
  date: function(a,b){
      a = new Date(a);
      b = new Date(b);

      return a - b;
  }
};

$('.sorting').each(function(){
  var $table = $(this);
  var $tbody = $table.find('tbody');
  var $controls = $table.find('th a');
  var row = $tbody.find('tr').toArray();

  $controls.on('click',function(){
    var $header = $(this);
    var order = $header.data('sort');
    var column;

    if ($header.is('.ascending') || $header.is('.descending')){
      $header.toggleClass('ascending descending');
      if ($header.is('.ascending')){
        console.log("it is ascending")
        $('.n').append("&#x25B2; ")
      }
      else if ($header.is('.descending')){
        $('.n').append("&#x25BC; ")
        
        console.log("it is descending")
      }
     console.log("It worked")
      $tbody.append(row.reverse());
      

  } else {
      $header.addClass('ascending');
      console.log("I just added aclass")
      //Remove asc or desc from all other headers
      $header.siblings().removeClass('ascending descending');
      
      if (compare.hasOwnProperty(order)){
        
          column = $controls.index(this);
       row.sort(function(a, b){
        
              a = $(a).find('td').eq(column).text();
              b = $(b).find('td').eq(column).text();
              console.log('a: ',a,'   b: ', b)
              return  compare[order](a,b);
              
              
          });
          $tbody.append(row);
      }
  }
  })
});





$(function(){
  $.ajax({
    type: "GET",
    url: "characters.json",
    dataType: "json",
    success: function(data) {
    let $tbody = $('<tbody id="test"></tbody>');
    let array1 = [];
    let array2 = [];    
    $.each(data.characters, function(index, value){     
      let $row = $('<tr></tr>');
      $row.append($('<td class="fname"></td>').text(value.fname));
      $row.append($('<td class="lname"></td>').text(value.lname));
      $row.append($('<td></td>').text(value.gender));
      $row.append($('<td></td>').text(value.dob));
      $row.append($('<td></td>').text(value.occupation)); 
      $row.append($('<td></td>').text(value.specialAbility));
     
      $tbody.append($row);
      
      if(data.characters[index].fname.charAt(0) <= 'N') {
        array1.push(data.characters[index]);
      } else {
        array2.push(data.characters[index]);
      }
    });

    $('thead').after($tbody);

    let temp = [];
    let $tds = $('.fname');
    $.each($tds, function( index, value ) {
      temp.push({
        element: this,
        text: $tds[index].innerText.trim().toLowerCase()
      });
    });

    $('#btn1').append(`A-M (${array1.length})`).addClass('active').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('td').hide();
        temp.forEach(function (td) {
          if ($(td.element).text().charAt(0) <= 'N'){
            $(td.element).show();
            $(td.element).siblings().show();
          }
        });
    });

    $('#btn2').append(`N-Z (${array2.length})`).addClass('active').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('td').hide();
      temp.forEach(function (td) {
        if ($(td.element).text().charAt(0) > 'N'){
          $(td.element).show();
          $(td.element).siblings().show();
        }
      });
    });

    let $search = $('#filter-search');
    let cache = [];
    
    $.each($tds, function( index, value ) {
      cache.push({
        element: this,
        text: $tds[index].innerText.trim().toLowerCase()
      });
     

    });

  
    function filter() {
      let query = this.value.trim().toLowerCase();
      
      if(query) {
        cache.forEach(function (td) {
          let index = 0;
          index = td.text.indexOf(query);
          // td.element.style.backgroundColor = index === -1 ? '' : 'yellow';
          // console.log("d", $(td.element).parent());
          if(index === -1){ 
            $(td.element).siblings().css("background-color", "") 
            $(td.element).siblings().css("color", "")
            $(td.element).css("background-color", "")   
            $(td.element).css("color", "") 
          } else {
            $(td.element).siblings().css("background-color", "green")
            $(td.element).siblings().css("color", "white")
            $(td.element).css("background-color", "green")
            $(td.element).css("color", "white")

          } 
        });
      } 
      if(!query) {
        cache.forEach(function(td){
          td.element.style.backgroundColor = "";
          $(td.element).siblings().css("background-color", "")
          $(td.element).siblings().css("color", "")
          $(td.element).css("background-color", "")
          $(td.element).css("color", "")
        });

      }

    }
  
    if('oninput' in $search[0]) {
      $search.on('input', filter);
    } else {
     $search.on('keyup', filter);
    }

    }

  });


});
