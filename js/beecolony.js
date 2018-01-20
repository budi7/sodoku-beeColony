// var declaration
var iterasi, bees_onl, bees_emp;


// Interface : Event Handlers
$( document ).ready(function() {
	// clear prev data
	clearData("foodSource");


	// form engagement
	// get from input settings
	$(document).find("#form-settings").on("submit", function(e){
		//cancel html post action - IGNORE THIS
		e.preventDefault();

		var form = $(e.target); // variabel pointer

		iterasi =  parseInt(form.find("input[name='iterasi']").val());
		bees_onl = parseInt(form.find("input[name='bees_onl']").val());
		bees_emp = parseInt(form.find("input[name='bees_emp']").val());

		// validasi
		if(!iterasi || !bees_onl || !bees_onl){ 
			alert("Input tidak lengkap!"); 
			return false;  
		}

		processInput();
	});
});

// Modules
// interface
var processInput = function(){
	/* step 1 */
	// 1.1 get soal
	getSoal(function(array_soal){
		// 1.2 generate foodsource
		generateFoodSource(function(){
			console.log(getData('foodSource'));
		});
	});

	// step 2
}

// bee colony core
var getSoal = function(callback){
	var array = [];

	// get soal
	var tabel = $(document).find("#soal"); // variabel pointer

	array[0] =  tabel.find("#a-1-1").find('input').val() ? parseInt(tabel.find("#a-1-1").find('input').val()) : null;
	array[1] =  tabel.find("#a-1-2").find('input').val() ? parseInt(tabel.find("#a-1-2").find('input').val()) : null;

	// modul return
	if(callback) { callback(array); }
}
var generateFoodSource = function(callback){
	// init
	var foodSource = [];
	
	// on emp bee count
	for (var j = 0; j < bees_emp ; j++) {
		// define array 1 dimensi
		var arr = [];
		for (var i = 0; i < 369; i++) {
			arr.push(getRandomInt(1,9));
		}
		foodSource.push(arr);
	}

	// save data to local storage
	saveData('foodSource', foodSource);

	// modul return
	if(callback) { callback(); }
}

// helper core
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// io helper
function saveData(key, data){
	window.localStorage.setItem(key, JSON.stringify(data));
}
function getData(key){
	return JSON.parse(window.localStorage.getItem(key));
}
function clearData(key){
	window.localStorage.removeItem(key);
}
