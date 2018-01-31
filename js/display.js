// event handlers
$( document ).ready(function() {
	$(document).on("click", "#toggleModal", function(){
		$(document).find("#modal").fadeIn();
	});
	$(document).on("click", "#close-modal", function(){
		$(document).find("#modal").fadeOut();
	});
});


// cores
function drawData(array){
	// tampilkan array ke html
	$(document).find("#modal").find("#c1").find('input').val(array[0]);
	$(document).find("#modal").find("#c2").find('input').val(array[1]);
	// and so on
	$(document).find("#modal").find("#c369").find('input').val(array[368]);
}
function setKeterangan(error_foodsource){
	// sesuaikan prototype dengan yang mau ditampilkand
	$(document).find("#modal").find("#hasil-error").text(error_foodsource);
}