// var declaration
var iterasi, onlooker_bee, employed_bee;

/* INTERFACE */
// Event Handlers
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
		onlooker_bee = parseInt(form.find("input[name='onlooker_bee']").val());
		employed_bee = parseInt(form.find("input[name='employed_bee']").val());

		// validasi
		if(!iterasi || !onlooker_bee || !employed_bee){ 
			alert("Input tidak lengkap!"); 
			return false;  
		}
		processInput();
	});
});

/* INTERFACE  HANDLER */
var processInput = function(){
	var ctr = 1;

	/* step 1 */
	// 1.1 get soal
	getSoal(function(array_soal){
		// save array soal
		saveData('soal', array_soal);

		// 1.2 generate foodsource
		generateFoodSource(array_soal, employed_bee, function(){
			// 1.3 check missing number
			// array foodsource telah disimpan (method generateFoodSource) dalam local storage dengan key index : foodsource
			// untuk proses berikutnya yg menggunakan data foodsource dapat memanggil data denganmenggunakan method getData('foodSource')
			
			privateModule();
		});
	});

	// modules
	function privateModule(){
		console.log('iterasi ke - ', ctr);
		checkMissingNumber(getData('foodSource'), function(error_foodSource){
			hitungFitness(error_foodSource, function(fitness){
				totalFitness(fitness, function(total_fitness){
					waggleDance(fitness, total_fitness, function(prob_onlooker){
						sumOnlooker(prob_onlooker, function(jumlah_onlooker){
							neighborhoodSearch(jumlah_onlooker, function(array_foodsource_terbaru){
								scoutBee(array_foodsource_terbaru, function(foodsource_iterasibaru){
									// do while ctr = ?
									ctr ++;
									if(ctr <= iterasi){
										privateModule();
									}

								});
							});
							// console.log('jumlah_Onlooker = ' + jumlah_onlooker);
						});
					});
				// console.log('fitnessnya = ' + fitness + ', total fitnessnya = ' + total_fitness);
				});	
			});
		});
	}
}

var getSoal = function(callback){
	var array = [];

	// get soal
	var tabel = $(document).find("#soal"); // variabel pointer

	// sudoku A
	array[0] =  tabel.find("#c1").find('input').val() ? parseInt(tabel.find("#c1").find('input').val()) : null;
	array[1] =  tabel.find("#c2").find('input').val() ? parseInt(tabel.find("#c2").find('input').val()) : null;
	array[2] =  tabel.find("#c3").find('input').val() ? parseInt(tabel.find("#c3").find('input').val()) : null;
	array[3] =  tabel.find("#c4").find('input').val() ? parseInt(tabel.find("#c4").find('input').val()) : null;
	array[4] =  tabel.find("#c5").find('input').val() ? parseInt(tabel.find("#c5").find('input').val()) : null;
	array[5] =  tabel.find("#c6").find('input').val() ? parseInt(tabel.find("#c6").find('input').val()) : null;
	array[6] =  tabel.find("#c7").find('input').val() ? parseInt(tabel.find("#c7").find('input').val()) : null;
	array[7] =  tabel.find("#c8").find('input').val() ? parseInt(tabel.find("#c8").find('input').val()) : null;
	array[8] =  tabel.find("#c9").find('input').val() ? parseInt(tabel.find("#c9").find('input').val()) : null;
	array[9] =  tabel.find("#c10").find('input').val() ? parseInt(tabel.find("#c10").find('input').val()) : null;
	array[10] =  tabel.find("#c11").find('input').val() ? parseInt(tabel.find("#c11").find('input').val()) : null;
	array[11] =  tabel.find("#c12").find('input').val() ? parseInt(tabel.find("#c12").find('input').val()) : null;
	array[12] =  tabel.find("#c13").find('input').val() ? parseInt(tabel.find("#c13").find('input').val()) : null;
	array[13] =  tabel.find("#c14").find('input').val() ? parseInt(tabel.find("#c14").find('input').val()) : null;
	array[14] =  tabel.find("#c15").find('input').val() ? parseInt(tabel.find("#c15").find('input').val()) : null;
	array[15] =  tabel.find("#c16").find('input').val() ? parseInt(tabel.find("#c16").find('input').val()) : null;
	array[16] =  tabel.find("#c17").find('input').val() ? parseInt(tabel.find("#c17").find('input').val()) : null;
	array[17] =  tabel.find("#c18").find('input').val() ? parseInt(tabel.find("#c18").find('input').val()) : null;
	array[18] =  tabel.find("#c19").find('input').val() ? parseInt(tabel.find("#c19").find('input').val()) : null;
	array[19] =  tabel.find("#c20").find('input').val() ? parseInt(tabel.find("#c20").find('input').val()) : null;
	array[20] =  tabel.find("#c21").find('input').val() ? parseInt(tabel.find("#c21").find('input').val()) : null;
	array[21] =  tabel.find("#c22").find('input').val() ? parseInt(tabel.find("#c22").find('input').val()) : null;
	array[22] =  tabel.find("#c23").find('input').val() ? parseInt(tabel.find("#c23").find('input').val()) : null;
	array[23] =  tabel.find("#c24").find('input').val() ? parseInt(tabel.find("#c24").find('input').val()) : null;
	array[24] =  tabel.find("#c25").find('input').val() ? parseInt(tabel.find("#c25").find('input').val()) : null;
	array[25] =  tabel.find("#c26").find('input').val() ? parseInt(tabel.find("#c26").find('input').val()) : null;
	array[26] =  tabel.find("#c27").find('input').val() ? parseInt(tabel.find("#c27").find('input').val()) : null;
	array[27] =  tabel.find("#c28").find('input').val() ? parseInt(tabel.find("#c28").find('input').val()) : null;
	array[28] =  tabel.find("#c29").find('input').val() ? parseInt(tabel.find("#c29").find('input').val()) : null;
	array[29] =  tabel.find("#c30").find('input').val() ? parseInt(tabel.find("#c30").find('input').val()) : null;
	array[30] =  tabel.find("#c31").find('input').val() ? parseInt(tabel.find("#c31").find('input').val()) : null;
	array[31] =  tabel.find("#c32").find('input').val() ? parseInt(tabel.find("#c32").find('input').val()) : null;
	array[32] =  tabel.find("#c33").find('input').val() ? parseInt(tabel.find("#c33").find('input').val()) : null;
	array[33] =  tabel.find("#c34").find('input').val() ? parseInt(tabel.find("#c34").find('input').val()) : null;
	array[34] =  tabel.find("#c35").find('input').val() ? parseInt(tabel.find("#c35").find('input').val()) : null;
	array[35] =  tabel.find("#c36").find('input').val() ? parseInt(tabel.find("#c36").find('input').val()) : null;
	array[36] =  tabel.find("#c37").find('input').val() ? parseInt(tabel.find("#c37").find('input').val()) : null;
	array[37] =  tabel.find("#c38").find('input').val() ? parseInt(tabel.find("#c38").find('input').val()) : null;
	array[38] =  tabel.find("#c39").find('input').val() ? parseInt(tabel.find("#c39").find('input').val()) : null;
	array[39] =  tabel.find("#c40").find('input').val() ? parseInt(tabel.find("#c40").find('input').val()) : null;
	array[40] =  tabel.find("#c41").find('input').val() ? parseInt(tabel.find("#c41").find('input').val()) : null;
	array[41] =  tabel.find("#c42").find('input').val() ? parseInt(tabel.find("#c42").find('input').val()) : null;
	array[42] =  tabel.find("#c43").find('input').val() ? parseInt(tabel.find("#c43").find('input').val()) : null;
	array[43] =  tabel.find("#c44").find('input').val() ? parseInt(tabel.find("#c44").find('input').val()) : null;
	array[44] =  tabel.find("#c45").find('input').val() ? parseInt(tabel.find("#c45").find('input').val()) : null;
	array[45] =  tabel.find("#c46").find('input').val() ? parseInt(tabel.find("#c46").find('input').val()) : null;
	array[46] =  tabel.find("#c47").find('input').val() ? parseInt(tabel.find("#c47").find('input').val()) : null;
	array[47] =  tabel.find("#c48").find('input').val() ? parseInt(tabel.find("#c48").find('input').val()) : null;
	array[48] =  tabel.find("#c49").find('input').val() ? parseInt(tabel.find("#c49").find('input').val()) : null;
	array[49] =  tabel.find("#c50").find('input').val() ? parseInt(tabel.find("#c50").find('input').val()) : null;
	array[50] =  tabel.find("#c51").find('input').val() ? parseInt(tabel.find("#c51").find('input').val()) : null;
	array[51] =  tabel.find("#c52").find('input').val() ? parseInt(tabel.find("#c52").find('input').val()) : null;
	array[52] =  tabel.find("#c53").find('input').val() ? parseInt(tabel.find("#c53").find('input').val()) : null;
	array[53] =  tabel.find("#c54").find('input').val() ? parseInt(tabel.find("#c54").find('input').val()) : null;
	array[54] =  tabel.find("#c55").find('input').val() ? parseInt(tabel.find("#c55").find('input').val()) : null;
	array[55] =  tabel.find("#c56").find('input').val() ? parseInt(tabel.find("#c56").find('input').val()) : null;
	array[56] =  tabel.find("#c57").find('input').val() ? parseInt(tabel.find("#c57").find('input').val()) : null;
	array[57] =  tabel.find("#c58").find('input').val() ? parseInt(tabel.find("#c58").find('input').val()) : null;
	array[58] =  tabel.find("#c59").find('input').val() ? parseInt(tabel.find("#c59").find('input').val()) : null;
	array[59] =  tabel.find("#c60").find('input').val() ? parseInt(tabel.find("#c60").find('input').val()) : null;
	array[60] =  tabel.find("#c61").find('input').val() ? parseInt(tabel.find("#c61").find('input').val()) : null;
	array[61] =  tabel.find("#c62").find('input').val() ? parseInt(tabel.find("#c62").find('input').val()) : null;
	array[62] =  tabel.find("#c63").find('input').val() ? parseInt(tabel.find("#c63").find('input').val()) : null;
	array[63] =  tabel.find("#c64").find('input').val() ? parseInt(tabel.find("#c64").find('input').val()) : null;
	array[64] =  tabel.find("#c65").find('input').val() ? parseInt(tabel.find("#c65").find('input').val()) : null;
	array[65] =  tabel.find("#c66").find('input').val() ? parseInt(tabel.find("#c66").find('input').val()) : null;
	array[66] =  tabel.find("#c67").find('input').val() ? parseInt(tabel.find("#c67").find('input').val()) : null;
	array[67] =  tabel.find("#c68").find('input').val() ? parseInt(tabel.find("#c68").find('input').val()) : null;
	array[68] =  tabel.find("#c69").find('input').val() ? parseInt(tabel.find("#c69").find('input').val()) : null;
	array[69] =  tabel.find("#c70").find('input').val() ? parseInt(tabel.find("#c70").find('input').val()) : null;
	array[70] =  tabel.find("#c71").find('input').val() ? parseInt(tabel.find("#c71").find('input').val()) : null;
	array[71] =  tabel.find("#c72").find('input').val() ? parseInt(tabel.find("#c72").find('input').val()) : null;
	array[72] =  tabel.find("#c73").find('input').val() ? parseInt(tabel.find("#c73").find('input').val()) : null;
	array[73] =  tabel.find("#c74").find('input').val() ? parseInt(tabel.find("#c74").find('input').val()) : null;
	array[74] =  tabel.find("#c75").find('input').val() ? parseInt(tabel.find("#c75").find('input').val()) : null;
	array[75] =  tabel.find("#c76").find('input').val() ? parseInt(tabel.find("#c76").find('input').val()) : null;
	array[76] =  tabel.find("#c77").find('input').val() ? parseInt(tabel.find("#c77").find('input').val()) : null;
	array[77] =  tabel.find("#c78").find('input').val() ? parseInt(tabel.find("#c78").find('input').val()) : null;
	array[78] =  tabel.find("#c79").find('input').val() ? parseInt(tabel.find("#c79").find('input').val()) : null;
	array[79] =  tabel.find("#c80").find('input').val() ? parseInt(tabel.find("#c80").find('input').val()) : null;
	array[80] =  tabel.find("#c81").find('input').val() ? parseInt(tabel.find("#c81").find('input').val()) : null;
	
	// sudoku B
	array[81] =  tabel.find("#c82").find('input').val() ? parseInt(tabel.find("#c82").find('input').val()) : null;
	array[82] =  tabel.find("#c83").find('input').val() ? parseInt(tabel.find("#c83").find('input').val()) : null;
	array[83] =  tabel.find("#c84").find('input').val() ? parseInt(tabel.find("#c84").find('input').val()) : null;
	array[84] =  tabel.find("#c85").find('input').val() ? parseInt(tabel.find("#c85").find('input').val()) : null;
	array[85] =  tabel.find("#c86").find('input').val() ? parseInt(tabel.find("#c86").find('input').val()) : null;
	array[86] =  tabel.find("#c87").find('input').val() ? parseInt(tabel.find("#c87").find('input').val()) : null;
	array[87] =  tabel.find("#c88").find('input').val() ? parseInt(tabel.find("#c88").find('input').val()) : null;
	array[88] =  tabel.find("#c89").find('input').val() ? parseInt(tabel.find("#c89").find('input').val()) : null;
	array[89] =  tabel.find("#c90").find('input').val() ? parseInt(tabel.find("#c90").find('input').val()) : null;
	array[90] =  tabel.find("#c91").find('input').val() ? parseInt(tabel.find("#c91").find('input').val()) : null;
	array[91] =  tabel.find("#c92").find('input').val() ? parseInt(tabel.find("#c92").find('input').val()) : null;
	array[92] =  tabel.find("#c93").find('input').val() ? parseInt(tabel.find("#c93").find('input').val()) : null;
	array[93] =  tabel.find("#c94").find('input').val() ? parseInt(tabel.find("#c94").find('input').val()) : null;
	array[94] =  tabel.find("#c95").find('input').val() ? parseInt(tabel.find("#c95").find('input').val()) : null;
	array[95] =  tabel.find("#c96").find('input').val() ? parseInt(tabel.find("#c96").find('input').val()) : null;
	array[96] =  tabel.find("#c97").find('input').val() ? parseInt(tabel.find("#c97").find('input').val()) : null;
	array[97] =  tabel.find("#c98").find('input').val() ? parseInt(tabel.find("#c98").find('input').val()) : null;
	array[98] =  tabel.find("#c99").find('input').val() ? parseInt(tabel.find("#c99").find('input').val()) : null;
	array[99] =  tabel.find("#c100").find('input').val() ? parseInt(tabel.find("#c100").find('input').val()) : null;
	array[100] =  tabel.find("#c101").find('input').val() ? parseInt(tabel.find("#c101").find('input').val()) : null;
	array[101] =  tabel.find("#c102").find('input').val() ? parseInt(tabel.find("#c102").find('input').val()) : null;
	array[102] =  tabel.find("#c103").find('input').val() ? parseInt(tabel.find("#c103").find('input').val()) : null;
	array[103] =  tabel.find("#c104").find('input').val() ? parseInt(tabel.find("#c104").find('input').val()) : null;
	array[104] =  tabel.find("#c105").find('input').val() ? parseInt(tabel.find("#c105").find('input').val()) : null;
	array[105] =  tabel.find("#c106").find('input').val() ? parseInt(tabel.find("#c106").find('input').val()) : null;
	array[106] =  tabel.find("#c107").find('input').val() ? parseInt(tabel.find("#c107").find('input').val()) : null;
	array[107] =  tabel.find("#c108").find('input').val() ? parseInt(tabel.find("#c108").find('input').val()) : null;
	array[108] =  tabel.find("#c109").find('input').val() ? parseInt(tabel.find("#c109").find('input').val()) : null;
	array[109] =  tabel.find("#c110").find('input').val() ? parseInt(tabel.find("#c110").find('input').val()) : null;
	array[110] =  tabel.find("#c111").find('input').val() ? parseInt(tabel.find("#c111").find('input').val()) : null;
	array[111] =  tabel.find("#c112").find('input').val() ? parseInt(tabel.find("#c112").find('input').val()) : null;
	array[112] =  tabel.find("#c113").find('input').val() ? parseInt(tabel.find("#c113").find('input').val()) : null;
	array[113] =  tabel.find("#c114").find('input').val() ? parseInt(tabel.find("#c114").find('input').val()) : null;
	array[114] =  tabel.find("#c115").find('input').val() ? parseInt(tabel.find("#c115").find('input').val()) : null;
	array[115] =  tabel.find("#c116").find('input').val() ? parseInt(tabel.find("#c116").find('input').val()) : null;
	array[116] =  tabel.find("#c117").find('input').val() ? parseInt(tabel.find("#c117").find('input').val()) : null;
	array[117] =  tabel.find("#c118").find('input').val() ? parseInt(tabel.find("#c118").find('input').val()) : null;
	array[118] =  tabel.find("#c119").find('input').val() ? parseInt(tabel.find("#c119").find('input').val()) : null;
	array[119] =  tabel.find("#c120").find('input').val() ? parseInt(tabel.find("#c120").find('input').val()) : null;
	array[120] =  tabel.find("#c121").find('input').val() ? parseInt(tabel.find("#c121").find('input').val()) : null;
	array[121] =  tabel.find("#c122").find('input').val() ? parseInt(tabel.find("#c122").find('input').val()) : null;
	array[122] =  tabel.find("#c123").find('input').val() ? parseInt(tabel.find("#c123").find('input').val()) : null;
	array[123] =  tabel.find("#c124").find('input').val() ? parseInt(tabel.find("#c124").find('input').val()) : null;
	array[124] =  tabel.find("#c125").find('input').val() ? parseInt(tabel.find("#c125").find('input').val()) : null;
	array[125] =  tabel.find("#c126").find('input').val() ? parseInt(tabel.find("#c126").find('input').val()) : null;
	array[126] =  tabel.find("#c127").find('input').val() ? parseInt(tabel.find("#c127").find('input').val()) : null;
	array[127] =  tabel.find("#c128").find('input').val() ? parseInt(tabel.find("#c128").find('input').val()) : null;
	array[128] =  tabel.find("#c129").find('input').val() ? parseInt(tabel.find("#c129").find('input').val()) : null;
	array[129] =  tabel.find("#c130").find('input').val() ? parseInt(tabel.find("#c130").find('input').val()) : null;
	array[130] =  tabel.find("#c131").find('input').val() ? parseInt(tabel.find("#c131").find('input').val()) : null;
	array[131] =  tabel.find("#c132").find('input').val() ? parseInt(tabel.find("#c132").find('input').val()) : null;
	array[132] =  tabel.find("#c133").find('input').val() ? parseInt(tabel.find("#c133").find('input').val()) : null;
	array[133] =  tabel.find("#c134").find('input').val() ? parseInt(tabel.find("#c134").find('input').val()) : null;
	array[134] =  tabel.find("#c135").find('input').val() ? parseInt(tabel.find("#c135").find('input').val()) : null;
	array[135] =  tabel.find("#c136").find('input').val() ? parseInt(tabel.find("#c136").find('input').val()) : null;
	array[136] =  tabel.find("#c137").find('input').val() ? parseInt(tabel.find("#c137").find('input').val()) : null;
	array[137] =  tabel.find("#c138").find('input').val() ? parseInt(tabel.find("#c138").find('input').val()) : null;
	array[138] =  tabel.find("#c139").find('input').val() ? parseInt(tabel.find("#c139").find('input').val()) : null;
	array[139] =  tabel.find("#c140").find('input').val() ? parseInt(tabel.find("#c140").find('input').val()) : null;
	array[140] =  tabel.find("#c141").find('input').val() ? parseInt(tabel.find("#c141").find('input').val()) : null;
	array[141] =  tabel.find("#c142").find('input').val() ? parseInt(tabel.find("#c142").find('input').val()) : null;
	array[142] =  tabel.find("#c143").find('input').val() ? parseInt(tabel.find("#c143").find('input').val()) : null;
	array[143] =  tabel.find("#c144").find('input').val() ? parseInt(tabel.find("#c144").find('input').val()) : null;
	array[144] =  tabel.find("#c145").find('input').val() ? parseInt(tabel.find("#c145").find('input').val()) : null;
	array[145] =  tabel.find("#c146").find('input').val() ? parseInt(tabel.find("#c146").find('input').val()) : null;
	array[146] =  tabel.find("#c147").find('input').val() ? parseInt(tabel.find("#c147").find('input').val()) : null;
	array[147] =  tabel.find("#c148").find('input').val() ? parseInt(tabel.find("#c148").find('input').val()) : null;
	array[148] =  tabel.find("#c149").find('input').val() ? parseInt(tabel.find("#c149").find('input').val()) : null;
	array[149] =  tabel.find("#c150").find('input').val() ? parseInt(tabel.find("#c150").find('input').val()) : null;
	array[150] =  tabel.find("#c151").find('input').val() ? parseInt(tabel.find("#c151").find('input').val()) : null;
	array[151] =  tabel.find("#c152").find('input').val() ? parseInt(tabel.find("#c152").find('input').val()) : null;
	array[152] =  tabel.find("#c153").find('input').val() ? parseInt(tabel.find("#c153").find('input').val()) : null;
	array[153] =  tabel.find("#c154").find('input').val() ? parseInt(tabel.find("#c154").find('input').val()) : null;
	array[154] =  tabel.find("#c155").find('input').val() ? parseInt(tabel.find("#c155").find('input').val()) : null;
	array[155] =  tabel.find("#c156").find('input').val() ? parseInt(tabel.find("#c156").find('input').val()) : null;
	array[156] =  tabel.find("#c157").find('input').val() ? parseInt(tabel.find("#c157").find('input').val()) : null;
	array[157] =  tabel.find("#c158").find('input').val() ? parseInt(tabel.find("#c158").find('input').val()) : null;
	array[158] =  tabel.find("#c159").find('input').val() ? parseInt(tabel.find("#c159").find('input').val()) : null;
	array[159] =  tabel.find("#c160").find('input').val() ? parseInt(tabel.find("#c160").find('input').val()) : null;
	array[160] =  tabel.find("#c161").find('input').val() ? parseInt(tabel.find("#c161").find('input').val()) : null;
	array[161] =  tabel.find("#c162").find('input').val() ? parseInt(tabel.find("#c162").find('input').val()) : null;

	// sudoku D
	array[162] =  tabel.find("#c163").find('input').val() ? parseInt(tabel.find("#c163").find('input').val()) : null;
	array[163] =  tabel.find("#c164").find('input').val() ? parseInt(tabel.find("#c164").find('input').val()) : null;
	array[164] =  tabel.find("#c165").find('input').val() ? parseInt(tabel.find("#c165").find('input').val()) : null;
	array[165] =  tabel.find("#c166").find('input').val() ? parseInt(tabel.find("#c166").find('input').val()) : null;
	array[166] =  tabel.find("#c167").find('input').val() ? parseInt(tabel.find("#c167").find('input').val()) : null;
	array[167] =  tabel.find("#c168").find('input').val() ? parseInt(tabel.find("#c168").find('input').val()) : null;
	array[168] =  tabel.find("#c169").find('input').val() ? parseInt(tabel.find("#c169").find('input').val()) : null;
	array[169] =  tabel.find("#c170").find('input').val() ? parseInt(tabel.find("#c170").find('input').val()) : null;
	array[170] =  tabel.find("#c171").find('input').val() ? parseInt(tabel.find("#c171").find('input').val()) : null;
	array[171] =  tabel.find("#c172").find('input').val() ? parseInt(tabel.find("#c172").find('input').val()) : null;
	array[172] =  tabel.find("#c173").find('input').val() ? parseInt(tabel.find("#c173").find('input').val()) : null;
	array[173] =  tabel.find("#c174").find('input').val() ? parseInt(tabel.find("#c174").find('input').val()) : null;
	array[174] =  tabel.find("#c175").find('input').val() ? parseInt(tabel.find("#c175").find('input').val()) : null;
	array[175] =  tabel.find("#c176").find('input').val() ? parseInt(tabel.find("#c176").find('input').val()) : null;
	array[176] =  tabel.find("#c177").find('input').val() ? parseInt(tabel.find("#c177").find('input').val()) : null;
	array[177] =  tabel.find("#c178").find('input').val() ? parseInt(tabel.find("#c178").find('input').val()) : null;
	array[178] =  tabel.find("#c179").find('input').val() ? parseInt(tabel.find("#c179").find('input').val()) : null;
	array[179] =  tabel.find("#c180").find('input').val() ? parseInt(tabel.find("#c180").find('input').val()) : null;
	array[180] =  tabel.find("#c181").find('input').val() ? parseInt(tabel.find("#c181").find('input').val()) : null;
	array[181] =  tabel.find("#c182").find('input').val() ? parseInt(tabel.find("#c182").find('input').val()) : null;
	array[182] =  tabel.find("#c183").find('input').val() ? parseInt(tabel.find("#c183").find('input').val()) : null;
	array[183] =  tabel.find("#c184").find('input').val() ? parseInt(tabel.find("#c184").find('input').val()) : null;
	array[184] =  tabel.find("#c185").find('input').val() ? parseInt(tabel.find("#c185").find('input').val()) : null;
	array[185] =  tabel.find("#c186").find('input').val() ? parseInt(tabel.find("#c186").find('input').val()) : null;
	array[186] =  tabel.find("#c187").find('input').val() ? parseInt(tabel.find("#c187").find('input').val()) : null;
	array[187] =  tabel.find("#c188").find('input').val() ? parseInt(tabel.find("#c188").find('input').val()) : null;
	array[188] =  tabel.find("#c189").find('input').val() ? parseInt(tabel.find("#c189").find('input').val()) : null;
	array[189] =  tabel.find("#c190").find('input').val() ? parseInt(tabel.find("#c190").find('input').val()) : null;
	array[190] =  tabel.find("#c191").find('input').val() ? parseInt(tabel.find("#c191").find('input').val()) : null;
	array[191] =  tabel.find("#c192").find('input').val() ? parseInt(tabel.find("#c192").find('input').val()) : null;
	array[192] =  tabel.find("#c193").find('input').val() ? parseInt(tabel.find("#c193").find('input').val()) : null;
	array[193] =  tabel.find("#c194").find('input').val() ? parseInt(tabel.find("#c194").find('input').val()) : null;
	array[194] =  tabel.find("#c195").find('input').val() ? parseInt(tabel.find("#c195").find('input').val()) : null;
	array[195] =  tabel.find("#c196").find('input').val() ? parseInt(tabel.find("#c196").find('input').val()) : null;
	array[196] =  tabel.find("#c197").find('input').val() ? parseInt(tabel.find("#c197").find('input').val()) : null;
	array[197] =  tabel.find("#c198").find('input').val() ? parseInt(tabel.find("#c198").find('input').val()) : null;
	array[198] =  tabel.find("#c199").find('input').val() ? parseInt(tabel.find("#c199").find('input').val()) : null;
	array[199] =  tabel.find("#c200").find('input').val() ? parseInt(tabel.find("#c200").find('input').val()) : null;
	array[200] =  tabel.find("#c201").find('input').val() ? parseInt(tabel.find("#c201").find('input').val()) : null;
	array[201] =  tabel.find("#c202").find('input').val() ? parseInt(tabel.find("#c202").find('input').val()) : null;
	array[202] =  tabel.find("#c203").find('input').val() ? parseInt(tabel.find("#c203").find('input').val()) : null;
	array[203] =  tabel.find("#c204").find('input').val() ? parseInt(tabel.find("#c204").find('input').val()) : null;
	array[204] =  tabel.find("#c205").find('input').val() ? parseInt(tabel.find("#c205").find('input').val()) : null;
	array[205] =  tabel.find("#c206").find('input').val() ? parseInt(tabel.find("#c206").find('input').val()) : null;
	array[206] =  tabel.find("#c207").find('input').val() ? parseInt(tabel.find("#c207").find('input').val()) : null;
	array[207] =  tabel.find("#c208").find('input').val() ? parseInt(tabel.find("#c208").find('input').val()) : null;
	array[208] =  tabel.find("#c209").find('input').val() ? parseInt(tabel.find("#c209").find('input').val()) : null;
	array[209] =  tabel.find("#c210").find('input').val() ? parseInt(tabel.find("#c210").find('input').val()) : null;
	array[210] =  tabel.find("#c211").find('input').val() ? parseInt(tabel.find("#c211").find('input').val()) : null;
	array[211] =  tabel.find("#c212").find('input').val() ? parseInt(tabel.find("#c212").find('input').val()) : null;
	array[212] =  tabel.find("#c213").find('input').val() ? parseInt(tabel.find("#c213").find('input').val()) : null;
	array[213] =  tabel.find("#c214").find('input').val() ? parseInt(tabel.find("#c214").find('input').val()) : null;
	array[214] =  tabel.find("#c215").find('input').val() ? parseInt(tabel.find("#c215").find('input').val()) : null;
	array[215] =  tabel.find("#c216").find('input').val() ? parseInt(tabel.find("#c216").find('input').val()) : null;
	array[216] =  tabel.find("#c217").find('input').val() ? parseInt(tabel.find("#c217").find('input').val()) : null;
	array[217] =  tabel.find("#c218").find('input').val() ? parseInt(tabel.find("#c218").find('input').val()) : null;
	array[218] =  tabel.find("#c219").find('input').val() ? parseInt(tabel.find("#c219").find('input').val()) : null;
	array[219] =  tabel.find("#c220").find('input').val() ? parseInt(tabel.find("#c220").find('input').val()) : null;
	array[220] =  tabel.find("#c221").find('input').val() ? parseInt(tabel.find("#c221").find('input').val()) : null;
	array[221] =  tabel.find("#c222").find('input').val() ? parseInt(tabel.find("#c222").find('input').val()) : null;
	array[222] =  tabel.find("#c223").find('input').val() ? parseInt(tabel.find("#c223").find('input').val()) : null;
	array[223] =  tabel.find("#c224").find('input').val() ? parseInt(tabel.find("#c224").find('input').val()) : null;
	array[224] =  tabel.find("#c225").find('input').val() ? parseInt(tabel.find("#c225").find('input').val()) : null;
	array[225] =  tabel.find("#c226").find('input').val() ? parseInt(tabel.find("#c226").find('input').val()) : null;
	array[226] =  tabel.find("#c227").find('input').val() ? parseInt(tabel.find("#c227").find('input').val()) : null;
	array[227] =  tabel.find("#c228").find('input').val() ? parseInt(tabel.find("#c228").find('input').val()) : null;
	array[228] =  tabel.find("#c229").find('input').val() ? parseInt(tabel.find("#c229").find('input').val()) : null;
	array[229] =  tabel.find("#c230").find('input').val() ? parseInt(tabel.find("#c230").find('input').val()) : null;
	array[230] =  tabel.find("#c231").find('input').val() ? parseInt(tabel.find("#c231").find('input').val()) : null;
	array[231] =  tabel.find("#c232").find('input').val() ? parseInt(tabel.find("#c232").find('input').val()) : null;
	array[232] =  tabel.find("#c233").find('input').val() ? parseInt(tabel.find("#c233").find('input').val()) : null;
	array[233] =  tabel.find("#c234").find('input').val() ? parseInt(tabel.find("#c234").find('input').val()) : null;
	array[234] =  tabel.find("#c235").find('input').val() ? parseInt(tabel.find("#c235").find('input').val()) : null;
	array[235] =  tabel.find("#c236").find('input').val() ? parseInt(tabel.find("#c236").find('input').val()) : null;
	array[236] =  tabel.find("#c237").find('input').val() ? parseInt(tabel.find("#c237").find('input').val()) : null;
	array[237] =  tabel.find("#c238").find('input').val() ? parseInt(tabel.find("#c238").find('input').val()) : null;
	array[238] =  tabel.find("#c239").find('input').val() ? parseInt(tabel.find("#c239").find('input').val()) : null;
	array[239] =  tabel.find("#c240").find('input').val() ? parseInt(tabel.find("#c240").find('input').val()) : null;
	array[240] =  tabel.find("#c241").find('input').val() ? parseInt(tabel.find("#c241").find('input').val()) : null;
	array[241] =  tabel.find("#c242").find('input').val() ? parseInt(tabel.find("#c242").find('input').val()) : null;
	array[242] =  tabel.find("#c243").find('input').val() ? parseInt(tabel.find("#c243").find('input').val()) : null;
	
	//sudoku E
	array[243] =  tabel.find("#c244").find('input').val() ? parseInt(tabel.find("#c244").find('input').val()) : null;
	array[244] =  tabel.find("#c245").find('input').val() ? parseInt(tabel.find("#c245").find('input').val()) : null;
	array[245] =  tabel.find("#c246").find('input').val() ? parseInt(tabel.find("#c246").find('input').val()) : null;
	array[246] =  tabel.find("#c247").find('input').val() ? parseInt(tabel.find("#c247").find('input').val()) : null;
	array[247] =  tabel.find("#c248").find('input').val() ? parseInt(tabel.find("#c248").find('input').val()) : null;
	array[248] =  tabel.find("#c249").find('input').val() ? parseInt(tabel.find("#c249").find('input').val()) : null;
	array[249] =  tabel.find("#c250").find('input').val() ? parseInt(tabel.find("#c250").find('input').val()) : null;
	array[250] =  tabel.find("#c251").find('input').val() ? parseInt(tabel.find("#c251").find('input').val()) : null;
	array[251] =  tabel.find("#c252").find('input').val() ? parseInt(tabel.find("#c252").find('input').val()) : null;
	array[252] =  tabel.find("#c253").find('input').val() ? parseInt(tabel.find("#c253").find('input').val()) : null;
	array[253] =  tabel.find("#c254").find('input').val() ? parseInt(tabel.find("#c254").find('input').val()) : null;
	array[254] =  tabel.find("#c255").find('input').val() ? parseInt(tabel.find("#c255").find('input').val()) : null;
	array[255] =  tabel.find("#c256").find('input').val() ? parseInt(tabel.find("#c256").find('input').val()) : null;
	array[256] =  tabel.find("#c257").find('input').val() ? parseInt(tabel.find("#c257").find('input').val()) : null;
	array[257] =  tabel.find("#c258").find('input').val() ? parseInt(tabel.find("#c258").find('input').val()) : null;
	array[258] =  tabel.find("#c259").find('input').val() ? parseInt(tabel.find("#c259").find('input').val()) : null;
	array[259] =  tabel.find("#c260").find('input').val() ? parseInt(tabel.find("#c260").find('input').val()) : null;
	array[260] =  tabel.find("#c261").find('input').val() ? parseInt(tabel.find("#c261").find('input').val()) : null;
	array[261] =  tabel.find("#c262").find('input').val() ? parseInt(tabel.find("#c262").find('input').val()) : null;
	array[262] =  tabel.find("#c263").find('input').val() ? parseInt(tabel.find("#c263").find('input').val()) : null;
	array[263] =  tabel.find("#c264").find('input').val() ? parseInt(tabel.find("#c264").find('input').val()) : null;
	array[264] =  tabel.find("#c265").find('input').val() ? parseInt(tabel.find("#c265").find('input').val()) : null;
	array[265] =  tabel.find("#c266").find('input').val() ? parseInt(tabel.find("#c266").find('input').val()) : null;
	array[266] =  tabel.find("#c267").find('input').val() ? parseInt(tabel.find("#c267").find('input').val()) : null;
	array[267] =  tabel.find("#c268").find('input').val() ? parseInt(tabel.find("#c268").find('input').val()) : null;
	array[268] =  tabel.find("#c269").find('input').val() ? parseInt(tabel.find("#c269").find('input').val()) : null;
	array[269] =  tabel.find("#c270").find('input').val() ? parseInt(tabel.find("#c270").find('input').val()) : null;
	array[270] =  tabel.find("#c271").find('input').val() ? parseInt(tabel.find("#c271").find('input').val()) : null;
	array[271] =  tabel.find("#c272").find('input').val() ? parseInt(tabel.find("#c272").find('input').val()) : null;
	array[272] =  tabel.find("#c273").find('input').val() ? parseInt(tabel.find("#c273").find('input').val()) : null;
	array[273] =  tabel.find("#c274").find('input').val() ? parseInt(tabel.find("#c274").find('input').val()) : null;
	array[274] =  tabel.find("#c275").find('input').val() ? parseInt(tabel.find("#c275").find('input').val()) : null;
	array[275] =  tabel.find("#c276").find('input').val() ? parseInt(tabel.find("#c276").find('input').val()) : null;
	array[276] =  tabel.find("#c277").find('input').val() ? parseInt(tabel.find("#c277").find('input').val()) : null;
	array[277] =  tabel.find("#c278").find('input').val() ? parseInt(tabel.find("#c278").find('input').val()) : null;
	array[278] =  tabel.find("#c279").find('input').val() ? parseInt(tabel.find("#c279").find('input').val()) : null;
	array[279] =  tabel.find("#c280").find('input').val() ? parseInt(tabel.find("#c280").find('input').val()) : null;
	array[280] =  tabel.find("#c281").find('input').val() ? parseInt(tabel.find("#c281").find('input').val()) : null;
	array[281] =  tabel.find("#c282").find('input').val() ? parseInt(tabel.find("#c282").find('input').val()) : null;
	array[282] =  tabel.find("#c283").find('input').val() ? parseInt(tabel.find("#c283").find('input').val()) : null;
	array[283] =  tabel.find("#c284").find('input').val() ? parseInt(tabel.find("#c284").find('input').val()) : null;
	array[284] =  tabel.find("#c285").find('input').val() ? parseInt(tabel.find("#c285").find('input').val()) : null;
	array[285] =  tabel.find("#c286").find('input').val() ? parseInt(tabel.find("#c286").find('input').val()) : null;
	array[286] =  tabel.find("#c287").find('input').val() ? parseInt(tabel.find("#c287").find('input').val()) : null;
	array[287] =  tabel.find("#c288").find('input').val() ? parseInt(tabel.find("#c288").find('input').val()) : null;
	array[288] =  tabel.find("#c289").find('input').val() ? parseInt(tabel.find("#c289").find('input').val()) : null;
	array[289] =  tabel.find("#c290").find('input').val() ? parseInt(tabel.find("#c290").find('input').val()) : null;
	array[290] =  tabel.find("#c291").find('input').val() ? parseInt(tabel.find("#c291").find('input').val()) : null;
	array[291] =  tabel.find("#c292").find('input').val() ? parseInt(tabel.find("#c292").find('input').val()) : null;
	array[292] =  tabel.find("#c293").find('input').val() ? parseInt(tabel.find("#c293").find('input').val()) : null;
	array[293] =  tabel.find("#c294").find('input').val() ? parseInt(tabel.find("#c294").find('input').val()) : null;
	array[294] =  tabel.find("#c295").find('input').val() ? parseInt(tabel.find("#c295").find('input').val()) : null;
	array[295] =  tabel.find("#c296").find('input').val() ? parseInt(tabel.find("#c296").find('input').val()) : null;
	array[296] =  tabel.find("#c297").find('input').val() ? parseInt(tabel.find("#c297").find('input').val()) : null;
	array[297] =  tabel.find("#c298").find('input').val() ? parseInt(tabel.find("#c298").find('input').val()) : null;
	array[298] =  tabel.find("#c299").find('input').val() ? parseInt(tabel.find("#c299").find('input').val()) : null;
	array[299] =  tabel.find("#c300").find('input').val() ? parseInt(tabel.find("#c300").find('input').val()) : null;
	array[300] =  tabel.find("#c301").find('input').val() ? parseInt(tabel.find("#c301").find('input').val()) : null;
	array[301] =  tabel.find("#c302").find('input').val() ? parseInt(tabel.find("#c302").find('input').val()) : null;
	array[302] =  tabel.find("#c303").find('input').val() ? parseInt(tabel.find("#c303").find('input').val()) : null;
	array[303] =  tabel.find("#c304").find('input').val() ? parseInt(tabel.find("#c304").find('input').val()) : null;
	array[304] =  tabel.find("#c305").find('input').val() ? parseInt(tabel.find("#c305").find('input').val()) : null;
	array[305] =  tabel.find("#c306").find('input').val() ? parseInt(tabel.find("#c306").find('input').val()) : null;
	array[306] =  tabel.find("#c307").find('input').val() ? parseInt(tabel.find("#c307").find('input').val()) : null;
	array[307] =  tabel.find("#c308").find('input').val() ? parseInt(tabel.find("#c308").find('input').val()) : null;
	array[308] =  tabel.find("#c309").find('input').val() ? parseInt(tabel.find("#c309").find('input').val()) : null;
	array[309] =  tabel.find("#c310").find('input').val() ? parseInt(tabel.find("#c310").find('input').val()) : null;
	array[310] =  tabel.find("#c311").find('input').val() ? parseInt(tabel.find("#c311").find('input').val()) : null;
	array[311] =  tabel.find("#c312").find('input').val() ? parseInt(tabel.find("#c312").find('input').val()) : null;
	array[312] =  tabel.find("#c313").find('input').val() ? parseInt(tabel.find("#c313").find('input').val()) : null;
	array[313] =  tabel.find("#c314").find('input').val() ? parseInt(tabel.find("#c314").find('input').val()) : null;
	array[314] =  tabel.find("#c315").find('input').val() ? parseInt(tabel.find("#c315").find('input').val()) : null;
	array[315] =  tabel.find("#c316").find('input').val() ? parseInt(tabel.find("#c316").find('input').val()) : null;
	array[316] =  tabel.find("#c317").find('input').val() ? parseInt(tabel.find("#c317").find('input').val()) : null;
	array[317] =  tabel.find("#c318").find('input').val() ? parseInt(tabel.find("#c318").find('input').val()) : null;
	array[318] =  tabel.find("#c319").find('input').val() ? parseInt(tabel.find("#c319").find('input').val()) : null;
	array[319] =  tabel.find("#c320").find('input').val() ? parseInt(tabel.find("#c320").find('input').val()) : null;
	array[320] =  tabel.find("#c321").find('input').val() ? parseInt(tabel.find("#c321").find('input').val()) : null;
	array[321] =  tabel.find("#c322").find('input').val() ? parseInt(tabel.find("#c322").find('input').val()) : null;
	array[322] =  tabel.find("#c323").find('input').val() ? parseInt(tabel.find("#c323").find('input').val()) : null;
	array[323] =  tabel.find("#c324").find('input').val() ? parseInt(tabel.find("#c324").find('input').val()) : null;

	// sudoku C
	array[324] =  tabel.find("#c325").find('input').val() ? parseInt(tabel.find("#c325").find('input').val()) : null;
	array[325] =  tabel.find("#c326").find('input').val() ? parseInt(tabel.find("#c326").find('input').val()) : null;
	array[326] =  tabel.find("#c327").find('input').val() ? parseInt(tabel.find("#c327").find('input').val()) : null;
	array[327] =  tabel.find("#c328").find('input').val() ? parseInt(tabel.find("#c328").find('input').val()) : null;
	array[328] =  tabel.find("#c329").find('input').val() ? parseInt(tabel.find("#c329").find('input').val()) : null;
	array[329] =  tabel.find("#c330").find('input').val() ? parseInt(tabel.find("#c330").find('input').val()) : null;
	array[330] =  tabel.find("#c331").find('input').val() ? parseInt(tabel.find("#c331").find('input').val()) : null;
	array[331] =  tabel.find("#c332").find('input').val() ? parseInt(tabel.find("#c332").find('input').val()) : null;
	array[332] =  tabel.find("#c333").find('input').val() ? parseInt(tabel.find("#c333").find('input').val()) : null;
	array[333] =  tabel.find("#c334").find('input').val() ? parseInt(tabel.find("#c334").find('input').val()) : null;
	array[334] =  tabel.find("#c335").find('input').val() ? parseInt(tabel.find("#c335").find('input').val()) : null;
	array[335] =  tabel.find("#c336").find('input').val() ? parseInt(tabel.find("#c336").find('input').val()) : null;
	array[336] =  tabel.find("#c337").find('input').val() ? parseInt(tabel.find("#c337").find('input').val()) : null;
	array[337] =  tabel.find("#c338").find('input').val() ? parseInt(tabel.find("#c338").find('input').val()) : null;
	array[338] =  tabel.find("#c339").find('input').val() ? parseInt(tabel.find("#c339").find('input').val()) : null;
	array[339] =  tabel.find("#c340").find('input').val() ? parseInt(tabel.find("#c340").find('input').val()) : null;
	array[340] =  tabel.find("#c341").find('input').val() ? parseInt(tabel.find("#c341").find('input').val()) : null;
	array[341] =  tabel.find("#c342").find('input').val() ? parseInt(tabel.find("#c342").find('input').val()) : null;
	array[342] =  tabel.find("#c343").find('input').val() ? parseInt(tabel.find("#c343").find('input').val()) : null;
	array[343] =  tabel.find("#c344").find('input').val() ? parseInt(tabel.find("#c344").find('input').val()) : null;
	array[344] =  tabel.find("#c345").find('input').val() ? parseInt(tabel.find("#c345").find('input').val()) : null;
	array[345] =  tabel.find("#c346").find('input').val() ? parseInt(tabel.find("#c346").find('input').val()) : null;
	array[346] =  tabel.find("#c347").find('input').val() ? parseInt(tabel.find("#c347").find('input').val()) : null;
	array[347] =  tabel.find("#c348").find('input').val() ? parseInt(tabel.find("#c348").find('input').val()) : null;
	array[348] =  tabel.find("#c349").find('input').val() ? parseInt(tabel.find("#c349").find('input').val()) : null;
	array[349] =  tabel.find("#c350").find('input').val() ? parseInt(tabel.find("#c350").find('input').val()) : null;
	array[350] =  tabel.find("#c351").find('input').val() ? parseInt(tabel.find("#c351").find('input').val()) : null;
	array[351] =  tabel.find("#c352").find('input').val() ? parseInt(tabel.find("#c352").find('input').val()) : null;
	array[352] =  tabel.find("#c353").find('input').val() ? parseInt(tabel.find("#c353").find('input').val()) : null;
	array[353] =  tabel.find("#c354").find('input').val() ? parseInt(tabel.find("#c354").find('input').val()) : null;
	array[354] =  tabel.find("#c355").find('input').val() ? parseInt(tabel.find("#c355").find('input').val()) : null;
	array[355] =  tabel.find("#c356").find('input').val() ? parseInt(tabel.find("#c356").find('input').val()) : null;
	array[356] =  tabel.find("#c357").find('input').val() ? parseInt(tabel.find("#c357").find('input').val()) : null;
	array[357] =  tabel.find("#c358").find('input').val() ? parseInt(tabel.find("#c358").find('input').val()) : null;
	array[358] =  tabel.find("#c359").find('input').val() ? parseInt(tabel.find("#c359").find('input').val()) : null;
	array[359] =  tabel.find("#c360").find('input').val() ? parseInt(tabel.find("#c360").find('input').val()) : null;
	array[360] =  tabel.find("#c361").find('input').val() ? parseInt(tabel.find("#c361").find('input').val()) : null;
	array[361] =  tabel.find("#c362").find('input').val() ? parseInt(tabel.find("#c362").find('input').val()) : null;
	array[362] =  tabel.find("#c363").find('input').val() ? parseInt(tabel.find("#c363").find('input').val()) : null;
	array[363] =  tabel.find("#c364").find('input').val() ? parseInt(tabel.find("#c364").find('input').val()) : null;
	array[364] =  tabel.find("#c365").find('input').val() ? parseInt(tabel.find("#c365").find('input').val()) : null;
	array[365] =  tabel.find("#c366").find('input').val() ? parseInt(tabel.find("#c366").find('input').val()) : null;
	array[366] =  tabel.find("#c367").find('input').val() ? parseInt(tabel.find("#c367").find('input').val()) : null;
	array[367] =  tabel.find("#c368").find('input').val() ? parseInt(tabel.find("#c368").find('input').val()) : null;
	array[368] =  tabel.find("#c369").find('input').val() ? parseInt(tabel.find("#c369").find('input').val()) : null;

	// save data to local storage
	saveData('soal', array);

	var array_null = [];
	Object.keys(array).forEach(function(key){
		if(!array[key]){
			array_null.push(key);
		}
	});
	// console.log('array null ' + array_null);
	saveData('kosong', array_null);

	// modul return
	if(callback) { callback(array, array_null); }
}

/* BEE COLONY CORE */
var generateFoodSource = function(array_soal, jumlah_lebah, callback){
	// init
	var foodSource = [];
	
	// on emp bee count
	for (var j = 0; j < jumlah_lebah ; j++) {
		// define array 1 dimensi
		var arr = [];
		for (var i = 0; i < 369; i++) {
			arr.push(array_soal[i] ? array_soal[i] : getRandomInt(1,9) );
		}
		foodSource.push(arr);
	}

	// save data to local storage
	saveData('foodSource', foodSource);

	// modul return
	if(callback) { callback(foodSource); }
}

var checkMissingNumber = function(array_foodSource, callback){
	// rules
	var sudoku_startIndeks = 0;
	var total_error;
	var error_foodSource = [];
	var data_debug = {};

	// for loop : tiap array foodsource
	// console.log("cm " + array_foodSource);
	Object.keys(array_foodSource).forEach(function(key){
		// console.log('ini array foodsource ke-' + (parseInt(key) + 1 ));
		// debug.showModeledData(array_foodSource[key]);

		total_error = 0;

		for (var sudoku_startIndeks = 0; sudoku_startIndeks < 325 ; sudoku_startIndeks = sudoku_startIndeks + 81) {
			data_debug[key] = {};

			// baris indeks starts with sudokuStartIndeks + 9 (0, 9, 18, 27, ... 72)
			if (sudoku_startIndeks < 324){
				// sudoku A, B, D, E
				for (var baris = sudoku_startIndeks; baris < sudoku_startIndeks + 73; baris = baris + 9 ){

					var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};

					for (var nomor = baris; nomor < baris + 9 ; nomor++) {
						// flag data
						flag[array_foodSource[key][nomor]] = true;
					}

					var err_ctr = countFlag(flag);
					// console.log("jumlah error baris start indeks " + baris + ' = ' + err_ctr);
					total_error = total_error + err_ctr;
					// console.log("total error = " + total_error);
				}

				// kolom
				
				for (var kolom = sudoku_startIndeks; kolom < sudoku_startIndeks + 9; kolom++) {
					var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
					for (var nomor = kolom; nomor < kolom + 73; nomor = nomor + 9){
						flag[array_foodSource[key][nomor]] = true;
					}

					var err_ctr = countFlag(flag);
					// console.log("jumlah error kolom start indeks " + kolom + ' = ' + err_ctr);
					total_error = total_error + err_ctr;
					// console.log("total error = " + total_error);
				}
				
			}else{
				// sudoku C, new indeks
				
				var array_sudokuC = [];

				array_sudokuC[0] = array_foodSource[key][60];
				array_sudokuC[1] = array_foodSource[key][61];
				array_sudokuC[2] = array_foodSource[key][62];
				array_sudokuC[3] = array_foodSource[key][324];
				array_sudokuC[4] = array_foodSource[key][325];
				array_sudokuC[5] = array_foodSource[key][326];
				array_sudokuC[6] = array_foodSource[key][135];
				array_sudokuC[7] = array_foodSource[key][136];
				array_sudokuC[8] = array_foodSource[key][137];

				array_sudokuC[9] = array_foodSource[key][69];
				array_sudokuC[10] = array_foodSource[key][70];
				array_sudokuC[11] = array_foodSource[key][71];
				array_sudokuC[12] = array_foodSource[key][327];
				array_sudokuC[13] = array_foodSource[key][328];
				array_sudokuC[14] = array_foodSource[key][329];
				array_sudokuC[15] = array_foodSource[key][144];
				array_sudokuC[16] = array_foodSource[key][145];
				array_sudokuC[17] = array_foodSource[key][146];

				array_sudokuC[18] = array_foodSource[key][78];
				array_sudokuC[19] = array_foodSource[key][79];
				array_sudokuC[20] = array_foodSource[key][80];
				array_sudokuC[21] = array_foodSource[key][330];
				array_sudokuC[22] = array_foodSource[key][331];
				array_sudokuC[23] = array_foodSource[key][332];
				array_sudokuC[24] = array_foodSource[key][153];
				array_sudokuC[25] = array_foodSource[key][154];
				array_sudokuC[26] = array_foodSource[key][155];

				array_sudokuC[27] = array_foodSource[key][333];
				array_sudokuC[28] = array_foodSource[key][334];
				array_sudokuC[29] = array_foodSource[key][335];
				array_sudokuC[30] = array_foodSource[key][336];
				array_sudokuC[31] = array_foodSource[key][337];
				array_sudokuC[32] = array_foodSource[key][338];
				array_sudokuC[33] = array_foodSource[key][339];
				array_sudokuC[34] = array_foodSource[key][340];
				array_sudokuC[35] = array_foodSource[key][341];
				
				array_sudokuC[36] = array_foodSource[key][342];
				array_sudokuC[37] = array_foodSource[key][343];
				array_sudokuC[38] = array_foodSource[key][344];
				array_sudokuC[39] = array_foodSource[key][345];
				array_sudokuC[40] = array_foodSource[key][346];
				array_sudokuC[41] = array_foodSource[key][347];
				array_sudokuC[42] = array_foodSource[key][348];
				array_sudokuC[43] = array_foodSource[key][349];
				array_sudokuC[44] = array_foodSource[key][350];
				
				array_sudokuC[45] = array_foodSource[key][351];
				array_sudokuC[46] = array_foodSource[key][352];
				array_sudokuC[47] = array_foodSource[key][353];
				array_sudokuC[48] = array_foodSource[key][354];
				array_sudokuC[49] = array_foodSource[key][355];
				array_sudokuC[50] = array_foodSource[key][356];
				array_sudokuC[51] = array_foodSource[key][357];
				array_sudokuC[52] = array_foodSource[key][358];
				array_sudokuC[53] = array_foodSource[key][359];
				
				array_sudokuC[54] = array_foodSource[key][168];
				array_sudokuC[55] = array_foodSource[key][169];
				array_sudokuC[56] = array_foodSource[key][170];
				array_sudokuC[57] = array_foodSource[key][360];
				array_sudokuC[58] = array_foodSource[key][361];
				array_sudokuC[59] = array_foodSource[key][362];
				array_sudokuC[60] = array_foodSource[key][243];
				array_sudokuC[61] = array_foodSource[key][244];
				array_sudokuC[62] = array_foodSource[key][245];
				
				array_sudokuC[63] = array_foodSource[key][177];
				array_sudokuC[64] = array_foodSource[key][178];
				array_sudokuC[65] = array_foodSource[key][179];
				array_sudokuC[66] = array_foodSource[key][363];
				array_sudokuC[67] = array_foodSource[key][364];
				array_sudokuC[68] = array_foodSource[key][365];
				array_sudokuC[69] = array_foodSource[key][252];
				array_sudokuC[70] = array_foodSource[key][253];
				array_sudokuC[71] = array_foodSource[key][254];
				
				array_sudokuC[72] = array_foodSource[key][186];
				array_sudokuC[73] = array_foodSource[key][187];
				array_sudokuC[74] = array_foodSource[key][188];
				array_sudokuC[75] = array_foodSource[key][366];
				array_sudokuC[76] = array_foodSource[key][367];
				array_sudokuC[77] = array_foodSource[key][368];
				array_sudokuC[78] = array_foodSource[key][261];
				array_sudokuC[79] = array_foodSource[key][262];
				array_sudokuC[80] = array_foodSource[key][263];


				for (var baris = 0; baris < 73; baris = baris + 9 ){

					var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};

					for (var nomor = baris; nomor < baris + 9 ; nomor++) {
						// flag data
						flag[array_sudokuC[nomor]] = true;
					}

					var err_ctr = countFlag(flag);
					// console.log("jumlah error baris ke-" + baris + ' = ' + err_ctr);
					total_error = total_error + err_ctr;
					// console.log("total error = " + total_error);
				}

				for (var kolom = 0; kolom < 9; kolom++) {
					var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
					for (var nomor = kolom; nomor < kolom + 73; nomor = nomor + 9){
						flag[array_sudokuC[nomor]] = true;
					}

					var err_ctr = countFlag(flag);
					// console.log("jumlah error kolom ke-" + kolom + ' = ' + err_ctr);
					total_error = total_error + err_ctr;
					// console.log("total error = " + total_error);
				}
			}
		}

		// console.log('Total error foodsource ke-' + (parseInt(key) + 1 ) + ' = ' + total_error);
		error_foodSource.push(total_error);

	});

	// kesimpulan
	var foodSourceScore = ""; // hasil score nya gimana (misal: 9 - error_ctr)

	// function count flag 
	function countFlag(flag_array){
		var error_ctr = 0;

		for (var i = 1; i < 10; i++) {
			if(!flag_array[i]){
				error_ctr++;
			}
		}
		return error_ctr;
	}	

	// modul return
	if(callback) { callback(error_foodSource); }
}

// modul coba

function hitungFitness(error_foodSource, callback){
	var fitness = [];
	Object.keys(error_foodSource).forEach(function(key){
		var fit = 1 / (1 + error_foodSource[key]);
		fitness.push(fit);
		// console.log('fitness food source ke-' + (parseInt(key) + 1) + ' = ' + fitness[key]);
	});
		// modul return
		if(callback) { callback(fitness); }
	}

	function totalFitness(fitness, callback){
		var total_fitness = 0;
		Object.keys(fitness).forEach(function(key){
			total_fitness = total_fitness + fitness[key];
		});
		// console.log('total fitness = ' + total_fitness);

		if(callback) { callback(total_fitness);}
	}	

	function waggleDance(fitness, total_fitness, callback){
		var prob_onlooker = [];
		Object.keys(fitness).forEach(function(key){
			var prob = fitness[key] / total_fitness;
			prob_onlooker.push(prob);
			// console.log('Prob food source ke-' + (parseInt(key) + 1) + ' = ' + prob_onlooker[key]);
		});
		if(callback) { callback(prob_onlooker);}
	};

	function sumOnlooker(prob_onlooker, callback){
		var jumlah_onlooker = [];
		Object.keys(prob_onlooker).forEach(function(key){
			var jumlah = prob_onlooker[key] * onlooker_bee;
			jumlah_onlooker.push(jumlah);
			// console.log('Jumlah onlooker food source ke-' + (parseInt(key) + 1) + ' = ' + jumlah_onlooker[key]);
		});

		if(callback) { callback(jumlah_onlooker);}
	}

	function neighborhoodSearch(jumlah_onlooker, callback){
		var j;
		var neighbor;
		var array_foodSource = getData('foodSource');
		var array_null = getData('kosong');

		// console.log(array_foodSource);

		// console.log(array_foodSource);
		// console.log(array_null);
		Object.keys(jumlah_onlooker).forEach(function(key){
			if (jumlah_onlooker[key] > 0){
				var temp = array_foodSource[key].slice();
				for (var i = jumlah_onlooker[key]; i > 0; i--) {
					var k;
					if (key == parseInt(employed_bee - 1)){
						k = getRandomInt(0, (employed_bee - 2));
					}else if(key < parseInt(employed_bee - 1) && key > 0){
						k = randomExcluded(0, parseInt(employed_bee - 1), key);
					}else{
						k = getRandomInt(1, parseInt(employed_bee - 1));
					}
					// console.log('nilai k untuk key ' + key + ' = ' + k);
					
					var indeks_null = getRandomInt(0, parseInt(array_null.length -1));
					// console.log('Jumlah kotak kosong = ' + array_null.length);
					// console.log('Indeks Null = ' + indeks_null);
					j = array_null[indeks_null];
					// console.log('Indeks yang dikerjakan = ' + j);
					
					var teta = Math.random() < 0.5 ? -1 : 1;

					neighbor = Math.ceil(array_foodSource[key][j] + ((teta) * Math.abs(array_foodSource[key][j] - array_foodSource[k][j])));

					// neighbor = 1-9
					if (neighbor < 1 || neighbor > 9){
						neighbor = (mod(neighbor, 9)) + 1;
					}
					temp[j] = neighbor;

					// console.log('food source key ' + key + ' = ' + array_foodSource[key][j]);
					// console.log('food source k ' + k + ' = ' + array_foodSource[k][j]);
					// console.log('teta = ' + teta);
					// console.log('neighbor = ' + temp[j]);

					// check new fitness
					// console.log('temp = ' + temp);
					// saveData('temporaryNeighbor', temp);
					// console.log('array foodsource = ' + array_foodSource[key]);
					// saveData('arrayFoodsource', array_foodSource[key]);

					// console.log(array_foodSource[key]);
					// console.log('ini array foodsource key (bawah)')
					//debug.showModeledData(array_foodSource[key]);
					// console.log('ini array temp (bawah)')
					//debug.showModeledData(temp);
					/*var tmp_arr = {
						0: array_foodSource[key]
					}*/

					// console.log("k = ", k);
					//debug.showModeledData(array_foodSource[k]);

					// console.log("key = ", key);

					var fitness_lama;
					var fitness_baru;

					checkMissingNumber({0: array_foodSource[key]}, function(rslt){
						hitungFitness(rslt, function(rslt2){
							checkMissingNumber({0: temp}, function(rslt3){
								hitungFitness(rslt3, function(rslt4){
									fitness_lama = rslt2;
									fitness_baru = rslt4;
									bandingkan(fitness_lama, fitness_baru, array_foodSource[key][j], temp, j, array_foodSource[key], neighbor, function(){
										// console.log('array_foodSource bandingkan = ', array_foodSource[key][j]);
										// console.log('nilai neighbor = ', neighbor);

										if (callback){ callback(array_foodSource);}
									});
								})
							})
						})
					});

				}
			}
		});
	}

	var bandingkan = function(fitness_lama, fitness_baru, nilai_lama, array_baru, indeks_neighbor, array_foodSource, neighbor, callback){
		// console.log('fitness lama = ' + fitness_lama);
		// console.log('fitness baru = ' + fitness_baru);
		var rslt3;

		if (fitness_baru >= fitness_lama){
			// console.log('bagusan yang baru');
			
			// menandai yang mana neighbor, indeks untuk pengecekan berubah
			cekSubgrid(nilai_lama, array_baru, indeks_neighbor, function(rslt3){
				if(rslt3 && rslt3 >= 0){
					array_foodSource[rslt3] = nilai_lama;
					// console.log('array_foodSource indeks ', rslt3, ' = ', array_foodSource[rslt3], ", ", nilai_lama);
				}
				array_foodSource[indeks_neighbor] = neighbor;
				if(callback) { callback(rslt3);} 
			});
		}
	}

	function cekSubgrid(nilai_lama, array_temp, indeks_neighbor, callback){
		var nilai_neighbor = array_temp[indeks_neighbor];
		array_temp[indeks_neighbor] = parseInt(array_temp[indeks_neighbor] + 20);
		// console.log('array_temp indeks_neighbor = ', array_temp[indeks_neighbor]);
		var indeks_normal;

		var array_subgrid = [];
		array_subgrid[0] = array_temp[0];
		array_subgrid[1] = array_temp[1];
		array_subgrid[2] = array_temp[2];
		array_subgrid[3] = array_temp[9];
		array_subgrid[4] = array_temp[10];
		array_subgrid[5] = array_temp[11];
		array_subgrid[6] = array_temp[18];
		array_subgrid[7] = array_temp[19];
		array_subgrid[8] = array_temp[20];
		array_subgrid[9] = array_temp[3]; 
		array_subgrid[10] = array_temp[4]; 
		array_subgrid[11] = array_temp[5]; 
		array_subgrid[12] = array_temp[12]; 
		array_subgrid[13] = array_temp[13]; 
		array_subgrid[14] = array_temp[14]; 
		array_subgrid[15] = array_temp[21]; 
		array_subgrid[16] = array_temp[22]; 
		array_subgrid[17] = array_temp[23]; 
		array_subgrid[18] = array_temp[6]; 
		array_subgrid[19] = array_temp[7]; 
		array_subgrid[20] = array_temp[8]; 
		array_subgrid[21] = array_temp[15]; 
		array_subgrid[22] = array_temp[16]; 
		array_subgrid[23] = array_temp[17]; 
		array_subgrid[24] = array_temp[24]; 
		array_subgrid[25] = array_temp[25]; 
		array_subgrid[26] = array_temp[26]; 
		array_subgrid[27] = array_temp[27]; 
		array_subgrid[28] = array_temp[28]; 
		array_subgrid[29] = array_temp[29]; 
		array_subgrid[30] = array_temp[36]; 
		array_subgrid[31] = array_temp[37]; 
		array_subgrid[32] = array_temp[38]; 
		array_subgrid[33] = array_temp[45]; 
		array_subgrid[34] = array_temp[46]; 
		array_subgrid[35] = array_temp[47]; 
		array_subgrid[36] = array_temp[30]; 
		array_subgrid[37] = array_temp[31]; 
		array_subgrid[38] = array_temp[32]; 
		array_subgrid[39] = array_temp[39]; 
		array_subgrid[40] = array_temp[40]; 
		array_subgrid[41] = array_temp[41]; 
		array_subgrid[42] = array_temp[48]; 
		array_subgrid[43] = array_temp[49]; 
		array_subgrid[44] = array_temp[50]; 
		array_subgrid[45] = array_temp[33]; 
		array_subgrid[46] = array_temp[34]; 
		array_subgrid[47] = array_temp[35]; 
		array_subgrid[48] = array_temp[42]; 
		array_subgrid[49] = array_temp[43]; 
		array_subgrid[50] = array_temp[44]; 
		array_subgrid[51] = array_temp[51]; 
		array_subgrid[52] = array_temp[52]; 
		array_subgrid[53] = array_temp[53]; 
		array_subgrid[54] = array_temp[54]; 
		array_subgrid[55] = array_temp[55]; 
		array_subgrid[56] = array_temp[56]; 
		array_subgrid[57] = array_temp[63]; 
		array_subgrid[58] = array_temp[64]; 
		array_subgrid[59] = array_temp[65]; 
		array_subgrid[60] = array_temp[72]; 
		array_subgrid[61] = array_temp[73]; 
		array_subgrid[62] = array_temp[74]; 
		array_subgrid[63] = array_temp[57]; 
		array_subgrid[64] = array_temp[58]; 
		array_subgrid[65] = array_temp[59]; 
		array_subgrid[66] = array_temp[66]; 
		array_subgrid[67] = array_temp[67]; 
		array_subgrid[68] = array_temp[68]; 
		array_subgrid[69] = array_temp[75]; 
		array_subgrid[70] = array_temp[76]; 
		array_subgrid[71] = array_temp[77]; 
		array_subgrid[72] = array_temp[60]; 
		array_subgrid[73] = array_temp[61]; 
		array_subgrid[74] = array_temp[62]; 
		array_subgrid[75] = array_temp[69]; 
		array_subgrid[76] = array_temp[70]; 
		array_subgrid[77] = array_temp[71]; 
		array_subgrid[78] = array_temp[78]; 
		array_subgrid[79] = array_temp[79]; 
		array_subgrid[80] = array_temp[80]; 

		// sudoku B
		array_subgrid[81] = array_temp[81]; 
		array_subgrid[82] = array_temp[82]; 
		array_subgrid[83] = array_temp[83]; 
		array_subgrid[84] = array_temp[90]; 
		array_subgrid[85] = array_temp[91]; 
		array_subgrid[86] = array_temp[92]; 
		array_subgrid[87] = array_temp[99]; 
		array_subgrid[88] = array_temp[100]; 
		array_subgrid[89] = array_temp[101]; 
		array_subgrid[90] = array_temp[84]; 
		array_subgrid[91] = array_temp[85]; 
		array_subgrid[92] = array_temp[86]; 
		array_subgrid[93] = array_temp[93]; 
		array_subgrid[94] = array_temp[94]; 
		array_subgrid[95] = array_temp[95]; 
		array_subgrid[96] = array_temp[102]; 
		array_subgrid[97] = array_temp[103]; 
		array_subgrid[98] = array_temp[105]; 
		array_subgrid[99] = array_temp[87];
		array_subgrid[100] = array_temp[88];
		array_subgrid[101] = array_temp[89];
		array_subgrid[102] = array_temp[96];
		array_subgrid[103] = array_temp[97];
		array_subgrid[104] = array_temp[98];
		array_subgrid[105] = array_temp[105];
		array_subgrid[106] = array_temp[106];
		array_subgrid[107] = array_temp[107];
		array_subgrid[108] = array_temp[108];
		array_subgrid[109] = array_temp[109];
		array_subgrid[110] = array_temp[110];
		array_subgrid[111] = array_temp[117];
		array_subgrid[112] = array_temp[118];
		array_subgrid[113] = array_temp[119];
		array_subgrid[114] = array_temp[126];
		array_subgrid[115] = array_temp[127];
		array_subgrid[116] = array_temp[128];
		array_subgrid[117] = array_temp[111];
		array_subgrid[118] = array_temp[112];
		array_subgrid[119] = array_temp[113];
		array_subgrid[120] = array_temp[120];
		array_subgrid[121] = array_temp[121];
		array_subgrid[122] = array_temp[122];
		array_subgrid[123] = array_temp[129];
		array_subgrid[124] = array_temp[130];
		array_subgrid[125] = array_temp[131];
		array_subgrid[126] = array_temp[114];
		array_subgrid[127] = array_temp[115];
		array_subgrid[128] = array_temp[116];
		array_subgrid[129] = array_temp[123];
		array_subgrid[130] = array_temp[124];
		array_subgrid[131] = array_temp[125];
		array_subgrid[132] = array_temp[132];
		array_subgrid[133] = array_temp[133];
		array_subgrid[134] = array_temp[134];
		array_subgrid[135] = array_temp[135];
		array_subgrid[136] = array_temp[136];
		array_subgrid[137] = array_temp[137];
		array_subgrid[138] = array_temp[144];
		array_subgrid[139] = array_temp[145];
		array_subgrid[140] = array_temp[146];
		array_subgrid[141] = array_temp[153];
		array_subgrid[142] = array_temp[154];
		array_subgrid[143] = array_temp[155];
		array_subgrid[144] = array_temp[138];
		array_subgrid[145] = array_temp[139];
		array_subgrid[146] = array_temp[140];
		array_subgrid[147] = array_temp[147];
		array_subgrid[148] = array_temp[148];
		array_subgrid[149] = array_temp[149];
		array_subgrid[150] = array_temp[156];
		array_subgrid[151] = array_temp[157];
		array_subgrid[152] = array_temp[158];
		array_subgrid[153] = array_temp[141];
		array_subgrid[154] = array_temp[142];
		array_subgrid[155] = array_temp[143];
		array_subgrid[156] = array_temp[150];
		array_subgrid[157] = array_temp[151];
		array_subgrid[158] = array_temp[152];
		array_subgrid[159] = array_temp[159];
		array_subgrid[160] = array_temp[160];
		array_subgrid[161] = array_temp[161];

		// sudoku D
		array_subgrid[162] = array_temp[162];
		array_subgrid[163] = array_temp[163];
		array_subgrid[164] = array_temp[164];
		array_subgrid[165] = array_temp[171];
		array_subgrid[166] = array_temp[172];
		array_subgrid[167] = array_temp[173];
		array_subgrid[168] = array_temp[180];
		array_subgrid[169] = array_temp[181];
		array_subgrid[170] = array_temp[182];
		array_subgrid[171] = array_temp[165];
		array_subgrid[172] = array_temp[166];
		array_subgrid[173] = array_temp[167];
		array_subgrid[174] = array_temp[174];
		array_subgrid[175] = array_temp[175];
		array_subgrid[176] = array_temp[176];
		array_subgrid[177] = array_temp[183];
		array_subgrid[178] = array_temp[184];
		array_subgrid[179] = array_temp[185];
		array_subgrid[180] = array_temp[168];
		array_subgrid[181] = array_temp[169];
		array_subgrid[182] = array_temp[170];
		array_subgrid[183] = array_temp[177];
		array_subgrid[184] = array_temp[178];
		array_subgrid[185] = array_temp[179];
		array_subgrid[186] = array_temp[186];
		array_subgrid[187] = array_temp[187];
		array_subgrid[188] = array_temp[188];
		array_subgrid[189] = array_temp[189];
		array_subgrid[190] = array_temp[190];
		array_subgrid[191] = array_temp[191];
		array_subgrid[192] = array_temp[198];
		array_subgrid[193] = array_temp[199];
		array_subgrid[194] = array_temp[200];
		array_subgrid[195] = array_temp[207];
		array_subgrid[196] = array_temp[208];
		array_subgrid[197] = array_temp[209];
		array_subgrid[198] = array_temp[192];
		array_subgrid[199] = array_temp[193];
		array_subgrid[200] = array_temp[194];
		array_subgrid[201] = array_temp[201];
		array_subgrid[202] = array_temp[202];
		array_subgrid[203] = array_temp[203];
		array_subgrid[204] = array_temp[210];
		array_subgrid[205] = array_temp[211];
		array_subgrid[206] = array_temp[212];
		array_subgrid[207] = array_temp[195];
		array_subgrid[208] = array_temp[196];
		array_subgrid[209] = array_temp[197];
		array_subgrid[210] = array_temp[204];
		array_subgrid[211] = array_temp[205];
		array_subgrid[212] = array_temp[206];
		array_subgrid[213] = array_temp[213];
		array_subgrid[214] = array_temp[214];
		array_subgrid[215] = array_temp[215];
		array_subgrid[216] = array_temp[216];
		array_subgrid[217] = array_temp[217];
		array_subgrid[218] = array_temp[218];
		array_subgrid[219] = array_temp[225];
		array_subgrid[220] = array_temp[226];
		array_subgrid[221] = array_temp[227];
		array_subgrid[222] = array_temp[234];
		array_subgrid[223] = array_temp[235];
		array_subgrid[224] = array_temp[236];
		array_subgrid[225] = array_temp[219];
		array_subgrid[226] = array_temp[220];
		array_subgrid[227] = array_temp[221];
		array_subgrid[228] = array_temp[228];
		array_subgrid[229] = array_temp[229];
		array_subgrid[230] = array_temp[230];
		array_subgrid[231] = array_temp[237];
		array_subgrid[232] = array_temp[238];
		array_subgrid[233] = array_temp[239];
		array_subgrid[234] = array_temp[222];
		array_subgrid[235] = array_temp[223];
		array_subgrid[236] = array_temp[224];
		array_subgrid[237] = array_temp[231];
		array_subgrid[238] = array_temp[232];
		array_subgrid[239] = array_temp[233];
		array_subgrid[240] = array_temp[240];
		array_subgrid[241] = array_temp[241];
		array_subgrid[242] = array_temp[242];
		
		//sudoku E
		array_subgrid[243] = array_temp[243];
		array_subgrid[244] = array_temp[244];
		array_subgrid[245] = array_temp[245];
		array_subgrid[246] = array_temp[252];
		array_subgrid[247] = array_temp[253];
		array_subgrid[248] = array_temp[254];
		array_subgrid[249] = array_temp[261];
		array_subgrid[250] = array_temp[262];
		array_subgrid[251] = array_temp[263];
		array_subgrid[252] = array_temp[246];
		array_subgrid[253] = array_temp[247];
		array_subgrid[254] = array_temp[248];
		array_subgrid[255] = array_temp[255];
		array_subgrid[256] = array_temp[256];
		array_subgrid[257] = array_temp[257];
		array_subgrid[258] = array_temp[264];
		array_subgrid[259] = array_temp[265];
		array_subgrid[260] = array_temp[266];
		array_subgrid[261] = array_temp[249];
		array_subgrid[262] = array_temp[250];
		array_subgrid[263] = array_temp[251];
		array_subgrid[264] = array_temp[258];
		array_subgrid[265] = array_temp[259];
		array_subgrid[266] = array_temp[260];
		array_subgrid[267] = array_temp[267];
		array_subgrid[268] = array_temp[268];
		array_subgrid[269] = array_temp[269];
		array_subgrid[270] = array_temp[270];
		array_subgrid[271] = array_temp[271];
		array_subgrid[272] = array_temp[272];
		array_subgrid[273] = array_temp[279];
		array_subgrid[274] = array_temp[280];
		array_subgrid[275] = array_temp[281];
		array_subgrid[276] = array_temp[288];
		array_subgrid[277] = array_temp[289];
		array_subgrid[278] = array_temp[290];
		array_subgrid[279] = array_temp[273];
		array_subgrid[280] = array_temp[274];
		array_subgrid[281] = array_temp[275];
		array_subgrid[282] = array_temp[282];
		array_subgrid[283] = array_temp[283];
		array_subgrid[284] = array_temp[284];
		array_subgrid[285] = array_temp[291];
		array_subgrid[286] = array_temp[292];
		array_subgrid[287] = array_temp[293];
		array_subgrid[288] = array_temp[276];
		array_subgrid[289] = array_temp[277];
		array_subgrid[290] = array_temp[278];
		array_subgrid[291] = array_temp[285];
		array_subgrid[292] = array_temp[286];
		array_subgrid[293] = array_temp[287];
		array_subgrid[294] = array_temp[294];
		array_subgrid[295] = array_temp[295];
		array_subgrid[296] = array_temp[296];
		array_subgrid[297] = array_temp[297];
		array_subgrid[298] = array_temp[298];
		array_subgrid[299] = array_temp[299];
		array_subgrid[300] = array_temp[306];
		array_subgrid[301] = array_temp[307];
		array_subgrid[302] = array_temp[308];
		array_subgrid[303] = array_temp[315];
		array_subgrid[304] = array_temp[316];
		array_subgrid[305] = array_temp[317];
		array_subgrid[306] = array_temp[300];
		array_subgrid[307] = array_temp[301];
		array_subgrid[308] = array_temp[302];
		array_subgrid[309] = array_temp[309];
		array_subgrid[310] = array_temp[310];
		array_subgrid[311] = array_temp[311];
		array_subgrid[312] = array_temp[318];
		array_subgrid[313] = array_temp[319];
		array_subgrid[314] = array_temp[320];
		array_subgrid[315] = array_temp[303];
		array_subgrid[316] = array_temp[304];
		array_subgrid[317] = array_temp[305];
		array_subgrid[318] = array_temp[312];
		array_subgrid[319] = array_temp[313];
		array_subgrid[320] = array_temp[314];
		array_subgrid[321] = array_temp[321];
		array_subgrid[322] = array_temp[322];
		array_subgrid[323] = array_temp[323];

		// sudoku C
		array_subgrid[324] = array_temp[324];
		array_subgrid[325] = array_temp[325];
		array_subgrid[326] = array_temp[326];
		array_subgrid[327] = array_temp[327];
		array_subgrid[328] = array_temp[328];
		array_subgrid[329] = array_temp[329];
		array_subgrid[330] = array_temp[330];
		array_subgrid[331] = array_temp[331];
		array_subgrid[332] = array_temp[332];
		array_subgrid[333] = array_temp[333];
		array_subgrid[334] = array_temp[334];
		array_subgrid[335] = array_temp[335];
		array_subgrid[336] = array_temp[342];
		array_subgrid[337] = array_temp[343];
		array_subgrid[338] = array_temp[344];
		array_subgrid[339] = array_temp[351];
		array_subgrid[340] = array_temp[352];
		array_subgrid[341] = array_temp[353];
		array_subgrid[342] = array_temp[336];
		array_subgrid[343] = array_temp[337];
		array_subgrid[344] = array_temp[338];
		array_subgrid[345] = array_temp[345];
		array_subgrid[346] = array_temp[346];
		array_subgrid[347] = array_temp[347];
		array_subgrid[348] = array_temp[354];
		array_subgrid[349] = array_temp[355];
		array_subgrid[350] = array_temp[356];
		array_subgrid[351] = array_temp[339];
		array_subgrid[352] = array_temp[340];
		array_subgrid[353] = array_temp[341];
		array_subgrid[354] = array_temp[348];
		array_subgrid[355] = array_temp[349];
		array_subgrid[356] = array_temp[350];
		array_subgrid[357] = array_temp[357];
		array_subgrid[358] = array_temp[358];
		array_subgrid[359] = array_temp[359];
		array_subgrid[360] = array_temp[360];
		array_subgrid[361] = array_temp[361];
		array_subgrid[362] = array_temp[362];
		array_subgrid[363] = array_temp[363];
		array_subgrid[364] = array_temp[364];
		array_subgrid[365] = array_temp[365];
		array_subgrid[366] = array_temp[366];
		array_subgrid[367] = array_temp[367];
		array_subgrid[368] = array_temp[368];

		var checker;
		var indeks_cell = array_subgrid.indexOf(parseInt(nilai_neighbor + 20));

		// console.log('array_subgrid indeks_neighbor = ', array_temp[indeks_neighbor]);
		// console.log('array temp indeks subgrid = ', array_subgrid[indeks_cell]);
		
		array_subgrid[indeks_cell] = nilai_neighbor;
		// console.log('nilai_neighbor = ', nilai_neighbor);
		// console.log('indeks subgrid = ', indeks_cell);
		var start_subgrid = parseInt(indeks_cell) - parseInt(mod(indeks_cell,9));
		// console.log('start subgrid = ', start_subgrid);
		var end_subgrid = parseInt(indeks_cell) + parseInt(8 - parseInt(mod(indeks_cell,9)));
		// console.log('end subgrid = ', end_subgrid);
		var indeks_sama = 0;
		array_subgrid[indeks_cell] = parseInt(array_subgrid[indeks_cell] - 20);

		for (var checker = start_subgrid; checker < end_subgrid; checker ++) {
			if (array_subgrid[indeks_cell] = array_subgrid[checker]){
				if (indeks_cell != checker){
					indeks_sama = checker;
				}
			}
		}
		if (indeks_sama != 0){
				// ada yang sama nilainya dalam subgrid
				// swap
				array_subgrid[indeks_sama] = parseInt(nilai_lama + 20);

					array_temp[0] = array_subgrid[0];
					array_temp[1] = array_subgrid[1];
					array_temp[2] = array_subgrid[2];
					array_temp[9] = array_subgrid[3];
					array_temp[10] = array_subgrid[4];
					array_temp[11] = array_subgrid[5];
					array_temp[18] = array_subgrid[6];
					array_temp[19] = array_subgrid[7];
					array_temp[20] = array_subgrid[8];
					array_temp[3] = array_subgrid[9]; 
					array_temp[4] = array_subgrid[10]; 
					array_temp[5] = array_subgrid[11]; 
					array_temp[12] = array_subgrid[12]; 
					array_temp[13] = array_subgrid[13]; 
					array_temp[14] = array_subgrid[14]; 
					array_temp[21] = array_subgrid[15]; 
					array_temp[22] = array_subgrid[16]; 
					array_temp[23] = array_subgrid[17]; 
					array_temp[6] = array_subgrid[18]; 
					array_temp[7] = array_subgrid[19]; 
					array_temp[8] = array_subgrid[20]; 
					array_temp[15] = array_subgrid[21]; 
					array_temp[16] = array_subgrid[22]; 
					array_temp[17] = array_subgrid[23]; 
					array_temp[24] = array_subgrid[24]; 
					array_temp[25] = array_subgrid[25]; 
					array_temp[26] = array_subgrid[26]; 
					array_temp[27] = array_subgrid[27]; 
					array_temp[28] = array_subgrid[28]; 
					array_temp[29] = array_subgrid[29]; 
					array_temp[36] = array_subgrid[30]; 
					array_temp[37] = array_subgrid[31]; 
					array_temp[38] = array_subgrid[32]; 
					array_temp[45] = array_subgrid[33]; 
					array_temp[46] = array_subgrid[34]; 
					array_temp[47] = array_subgrid[35]; 
					array_temp[30] = array_subgrid[36]; 
					array_temp[31] = array_subgrid[37]; 
					array_temp[32] = array_subgrid[38]; 
					array_temp[39] = array_subgrid[39]; 
					array_temp[40] = array_subgrid[40]; 
					array_temp[41] = array_subgrid[41]; 
					array_temp[48] = array_subgrid[42]; 
					array_temp[49] = array_subgrid[43]; 
					array_temp[50] = array_subgrid[44]; 
					array_temp[33] = array_subgrid[45]; 
					array_temp[34] = array_subgrid[46]; 
					array_temp[35] = array_subgrid[47]; 
					array_temp[42] = array_subgrid[48]; 
					array_temp[43] = array_subgrid[49]; 
					array_temp[44] = array_subgrid[50]; 
					array_temp[51] = array_subgrid[51]; 
					array_temp[52] = array_subgrid[52]; 
					array_temp[53] = array_subgrid[53]; 
					array_temp[54] = array_subgrid[54]; 
					array_temp[55] = array_subgrid[55]; 
					array_temp[56] = array_subgrid[56]; 
					array_temp[63] = array_subgrid[57]; 
					array_temp[64] = array_subgrid[58]; 
					array_temp[65] = array_subgrid[59]; 
					array_temp[72] = array_subgrid[60]; 
					array_temp[73] = array_subgrid[61]; 
					array_temp[74] = array_subgrid[62]; 
					array_temp[57] = array_subgrid[63]; 
					array_temp[58] = array_subgrid[64]; 
					array_temp[59] = array_subgrid[65]; 
					array_temp[66] = array_subgrid[66]; 
					array_temp[67] = array_subgrid[67]; 
					array_temp[68] = array_subgrid[68]; 
					array_temp[75] = array_subgrid[69]; 
					array_temp[76] = array_subgrid[70]; 
					array_temp[77] = array_subgrid[71]; 
					array_temp[60] = array_subgrid[72]; 
					array_temp[61] = array_subgrid[73]; 
					array_temp[62] = array_subgrid[74]; 
					array_temp[69] = array_subgrid[75]; 
					array_temp[70] = array_subgrid[76]; 
					array_temp[71] = array_subgrid[77]; 
					array_temp[78] = array_subgrid[78]; 
					array_temp[79] = array_subgrid[79]; 
					array_temp[80] = array_subgrid[80]; 

					// sudoku B
					array_temp[81] = array_subgrid[81]; 
					array_temp[82] = array_subgrid[82]; 
					array_temp[83] = array_subgrid[83]; 
					array_temp[90] = array_subgrid[84]; 
					array_temp[91] = array_subgrid[85]; 
					array_temp[92] = array_subgrid[86]; 
					array_temp[99] = array_subgrid[87]; 
					array_temp[100] = array_subgrid[88]; 
					array_temp[101] = array_subgrid[89]; 
					array_temp[84] = array_subgrid[90]; 
					array_temp[85] = array_subgrid[91]; 
					array_temp[86] = array_subgrid[92]; 
					array_temp[93] = array_subgrid[93]; 
					array_temp[94] = array_subgrid[94]; 
					array_temp[95] = array_subgrid[95]; 
					array_temp[102] = array_subgrid[96]; 
					array_temp[103] = array_subgrid[97]; 
					array_temp[105] = array_subgrid[98]; 
					array_temp[87] = array_subgrid[99];
					array_temp[88] = array_subgrid[100];
					array_temp[89] = array_subgrid[101];
					array_temp[96] = array_subgrid[102];
					array_temp[97] = array_subgrid[103];
					array_temp[98] = array_subgrid[104];
					array_temp[105] = array_subgrid[105];
					array_temp[106] = array_subgrid[106];
					array_temp[107] = array_subgrid[107];
					array_temp[108] = array_subgrid[108];
					array_temp[109] = array_subgrid[109];
					array_temp[110] = array_subgrid[110];
					array_temp[117] = array_subgrid[111];
					array_temp[118] = array_subgrid[112];
					array_temp[119] = array_subgrid[113];
					array_temp[126] = array_subgrid[114];
					array_temp[127] = array_subgrid[115];
					array_temp[128] = array_subgrid[116];
					array_temp[111] = array_subgrid[117];
					array_temp[112] = array_subgrid[118];
					array_temp[113] = array_subgrid[119];
					array_temp[120] = array_subgrid[120];
					array_temp[121] = array_subgrid[121];
					array_temp[122] = array_subgrid[122];
					array_temp[129] = array_subgrid[123];
					array_temp[130] = array_subgrid[124];
					array_temp[131] = array_subgrid[125];
					array_temp[114] = array_subgrid[126];
					array_temp[115] = array_subgrid[127];
					array_temp[116] = array_subgrid[128];
					array_temp[123] = array_subgrid[129];
					array_temp[124] = array_subgrid[130];
					array_temp[125] = array_subgrid[131];
					array_temp[132] = array_subgrid[132];
					array_temp[133] = array_subgrid[133];
					array_temp[134] = array_subgrid[134];
					array_temp[135] = array_subgrid[135];
					array_temp[136] = array_subgrid[136];
					array_temp[137] = array_subgrid[137];
					array_temp[144] = array_subgrid[138];
					array_temp[145] = array_subgrid[139];
					array_temp[146] = array_subgrid[140];
					array_temp[153] = array_subgrid[141];
					array_temp[154] = array_subgrid[142];
					array_temp[155] = array_subgrid[143];
					array_temp[138] = array_subgrid[144];
					array_temp[139] = array_subgrid[145];
					array_temp[140] = array_subgrid[146];
					array_temp[147] = array_subgrid[147];
					array_temp[148] = array_subgrid[148];
					array_temp[149] = array_subgrid[149];
					array_temp[156] = array_subgrid[150];
					array_temp[157] = array_subgrid[151];
					array_temp[158] = array_subgrid[152];
					array_temp[141] = array_subgrid[153];
					array_temp[142] = array_subgrid[154];
					array_temp[143] = array_subgrid[155];
					array_temp[150] = array_subgrid[156];
					array_temp[151] = array_subgrid[157];
					array_temp[152] = array_subgrid[158];
					array_temp[159] = array_subgrid[159];
					array_temp[160] = array_subgrid[160];
					array_temp[161] = array_subgrid[161];

					// sudoku D
					array_temp[162] = array_subgrid[162];
					array_temp[163] = array_subgrid[163];
					array_temp[164] = array_subgrid[164];
					array_temp[171] = array_subgrid[165];
					array_temp[172] = array_subgrid[166];
					array_temp[173] = array_subgrid[167];
					array_temp[180] = array_subgrid[168];
					array_temp[181] = array_subgrid[169];
					array_temp[182] = array_subgrid[170];
					array_temp[165] = array_subgrid[171];
					array_temp[166] = array_subgrid[172];
					array_temp[167] = array_subgrid[173];
					array_temp[174] = array_subgrid[174];
					array_temp[175] = array_subgrid[175];
					array_temp[176] = array_subgrid[176];
					array_temp[183] = array_subgrid[177];
					array_temp[184] = array_subgrid[178];
					array_temp[185] = array_subgrid[179];
					array_temp[168] = array_subgrid[180];
					array_temp[169] = array_subgrid[181];
					array_temp[170] = array_subgrid[182];
					array_temp[177] = array_subgrid[183];
					array_temp[178] = array_subgrid[184];
					array_temp[179] = array_subgrid[185];
					array_temp[186] = array_subgrid[186];
					array_temp[187] = array_subgrid[187];
					array_temp[188] = array_subgrid[188];
					array_temp[189] = array_subgrid[189];
					array_temp[190] = array_subgrid[190];
					array_temp[191] = array_subgrid[191];
					array_temp[198] = array_subgrid[192];
					array_temp[199] = array_subgrid[193];
					array_temp[200] = array_subgrid[194];
					array_temp[207] = array_subgrid[195];
					array_temp[208] = array_subgrid[196];
					array_temp[209] = array_subgrid[197];
					array_temp[192] = array_subgrid[198];
					array_temp[193] = array_subgrid[199];
					array_temp[194] = array_subgrid[200];
					array_temp[201] = array_subgrid[201];
					array_temp[202] = array_subgrid[202];
					array_temp[203] = array_subgrid[203];
					array_temp[210] = array_subgrid[204];
					array_temp[211] = array_subgrid[205];
					array_temp[212] = array_subgrid[206];
					array_temp[195] = array_subgrid[207];
					array_temp[196] = array_subgrid[208];
					array_temp[197] = array_subgrid[209];
					array_temp[204] = array_subgrid[210];
					array_temp[205] = array_subgrid[211];
					array_temp[206] = array_subgrid[212];
					array_temp[213] = array_subgrid[213];
					array_temp[214] = array_subgrid[214];
					array_temp[215] = array_subgrid[215];
					array_temp[216] = array_subgrid[216];
					array_temp[217] = array_subgrid[217];
					array_temp[218] = array_subgrid[218];
					array_temp[225] = array_subgrid[219];
					array_temp[226] = array_subgrid[220];
					array_temp[227] = array_subgrid[221];
					array_temp[234] = array_subgrid[222];
					array_temp[235] = array_subgrid[223];
					array_temp[236] = array_subgrid[224];
					array_temp[219] = array_subgrid[225];
					array_temp[220] = array_subgrid[226];
					array_temp[221] = array_subgrid[227];
					array_temp[228] = array_subgrid[228];
					array_temp[229] = array_subgrid[229];
					array_temp[230] = array_subgrid[230];
					array_temp[237] = array_subgrid[231];
					array_temp[238] = array_subgrid[232];
					array_temp[239] = array_subgrid[233];
					array_temp[222] = array_subgrid[234];
					array_temp[223] = array_subgrid[235];
					array_temp[224] = array_subgrid[236];
					array_temp[231] = array_subgrid[237];
					array_temp[232] = array_subgrid[238];
					array_temp[233] = array_subgrid[239];
					array_temp[240] = array_subgrid[240];
					array_temp[241] = array_subgrid[241];
					array_temp[242] = array_subgrid[242];
					
					//sudoku E
					array_temp[243] = array_subgrid[243];
					array_temp[244] = array_subgrid[244];
					array_temp[245] = array_subgrid[245];
					array_temp[252] = array_subgrid[246];
					array_temp[253] = array_subgrid[247];
					array_temp[254] = array_subgrid[248];
					array_temp[261] = array_subgrid[249];
					array_temp[262] = array_subgrid[250];
					array_temp[263] = array_subgrid[251];
					array_temp[246] = array_subgrid[252];
					array_temp[247] = array_subgrid[253];
					array_temp[248] = array_subgrid[254];
					array_temp[255] = array_subgrid[255];
					array_temp[256] = array_subgrid[256];
					array_temp[257] = array_subgrid[257];
					array_temp[264] = array_subgrid[258];
					array_temp[265] = array_subgrid[259];
					array_temp[266] = array_subgrid[260];
					array_temp[249] = array_subgrid[261];
					array_temp[250] = array_subgrid[262];
					array_temp[251] = array_subgrid[263];
					array_temp[258] = array_subgrid[264];
					array_temp[259] = array_subgrid[265];
					array_temp[260] = array_subgrid[266];
					array_temp[267] = array_subgrid[267];
					array_temp[268] = array_subgrid[268];
					array_temp[269] = array_subgrid[269];
					array_temp[270] = array_subgrid[270];
					array_temp[271] = array_subgrid[271];
					array_temp[272] = array_subgrid[272];
					array_temp[279] = array_subgrid[273];
					array_temp[280] = array_subgrid[274];
					array_temp[281] = array_subgrid[275];
					array_temp[288] = array_subgrid[276];
					array_temp[289] = array_subgrid[277];
					array_temp[290] = array_subgrid[278];
					array_temp[273] = array_subgrid[279];
					array_temp[274] = array_subgrid[280];
					array_temp[275] = array_subgrid[281];
					array_temp[282] = array_subgrid[282];
					array_temp[283] = array_subgrid[283];
					array_temp[284] = array_subgrid[284];
					array_temp[291] = array_subgrid[285];
					array_temp[292] = array_subgrid[286];
					array_temp[293] = array_subgrid[287];
					array_temp[276] = array_subgrid[288];
					array_temp[277] = array_subgrid[289];
					array_temp[278] = array_subgrid[290];
					array_temp[285] = array_subgrid[291];
					array_temp[286] = array_subgrid[292];
					array_temp[287] = array_subgrid[293];
					array_temp[294] = array_subgrid[294];
					array_temp[295] = array_subgrid[295];
					array_temp[296] = array_subgrid[296];
					array_temp[297] = array_subgrid[297];
					array_temp[298] = array_subgrid[298];
					array_temp[299] = array_subgrid[299];
					array_temp[306] = array_subgrid[300];
					array_temp[307] = array_subgrid[301];
					array_temp[308] = array_subgrid[302];
					array_temp[315] = array_subgrid[303];
					array_temp[316] = array_subgrid[304];
					array_temp[317] = array_subgrid[305];
					array_temp[300] = array_subgrid[306];
					array_temp[301] = array_subgrid[307];
					array_temp[302] = array_subgrid[308];
					array_temp[309] = array_subgrid[309];
					array_temp[310] = array_subgrid[310];
					array_temp[311] = array_subgrid[311];
					array_temp[318] = array_subgrid[312];
					array_temp[319] = array_subgrid[313];
					array_temp[320] = array_subgrid[314];
					array_temp[303] = array_subgrid[315];
					array_temp[304] = array_subgrid[316];
					array_temp[305] = array_subgrid[317];
					array_temp[312] = array_subgrid[318];
					array_temp[313] = array_subgrid[319];
					array_temp[314] = array_subgrid[320];
					array_temp[321] = array_subgrid[321];
					array_temp[322] = array_subgrid[322];
					array_temp[323] = array_subgrid[323];

					// sudoku C
					array_temp[324] = array_subgrid[324];
					array_temp[325] = array_subgrid[325];
					array_temp[326] = array_subgrid[326];
					array_temp[327] = array_subgrid[327];
					array_temp[328] = array_subgrid[328];
					array_temp[329] = array_subgrid[329];
					array_temp[330] = array_subgrid[330];
					array_temp[331] = array_subgrid[331];
					array_temp[332] = array_subgrid[332];
					array_temp[333] = array_subgrid[333];
					array_temp[334] = array_subgrid[334];
					array_temp[335] = array_subgrid[335];
					array_temp[342] = array_subgrid[336];
					array_temp[343] = array_subgrid[337];
					array_temp[344] = array_subgrid[338];
					array_temp[351] = array_subgrid[339];
					array_temp[352] = array_subgrid[340];
					array_temp[353] = array_subgrid[341];
					array_temp[336] = array_subgrid[342];
					array_temp[337] = array_subgrid[343];
					array_temp[338] = array_subgrid[344];
					array_temp[345] = array_subgrid[345];
					array_temp[346] = array_subgrid[346];
					array_temp[347] = array_subgrid[347];
					array_temp[354] = array_subgrid[348];
					array_temp[355] = array_subgrid[349];
					array_temp[356] = array_subgrid[350];
					array_temp[339] = array_subgrid[351];
					array_temp[340] = array_subgrid[352];
					array_temp[341] = array_subgrid[353];
					array_temp[348] = array_subgrid[354];
					array_temp[349] = array_subgrid[355];
					array_temp[350] = array_subgrid[356];
					array_temp[357] = array_subgrid[357];
					array_temp[358] = array_subgrid[358];
					array_temp[359] = array_subgrid[359];
					array_temp[360] = array_subgrid[360];
					array_temp[361] = array_subgrid[361];
					array_temp[362] = array_subgrid[362];
					array_temp[363] = array_subgrid[363];
					array_temp[364] = array_subgrid[364];
					array_temp[365] = array_subgrid[365];
					array_temp[366] = array_subgrid[366];
					array_temp[367] = array_subgrid[367];
					array_temp[368] = array_subgrid[368];
				
				// console.log('indeks sama = ', indeks_sama);
				// console.log('nilai lama = ', nilai_lama);

				indeks_normal = array_temp.indexOf(parseInt(nilai_neighbor + 20));
		}

		if(callback){callback(indeks_normal);}
	}

function scoutBee(array_foodSource, callback){
	var scout_bee = Math.round(0.1 * employed_bee);
	generateFoodSource (getData("soal"), scout_bee, function(rslt){
		checkMissingNumber(rslt, function(rslt2){
			hitungFitness(rslt2, function(rslt3){
				checkMissingNumber(array_foodSource, function(rslt4){
					hitungFitness(rslt4, function(rslt5){
						// copy fitness food source untuk pemeriksaan
						for(i = 0; i < employed_bee; i++){
							console.log('foodsource ke - ', i);
							debug.showModeledData(array_foodSource[i]);
							console.log('fitnessnya = ', rslt5[i]);
						} 

						var sort_fitness = rslt5.slice();
						sort_fitness.sort();
						// console.log('rslt 5 = ', rslt5);
						// console.log('sort fitness = ', sort_fitness);

						var foodsource_iterasibaru = [];
						// console.log('array_foodSource = ', array_foodSource);

						// isi foodsource iterasi baru dengan foodsource fitness terbaik
						var indeks_foodsource;
						for (var i = parseInt(scout_bee - 1); i < employed_bee; i++) {
							indeks_foodsource = rslt5.indexOf(sort_fitness[i]);
							// console.log('indeks_foodsource = ', indeks_foodsource);
							// console.log('rslt 5 = ', rslt5);
							// console.log('sort_fitness[i] = ', sort_fitness[i]);

							foodsource_iterasibaru.push(array_foodSource[indeks_foodsource]);
							// console.log('foodsource_iterasibaru = ', foodsource_iterasibaru);
						}

						var fitness_sort = [];
						// console.log('rslt 3 ', rslt3);
						for (var i = 0; i < scout_bee; i ++) {
							fitness_sort.push(rslt3[i]);
							fitness_sort.push(sort_fitness[i]);
						}

						fitness_sort.sort();
						// console.log('fitness sort ', fitness_sort);
						// yang terbaik yang pertama
						fitness_sort.reverse();
						// console.log('fitness sort reverse ', fitness_sort);
						
						var indeks_scoutbee;
						for (var i = 0; i < scout_bee; i++) {
							if(parseInt(foodsource_iterasibaru.length) < employed_bee){
								indeks_foodsource = rslt5.indexOf(fitness_sort[i]);
								if (indeks_foodsource >= 0){
									foodsource_iterasibaru.push(array_foodSource[indeks_foodsource]);
								}else{
									indeks_scoutbee = rslt3.indexOf(fitness_sort[i]);
									foodsource_iterasibaru.push(rslt[indeks_scoutbee]);
								}
							} 
						}

						saveData('foodSource', foodsource_iterasibaru);
						// console.log('iterasi baru = ', foodsource_iterasibaru);
						if(callback) { callback(foodsource_iterasibaru);}
					});
				});
			});
		});
	});
}

/* HELPERS */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n == excluded) n++;
    return n;
}

function mod(n, m) {
	var remain = n % m;
	return Math.floor(remain >= 0 ? remain : remain + m);
}
/* IO */
function saveData(key, data){
	window.localStorage.setItem(key, JSON.stringify(data));
}
function getData(key){
	return JSON.parse(window.localStorage.getItem(key));
}
function clearData(key){
	window.localStorage.removeItem(key);
}

/* DEBUG */
var debug = new function(){
	/*
		ARRAY STRUCTURE
		-----------------
		
		|  1|  2|  3|  4|  5|  6|  7|  8|  9|           | 82| 83| 84| 85| 86| 87| 88| 89| 90|
		| 10| 11| 12| 13| 14| 15| 16| 17| 18|           | 91| 92| 93| 94| 95| 96| 97| 98| 99|
		| 19| 20| 21| 22| 23| 24| 25| 26| 27|           |100|101|102|103|104|105|106|107|108|
		| 28| 29| 30| 31| 32| 33| 34| 35| 36|           |109|110|111|112|113|114|115|116|117|
		| 37| 38| 39| 40| 41| 42| 43| 44| 45|           |118|119|120|121|122|123|124|125|126|
		| 46| 47| 48| 49| 50| 51| 52| 53| 54|           |127|128|129|130|131|132|133|134|135|
		| 55| 56| 57| 58| 59| 60| 61| 62| 63|325|326|327|136|137|138|139|140|141|142|143|144|
		| 64| 65| 66| 67| 68| 69| 70| 71| 72|328|329|330|145|146|147|148|149|150|151|152|153|
		| 73| 74| 75| 76| 77| 78| 79| 80| 81|331|332|333|154|155|156|157|158|159|160|161|162|
		                        |334|335|336|337|338|339|340|341|342|                        
		                        |343|344|345|346|347|348|349|350|351|                        
		                        |352|353|354|355|356|357|358|359|360|                        
		|163|164|165|166|167|168|169|170|171|361|362|363|244|245|246|247|248|249|250|251|252|
		|172|173|174|175|176|177|178|179|180|364|365|366|253|254|255|256|257|258|259|260|261|
		|181|182|183|184|185|186|187|188|189|367|368|369|262|263|264|265|266|267|268|269|270|
		|190|191|192|193|194|195|196|197|198|           |271|272|273|274|275|276|277|278|279|
		|199|200|201|202|203|204|205|206|207|           |280|281|282|283|284|285|286|287|288|
		|208|209|210|211|212|213|214|215|216|           |289|290|291|292|293|294|295|296|297|
		|217|218|219|220|221|222|223|224|225|           |298|299|300|301|302|303|304|305|306|
		|226|227|228|229|230|231|232|233|234|           |307|308|309|310|311|312|313|314|315|
		|235|236|237|238|239|240|241|242|243|           |316|317|318|319|320|321|322|323|324|
	*/

	this.showIndexCell = function(){
		console.log('|  1|  2|  3|  4|  5|  6|  7|  8|  9|           | 82| 83| 84| 85| 86| 87| 88| 89| 90|');
		console.log('| 10| 11| 12| 13| 14| 15| 16| 17| 18|           | 91| 92| 93| 94| 95| 96| 97| 98| 99|');
		console.log('| 19| 20| 21| 22| 23| 24| 25| 26| 27|           |100|101|102|103|104|105|106|107|108|');
		console.log('| 28| 29| 30| 31| 32| 33| 34| 35| 36|           |109|110|111|112|113|114|115|116|117|');
		console.log('| 37| 38| 39| 40| 41| 42| 43| 44| 45|           |118|119|120|121|122|123|124|125|126|');
		console.log('| 46| 47| 48| 49| 50| 51| 52| 53| 54|           |127|128|129|130|131|132|133|134|135|');
		console.log('| 55| 56| 57| 58| 59| 60| 61| 62| 63|325|326|327|136|137|138|139|140|141|142|143|144|');
		console.log('| 64| 65| 66| 67| 68| 69| 70| 71| 72|328|329|330|145|146|147|148|149|150|151|152|153|');
		console.log('| 73| 74| 75| 76| 77| 78| 79| 80| 81|331|332|333|154|155|156|157|158|159|160|161|162|');
		console.log('                        |334|335|336|337|338|339|340|341|342|                        ');
		console.log('                        |343|344|345|346|347|348|349|350|351|                        ');
		console.log('                        |352|353|354|355|356|357|358|359|360|                        ');
		console.log('|163|164|165|166|167|168|169|170|171|361|362|363|244|245|246|247|248|249|250|251|252|');
		console.log('|172|173|174|175|176|177|178|179|180|364|365|366|253|254|255|256|257|258|259|260|261|');
		console.log('|181|182|183|184|185|186|187|188|189|367|368|369|262|263|264|265|266|267|268|269|270|');
		console.log('|190|191|192|193|194|195|196|197|198|           |271|272|273|274|275|276|277|278|279|');
		console.log('|199|200|201|202|203|204|205|206|207|           |280|281|282|283|284|285|286|287|288|');
		console.log('|208|209|210|211|212|213|214|215|216|           |289|290|291|292|293|294|295|296|297|');
		console.log('|217|218|219|220|221|222|223|224|225|           |298|299|300|301|302|303|304|305|306|');
		console.log('|226|227|228|229|230|231|232|233|234|           |307|308|309|310|311|312|313|314|315|');
		console.log('|235|236|237|238|239|240|241|242|243|           |316|317|318|319|320|321|322|323|324|');
	}

	this.showModeledData = function(array){
		console.log('|' + array[0] + '|' + array[1] + '|' + array[2] + '|' + array[3] + '|' + array[4] + '|' + array[5] + '|' + array[6] + '|' + array[7] + '|' + array[8] + '|     |' + array[81] + '|' + array[82] + '|' + array[83] + '|' + array[84] + '|' + array[85] + '|' + array[86] + '|' + array[87] + '|' + array[88] + '|' + array[89] + '|');
		console.log('|' + array[9] + '|' + array[10] + '|' + array[11] + '|' + array[12] + '|' + array[13] + '|' + array[14] + '|' + array[15] + '|' + array[16] + '|' + array[17] + '|     |' + array[90] + '|' + array[91] + '|' + array[92] + '|' + array[93] + '|' + array[94] + '|' + array[95] + '|' + array[96] + '|' + array[97] + '|' + array[98] + '|');
		console.log('|' + array[18] + '|' + array[19] + '|' + array[20] + '|' + array[21] + '|' + array[22] + '|' + array[23] + '|' + array[24] + '|' + array[25] + '|' + array[26] + '|     |' + array[99] + '|' + array[100] + '|' + array[101] + '|' + array[102] + '|' + array[103] + '|' + array[104] + '|' + array[105] + '|' + array[106] + '|' + array[107] + '|');
		console.log('|' + array[27] + '|' + array[28] + '|' + array[29] + '|' + array[30] + '|' + array[31] + '|' + array[32] + '|' + array[33] + '|' + array[34] + '|' + array[35] + '|     |' + array[108] + '|' + array[109] + '|' + array[110] + '|' + array[111] + '|' + array[112] + '|' + array[113] + '|' + array[114] + '|' + array[115] + '|' + array[116] + '|');
		console.log('|' + array[36] + '|' + array[37] + '|' + array[38] + '|' + array[39] + '|' + array[40] + '|' + array[41] + '|' + array[42] + '|' + array[43] + '|' + array[44] + '|     |' + array[117] + '|' + array[118] + '|' + array[119] + '|' + array[120] + '|' + array[121] + '|' + array[122] + '|' + array[123] + '|' + array[124] + '|' + array[125] + '|');
		console.log('|' + array[45] + '|' + array[46] + '|' + array[47] + '|' + array[48] + '|' + array[49] + '|' + array[50] + '|' + array[51] + '|' + array[52] + '|' + array[53] + '|     |' + array[126] + '|' + array[127] + '|' + array[128] + '|' + array[129] + '|' + array[130] + '|' + array[131] + '|' + array[132] + '|' + array[133] + '|' + array[134] + '|');
		console.log('|' + array[54] + '|' + array[55] + '|' + array[56] + '|' + array[57] + '|' + array[58] + '|' + array[59] + '|' + array[60] + '|' + array[61] + '|' + array[62] + '|' + array[324] + '|' + array[325] + '|' + array[326] + '|' + array[135] + '|' + array[136] + '|' + array[137] + '|' + array[138] + '|' + array[139] + '|' + array[140] + '|' + array[141] + '|' + array[142] + '|' + array[143] + '|');
		console.log('|' + array[63] + '|' + array[64] + '|' + array[65] + '|' + array[66] + '|' + array[67] + '|' + array[68] + '|' + array[69] + '|' + array[70] + '|' + array[71] + '|' + array[327] + '|' + array[328] + '|' + array[329] + '|' + array[144] + '|' + array[145] + '|' + array[146] + '|' + array[147] + '|' + array[148] + '|' + array[149] + '|' + array[150] + '|' + array[151] + '|' + array[152] + '|');
		console.log('|' + array[72] + '|' + array[73] + '|' + array[74] + '|' + array[75] + '|' + array[76] + '|' + array[77] + '|' + array[78] + '|' + array[79] + '|' + array[80] + '|' + array[330] + '|' + array[331] + '|' + array[332] + '|' + array[153] + '|' + array[154] + '|' + array[155] + '|' + array[156] + '|' + array[157] + '|' + array[158] + '|' + array[159] + '|' + array[160] + '|' + array[161] + '|');
		console.log('            |' + array[333] + '|' + array[334] + '|' + array[335] + '|' + array[336] + '|' + array[337] + '|' + array[338] + '|' + array[339] + '|' + array[340] + '|' + array[341] + '|                     ');
		console.log('            |' + array[342] + '|' + array[343] + '|' + array[344] + '|' + array[345] + '|' + array[346] + '|' + array[347] + '|' + array[348] + '|' + array[349] + '|' + array[350] + '|                     ');
		console.log('            |' + array[351] + '|' + array[352] + '|' + array[353] + '|' + array[354] + '|' + array[355] + '|' + array[356] + '|' + array[357] + '|' + array[358] + '|' + array[359] + '|                     ');
		console.log('|' + array[162] + '|' + array[163] + '|' + array[164] + '|' + array[165] + '|' + array[166] + '|' + array[167] + '|' + array[168] + '|' + array[169] + '|' + array[170] + '|' + array[360] + '|' + array[361] + '|' + array[362] + '|' + array[243] + '|' + array[244] + '|' + array[245] + '|' + array[246] + '|' + array[247] + '|' + array[248] + '|' + array[249] + '|' + array[250] + '|' + array[251] + '|');
		console.log('|' + array[171] + '|' + array[172] + '|' + array[173] + '|' + array[174] + '|' + array[175] + '|' + array[176] + '|' + array[177] + '|' + array[178] + '|' + array[179] + '|' + array[363] + '|' + array[364] + '|' + array[365] + '|' + array[252] + '|' + array[253] + '|' + array[254] + '|' + array[255] + '|' + array[256] + '|' + array[257] + '|' + array[258] + '|' + array[259] + '|' + array[260] + '|');
		console.log('|' + array[180] + '|' + array[181] + '|' + array[182] + '|' + array[183] + '|' + array[184] + '|' + array[185] + '|' + array[186] + '|' + array[187] + '|' + array[188] + '|' + array[366] + '|' + array[367] + '|' + array[368] + '|' + array[261] + '|' + array[262] + '|' + array[263] + '|' + array[264] + '|' + array[265] + '|' + array[266] + '|' + array[267] + '|' + array[268] + '|' + array[269] + '|');
		console.log('|' + array[189] + '|' + array[190] + '|' + array[191] + '|' + array[192] + '|' + array[193] + '|' + array[194] + '|' + array[195] + '|' + array[196] + '|' + array[197] + '|     |' + array[270] + '|' + array[271] + '|' + array[272] + '|' + array[273] + '|' + array[274] + '|' + array[275] + '|' + array[276] + '|' + array[277] + '|' + array[278] + '|');
		console.log('|' + array[198] + '|' + array[199] + '|' + array[200] + '|' + array[201] + '|' + array[202] + '|' + array[203] + '|' + array[204] + '|' + array[205] + '|' + array[206] + '|     |' + array[279] + '|' + array[280] + '|' + array[281] + '|' + array[282] + '|' + array[283] + '|' + array[284] + '|' + array[285] + '|' + array[286] + '|' + array[287] + '|');
		console.log('|' + array[207] + '|' + array[208] + '|' + array[209] + '|' + array[210] + '|' + array[211] + '|' + array[212] + '|' + array[213] + '|' + array[214] + '|' + array[215] + '|     |' + array[288] + '|' + array[289] + '|' + array[290] + '|' + array[291] + '|' + array[292] + '|' + array[293] + '|' + array[294] + '|' + array[295] + '|' + array[296] + '|');
		console.log('|' + array[216] + '|' + array[217] + '|' + array[218] + '|' + array[219] + '|' + array[220] + '|' + array[221] + '|' + array[222] + '|' + array[223] + '|' + array[224] + '|     |' + array[297] + '|' + array[298] + '|' + array[299] + '|' + array[300] + '|' + array[301] + '|' + array[302] + '|' + array[303] + '|' + array[304] + '|' + array[305] + '|');
		console.log('|' + array[225] + '|' + array[226] + '|' + array[227] + '|' + array[228] + '|' + array[229] + '|' + array[230] + '|' + array[231] + '|' + array[232] + '|' + array[233] + '|     |' + array[306] + '|' + array[307] + '|' + array[308] + '|' + array[309] + '|' + array[310] + '|' + array[311] + '|' + array[312] + '|' + array[313] + '|' + array[314] + '|');
		console.log('|' + array[234] + '|' + array[235] + '|' + array[236] + '|' + array[237] + '|' + array[238] + '|' + array[239] + '|' + array[240] + '|' + array[241] + '|' + array[242] + '|     |' + array[315] + '|' + array[316] + '|' + array[317] + '|' + array[318] + '|' + array[319] + '|' + array[320] + '|' + array[321] + '|' + array[322] + '|' + array[323] + '|');
	}
}