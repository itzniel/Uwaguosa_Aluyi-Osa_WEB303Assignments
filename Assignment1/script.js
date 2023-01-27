/*
	WEB 303 Assignment 1 - jQuery
	{Uwaguosa Aluyi-Osa}
*/

$(document).ready(function() {
	$('input:text').on('keyup', function() {
		//Formular = salary * percent /100
			let salary = $('#yearly-salary').val();
			let percent = $('#percent').val();
			let amount = (salary * percent)/100
			let final = amount.toFixed(2)
			
			$('#amount').text("$"+final);
	

})
})