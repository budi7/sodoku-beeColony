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
			
			/*
			var nilai = 9;
			var fungsi = function(with_param){
				return with_param;
			}

			console.log(nilai); // 9
			console.log(fungsi('hai')) //hai 
			*/

			checkMissingNumber(getData('foodSource'), function(error_foodSource){
				hitungFitness(error_foodSource, function(fitness){
					totalFitness(fitness, function(total_fitness){
						waggleDance(fitness, total_fitness, function(prob_Onlooker){
							sumOnlooker(prob_Onlooker, function(jumlah_Onlooker){
								console.log('1');
								neighborhoodSearch(jumlah_Onlooker);
								console.log('jumlah_Onlooker = ' + jumlah_Onlooker);
							});

						});
					console.log('fitnessnya = ' + fitness + ', total fitnessnya = ' + total_fitness);
					});
					
				});
			});
		});
	});

	// step 2
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
	console.log('array null ' + array_null);
	saveData('kosong', array_null);

	// modul return
	if(callback) { callback(array, array_null); }
}

/* BEE COLONY CORE */
var generateFoodSource = function(array_soal, jumlahlebah, callback){
	// init
	var foodSource = [];
	
	// on emp bee count
	for (var j = 0; j < jumlahlebah ; j++) {
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
	if(callback) { callback(); }
}

var checkMissingNumber = function(array_foodSource, callback){
	// rules
	var sudokuStartIndeks = 0;
	var total_error;
	var error_foodSource = [];
	var data_debug = {};

	// for loop : tiap array foodsource
	Object.keys(array_foodSource).forEach(function(key){
		console.log('ini array foodsource ke-' + (parseInt(key) + 1 ));
		debug.showModeledData(array_foodSource[key]);

		total_error = 0;

		for (var sudokuStartIndeks = 0; sudokuStartIndeks < 325 ; sudokuStartIndeks = sudokuStartIndeks + 81) {
			data_debug[key] = {};

			// baris indeks starts with sudokuStartIndeks + 9 (0, 9, 18, 27, ... 72)
			if (sudokuStartIndeks < 324){
					// sudoku A, B, D, E
					for (var baris = sudokuStartIndeks; baris < sudokuStartIndeks + 73; baris = baris + 9 ){

						var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};

						for (var nomor = baris; nomor < baris + 9 ; nomor++) {
							// flag data
							flag[array_foodSource[key][nomor]] = true;
						}

						console.log(flag);

						var err_ctr = countFlag(flag);
						console.log("jumlah error baris start indeks " + baris + ' = ' + err_ctr);
						total_error = total_error + err_ctr;
						console.log("total error = " + total_error);
					}

					// kolom
					
					for (var kolom = sudokuStartIndeks; kolom < sudokuStartIndeks + 9; kolom++) {
						var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
						for (var nomor = kolom; nomor < kolom + 73; nomor = nomor + 9){
							flag[array_foodSource[key][nomor]] = true;
						}

						console.log(flag);

						var err_ctr = countFlag(flag);
						console.log("jumlah error kolom start indeks " + kolom + ' = ' + err_ctr);
						total_error = total_error + err_ctr;
						console.log("total error = " + total_error);
					}
					
				}else{
					// sudoku C, new indeks
					
					var arraySudokuC = [];

					arraySudokuC[0] = array_foodSource[key][60];
					arraySudokuC[1] = array_foodSource[key][61];
					arraySudokuC[2] = array_foodSource[key][62];
					arraySudokuC[3] = array_foodSource[key][324];
					arraySudokuC[4] = array_foodSource[key][325];
					arraySudokuC[5] = array_foodSource[key][326];
					arraySudokuC[6] = array_foodSource[key][135];
					arraySudokuC[7] = array_foodSource[key][136];
					arraySudokuC[8] = array_foodSource[key][137];

					arraySudokuC[9] = array_foodSource[key][69];
					arraySudokuC[10] = array_foodSource[key][70];
					arraySudokuC[11] = array_foodSource[key][71];
					arraySudokuC[12] = array_foodSource[key][327];
					arraySudokuC[13] = array_foodSource[key][328];
					arraySudokuC[14] = array_foodSource[key][329];
					arraySudokuC[15] = array_foodSource[key][144];
					arraySudokuC[16] = array_foodSource[key][145];
					arraySudokuC[17] = array_foodSource[key][146];

					arraySudokuC[18] = array_foodSource[key][78];
					arraySudokuC[19] = array_foodSource[key][79];
					arraySudokuC[20] = array_foodSource[key][80];
					arraySudokuC[21] = array_foodSource[key][330];
					arraySudokuC[22] = array_foodSource[key][331];
					arraySudokuC[23] = array_foodSource[key][332];
					arraySudokuC[24] = array_foodSource[key][153];
					arraySudokuC[25] = array_foodSource[key][154];
					arraySudokuC[26] = array_foodSource[key][155];

					arraySudokuC[27] = array_foodSource[key][333];
					arraySudokuC[28] = array_foodSource[key][334];
					arraySudokuC[29] = array_foodSource[key][335];
					arraySudokuC[30] = array_foodSource[key][336];
					arraySudokuC[31] = array_foodSource[key][337];
					arraySudokuC[32] = array_foodSource[key][338];
					arraySudokuC[33] = array_foodSource[key][339];
					arraySudokuC[34] = array_foodSource[key][340];
					arraySudokuC[35] = array_foodSource[key][341];
					
					arraySudokuC[36] = array_foodSource[key][342];
					arraySudokuC[37] = array_foodSource[key][343];
					arraySudokuC[38] = array_foodSource[key][344];
					arraySudokuC[39] = array_foodSource[key][345];
					arraySudokuC[40] = array_foodSource[key][346];
					arraySudokuC[41] = array_foodSource[key][347];
					arraySudokuC[42] = array_foodSource[key][348];
					arraySudokuC[43] = array_foodSource[key][349];
					arraySudokuC[44] = array_foodSource[key][350];
					
					arraySudokuC[45] = array_foodSource[key][351];
					arraySudokuC[46] = array_foodSource[key][352];
					arraySudokuC[47] = array_foodSource[key][353];
					arraySudokuC[48] = array_foodSource[key][354];
					arraySudokuC[49] = array_foodSource[key][355];
					arraySudokuC[50] = array_foodSource[key][356];
					arraySudokuC[51] = array_foodSource[key][357];
					arraySudokuC[52] = array_foodSource[key][358];
					arraySudokuC[53] = array_foodSource[key][359];
					
					arraySudokuC[54] = array_foodSource[key][168];
					arraySudokuC[55] = array_foodSource[key][169];
					arraySudokuC[56] = array_foodSource[key][170];
					arraySudokuC[57] = array_foodSource[key][360];
					arraySudokuC[58] = array_foodSource[key][361];
					arraySudokuC[59] = array_foodSource[key][362];
					arraySudokuC[60] = array_foodSource[key][243];
					arraySudokuC[61] = array_foodSource[key][244];
					arraySudokuC[62] = array_foodSource[key][245];
					
					arraySudokuC[63] = array_foodSource[key][177];
					arraySudokuC[64] = array_foodSource[key][178];
					arraySudokuC[65] = array_foodSource[key][179];
					arraySudokuC[66] = array_foodSource[key][363];
					arraySudokuC[67] = array_foodSource[key][364];
					arraySudokuC[68] = array_foodSource[key][365];
					arraySudokuC[69] = array_foodSource[key][252];
					arraySudokuC[70] = array_foodSource[key][253];
					arraySudokuC[71] = array_foodSource[key][254];
					
					arraySudokuC[72] = array_foodSource[key][186];
					arraySudokuC[73] = array_foodSource[key][187];
					arraySudokuC[74] = array_foodSource[key][188];
					arraySudokuC[75] = array_foodSource[key][366];
					arraySudokuC[76] = array_foodSource[key][367];
					arraySudokuC[77] = array_foodSource[key][368];
					arraySudokuC[78] = array_foodSource[key][261];
					arraySudokuC[79] = array_foodSource[key][262];
					arraySudokuC[80] = array_foodSource[key][263];


					for (var baris = 0; baris < 73; baris = baris + 9 ){

						var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};

						for (var nomor = baris; nomor < baris + 9 ; nomor++) {
							// flag data
							flag[arraySudokuC[nomor]] = true;
						}

						console.log(flag);

						var err_ctr = countFlag(flag);
						console.log("jumlah error baris ke-" + baris + ' = ' + err_ctr);
						total_error = total_error + err_ctr;
						console.log("total error = " + total_error);
					}

					for (var kolom = 0; kolom < 9; kolom++) {
						var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
						for (var nomor = kolom; nomor < kolom + 73; nomor = nomor + 9){
							flag[arraySudokuC[nomor]] = true;
						}

						console.log(flag);

						var err_ctr = countFlag(flag);
						console.log("jumlah error kolom ke-" + kolom + ' = ' + err_ctr);
						total_error = total_error + err_ctr;
						console.log("total error = " + total_error);
					}
				}

			}

			console.log('Total error foodsource ke-' + (parseInt(key) +1 ) + ' = ' + total_error);
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
		console.log('fitness food source ke-' + (parseInt(key) + 1) + ' = ' + fitness[key]);
	});
	
		// modul return
		if(callback) { callback(fitness); }
	}

	function totalFitness(fitness, callback){
		var total_fitness = 0;
		Object.keys(fitness).forEach(function(key){
			total_fitness = total_fitness + fitness[key];
		});
		console.log('total fitness = ' + total_fitness);

		if(callback) { callback(total_fitness);}
	}	

	function waggleDance(fitness, total_fitness, callback){
		var prob_Onlooker = [];
		Object.keys(fitness).forEach(function(key){
			var prob = fitness[key] / total_fitness;
			prob_Onlooker.push(prob);
			console.log('Prob food source ke-' + (parseInt(key) + 1) + ' = ' + prob_Onlooker[key]);
		});
		if(callback) { callback(prob_Onlooker);}
	};

	function sumOnlooker(prob_Onlooker, callback){
		var jumlah_Onlooker = [];
		Object.keys(prob_Onlooker).forEach(function(key){
			var jumlah = Math.round(prob_Onlooker[key] * onlooker_bee);
			jumlah_Onlooker.push(jumlah);
			console.log('Jumlah onlooker food source ke-' + (parseInt(key) + 1) + ' = ' + jumlah_Onlooker[key]);
		});

		if(callback) { callback(jumlah_Onlooker);}
	}

	function neighborhoodSearch(jumlah_Onlooker, callback){
		var j;
		var temp = [];
		var neighbor;
		var array_foodSource = getData('foodSource');
		var array_null = getData('kosong');
		var fitnessLama;
		var fitnessBaru;
		console.log(array_foodSource);
		console.log(array_null);
		var teta = Math.random() < 0.5 ? -1 : 1;
		Object.keys(jumlah_Onlooker).forEach(function(key){
			if (jumlah_Onlooker[key] > 0){
				temp = array_foodSource[key];
				for (var i = jumlah_Onlooker[key]; i > 0; i--) {
					var k;
					if (key == (employed_bee - 1)){
						k = getRandomInt(0, (employed_bee-2));
					}else if(key < (employed_bee-1) && key > 0){
						k = randomExcluded(0, (employed_bee-1), key);
					}else{
						k = getRandomInt(1, (employed_bee-1));
					}
					console.log('nilai k untuk key ' + key + ' = ' + k);
					
					var indeksNull = getRandomInt(0, array_null.length);
					console.log('Jumlah kotak kosong = ' + array_null.length);
					console.log('Indeks Null = ' + indeksNull);
					j = array_null[indeksNull];
					console.log('Indeks yang dikerjakan = ' + j);
					
					neighbor = Math.ceil(array_foodSource[key][j] + ((teta) * Math.abs(array_foodSource[key][j] - array_foodSource[k][j])));
					if (neighbor < 1 || neighbor > 9){
						neighbor = (neighbor % 9) + 1;
					}
					temp[j] = neighbor;
					console.log('neighbor = ' + temp[j]);

			// check new fitness
			checkMissingNumber(array_foodSource[key], function(error_foodSource){
				hitungFitness(error_foodSource);
			fitnessLama = error_foodSource;
			});
			
			checkMissingNumber(temp, function(error_foodSource){
				hitungFitness(error_foodSource);
			fitnessBaru = error_foodSource;
			});

			console.log('fitness lama = ' + fitnessLama);
			console.log('fitness baru = ' + fitnessBaru);

			if (fitnessBaru >= fitnessLama){
				return true;
				//cekSubgrid(temp, j);
			}
			}


		}else{
				console.log('gagal');
			}
	})
	}

	function cekSubgrid(array_foodSource, indeksCell){
		var checker;
		var startSubgrid = indeksCell - indeksCell % 9;
		var endSubgrid = indeksCell + (8 - indeksCell % 9);
		var indeksSama = 0;

		var arraySubgrid = [];
		arraySubgrid[0] = array_foodSource[key][0];
		arraySubgrid[1] = array_foodSource[key][1];
		arraySubgrid[2] = array_foodSource[key][2];
		arraySubgrid[3] = array_foodSource[key][9];
		arraySubgrid[4] = array_foodSource[key][10];
		arraySubgrid[5] = array_foodSource[key][11];
		arraySubgrid[6] = array_foodSource[key][18];
		arraySubgrid[7] = array_foodSource[key][19];
		arraySubgrid[8] = array_foodSource[key][20];
		arraySubgrid[9] = array_foodSource[key][3]; 
		arraySubgrid[10] = array_foodSource[key][4]; 
		arraySubgrid[11] = array_foodSource[key][5]; 
		arraySubgrid[12] = array_foodSource[key][12]; 
		arraySubgrid[13] = array_foodSource[key][13]; 
		arraySubgrid[14] = array_foodSource[key][14]; 
		arraySubgrid[15] = array_foodSource[key][21]; 
		arraySubgrid[16] = array_foodSource[key][22]; 
		arraySubgrid[17] = array_foodSource[key][23]; 
		arraySubgrid[18] = array_foodSource[key][6]; 
		arraySubgrid[19] = array_foodSource[key][7]; 
		arraySubgrid[20] = array_foodSource[key][8]; 
		arraySubgrid[21] = array_foodSource[key][15]; 
		arraySubgrid[22] = array_foodSource[key][16]; 
		arraySubgrid[23] = array_foodSource[key][17]; 
		arraySubgrid[24] = array_foodSource[key][24]; 
		arraySubgrid[25] = array_foodSource[key][25]; 
		arraySubgrid[26] = array_foodSource[key][26]; 
		arraySubgrid[27] = array_foodSource[key][27]; 
		arraySubgrid[28] = array_foodSource[key][28]; 
		arraySubgrid[29] = array_foodSource[key][29]; 
		arraySubgrid[30] = array_foodSource[key][36]; 
		arraySubgrid[31] = array_foodSource[key][37]; 
		arraySubgrid[32] = array_foodSource[key][38]; 
		arraySubgrid[33] = array_foodSource[key][45]; 
		arraySubgrid[34] = array_foodSource[key][46]; 
		arraySubgrid[35] = array_foodSource[key][47]; 
		arraySubgrid[36] = array_foodSource[key][30]; 
		arraySubgrid[37] = array_foodSource[key][31]; 
		arraySubgrid[38] = array_foodSource[key][32]; 
		arraySubgrid[39] = array_foodSource[key][39]; 
		arraySubgrid[40] = array_foodSource[key][40]; 
		arraySubgrid[41] = array_foodSource[key][41]; 
		arraySubgrid[42] = array_foodSource[key][48]; 
		arraySubgrid[43] = array_foodSource[key][49]; 
		arraySubgrid[44] = array_foodSource[key][50]; 
		arraySubgrid[45] = array_foodSource[key][33]; 
		arraySubgrid[46] = array_foodSource[key][34]; 
		arraySubgrid[47] = array_foodSource[key][35]; 
		arraySubgrid[48] = array_foodSource[key][42]; 
		arraySubgrid[49] = array_foodSource[key][43]; 
		arraySubgrid[50] = array_foodSource[key][44]; 
		arraySubgrid[51] = array_foodSource[key][51]; 
		arraySubgrid[52] = array_foodSource[key][52]; 
		arraySubgrid[53] = array_foodSource[key][53]; 
		arraySubgrid[54] = array_foodSource[key][54]; 
		arraySubgrid[55] = array_foodSource[key][55]; 
		arraySubgrid[56] = array_foodSource[key][56]; 
		arraySubgrid[57] = array_foodSource[key][63]; 
		arraySubgrid[58] = array_foodSource[key][64]; 
		arraySubgrid[59] = array_foodSource[key][65]; 
		arraySubgrid[60] = array_foodSource[key][72]; 
		arraySubgrid[61] = array_foodSource[key][73]; 
		arraySubgrid[62] = array_foodSource[key][74]; 
		arraySubgrid[63] = array_foodSource[key][57]; 
		arraySubgrid[64] = array_foodSource[key][58]; 
		arraySubgrid[65] = array_foodSource[key][59]; 
		arraySubgrid[66] = array_foodSource[key][66]; 
		arraySubgrid[67] = array_foodSource[key][67]; 
		arraySubgrid[68] = array_foodSource[key][68]; 
		arraySubgrid[69] = array_foodSource[key][75]; 
		arraySubgrid[70] = array_foodSource[key][76]; 
		arraySubgrid[71] = array_foodSource[key][77]; 
		arraySubgrid[72] = array_foodSource[key][60]; 
		arraySubgrid[73] = array_foodSource[key][61]; 
		arraySubgrid[74] = array_foodSource[key][62]; 
		arraySubgrid[75] = array_foodSource[key][69]; 
		arraySubgrid[76] = array_foodSource[key][70]; 
		arraySubgrid[77] = array_foodSource[key][71]; 
		arraySubgrid[78] = array_foodSource[key][78]; 
		arraySubgrid[79] = array_foodSource[key][79]; 
		arraySubgrid[80] = array_foodSource[key][80]; 

		// sudoku B
		arraySubgrid[81] = array_foodSource[key][81]; 
		arraySubgrid[82] = array_foodSource[key][82]; 
		arraySubgrid[83] = array_foodSource[key][83]; 
		arraySubgrid[84] = array_foodSource[key][90]; 
		arraySubgrid[85] = array_foodSource[key][91]; 
		arraySubgrid[86] = array_foodSource[key][92]; 
		arraySubgrid[87] = array_foodSource[key][99]; 
		arraySubgrid[88] = array_foodSource[key][100]; 
		arraySubgrid[89] = array_foodSource[key][101]; 
		arraySubgrid[90] = array_foodSource[key][84]; 
		arraySubgrid[91] = array_foodSource[key][85]; 
		arraySubgrid[92] = array_foodSource[key][86]; 
		arraySubgrid[93] = array_foodSource[key][93]; 
		arraySubgrid[94] = array_foodSource[key][94]; 
		arraySubgrid[95] = array_foodSource[key][95]; 
		arraySubgrid[96] = array_foodSource[key][102]; 
		arraySubgrid[97] = array_foodSource[key][103]; 
		arraySubgrid[98] = array_foodSource[key][105]; 
		arraySubgrid[99] = array_foodSource[key][87];
		arraySubgrid[100] = array_foodSource[key][88];
		arraySubgrid[101] = array_foodSource[key][89];
		arraySubgrid[102] = array_foodSource[key][96];
		arraySubgrid[103] = array_foodSource[key][97];
		arraySubgrid[104] = array_foodSource[key][98];
		arraySubgrid[105] = array_foodSource[key][105];
		arraySubgrid[106] = array_foodSource[key][106];
		arraySubgrid[107] = array_foodSource[key][107];
		arraySubgrid[108] = array_foodSource[key][108];
		arraySubgrid[109] = array_foodSource[key][109];
		arraySubgrid[110] = array_foodSource[key][110];
		arraySubgrid[111] = array_foodSource[key][117];
		arraySubgrid[112] = array_foodSource[key][118];
		arraySubgrid[113] = array_foodSource[key][119];
		arraySubgrid[114] = array_foodSource[key][126];
		arraySubgrid[115] = array_foodSource[key][127];
		arraySubgrid[116] = array_foodSource[key][128];
		arraySubgrid[117] = array_foodSource[key][111];
		arraySubgrid[118] = array_foodSource[key][112];
		arraySubgrid[119] = array_foodSource[key][113];
		arraySubgrid[120] = array_foodSource[key][120];
		arraySubgrid[121] = array_foodSource[key][121];
		arraySubgrid[122] = array_foodSource[key][122];
		arraySubgrid[123] = array_foodSource[key][129];
		arraySubgrid[124] = array_foodSource[key][130];
		arraySubgrid[125] = array_foodSource[key][131];
		arraySubgrid[126] = array_foodSource[key][114];
		arraySubgrid[127] = array_foodSource[key][115];
		arraySubgrid[128] = array_foodSource[key][116];
		arraySubgrid[129] = array_foodSource[key][123];
		arraySubgrid[130] = array_foodSource[key][124];
		arraySubgrid[131] = array_foodSource[key][125];
		arraySubgrid[132] = array_foodSource[key][132];
		arraySubgrid[133] = array_foodSource[key][133];
		arraySubgrid[134] = array_foodSource[key][134];
		arraySubgrid[135] = array_foodSource[key][135];
		arraySubgrid[136] = array_foodSource[key][136];
		arraySubgrid[137] = array_foodSource[key][137];
		arraySubgrid[138] = array_foodSource[key][144];
		arraySubgrid[139] = array_foodSource[key][145];
		arraySubgrid[140] = array_foodSource[key][146];
		arraySubgrid[141] = array_foodSource[key][153];
		arraySubgrid[142] = array_foodSource[key][154];
		arraySubgrid[143] = array_foodSource[key][155];
		arraySubgrid[144] = array_foodSource[key][138];
		arraySubgrid[145] = array_foodSource[key][139];
		arraySubgrid[146] = array_foodSource[key][140];
		arraySubgrid[147] = array_foodSource[key][147];
		arraySubgrid[148] = array_foodSource[key][148];
		arraySubgrid[149] = array_foodSource[key][149];
		arraySubgrid[150] = array_foodSource[key][156];
		arraySubgrid[151] = array_foodSource[key][157];
		arraySubgrid[152] = array_foodSource[key][158];
		arraySubgrid[153] = array_foodSource[key][141];
		arraySubgrid[154] = array_foodSource[key][142];
		arraySubgrid[155] = array_foodSource[key][143];
		arraySubgrid[156] = array_foodSource[key][150];
		arraySubgrid[157] = array_foodSource[key][151];
		arraySubgrid[158] = array_foodSource[key][152];
		arraySubgrid[159] = array_foodSource[key][159];
		arraySubgrid[160] = array_foodSource[key][160];
		arraySubgrid[161] = array_foodSource[key][161];

		// sudoku D
		arraySubgrid[162] = array_foodSource[key][162];
		arraySubgrid[163] = array_foodSource[key][163];
		arraySubgrid[164] = array_foodSource[key][164];
		arraySubgrid[165] = array_foodSource[key][171];
		arraySubgrid[166] = array_foodSource[key][172];
		arraySubgrid[167] = array_foodSource[key][173];
		arraySubgrid[168] = array_foodSource[key][180];
		arraySubgrid[169] = array_foodSource[key][181];
		arraySubgrid[170] = array_foodSource[key][182];
		arraySubgrid[171] = array_foodSource[key][165];
		arraySubgrid[172] = array_foodSource[key][166];
		arraySubgrid[173] = array_foodSource[key][167];
		arraySubgrid[174] = array_foodSource[key][174];
		arraySubgrid[175] = array_foodSource[key][175];
		arraySubgrid[176] = array_foodSource[key][176];
		arraySubgrid[177] = array_foodSource[key][183];
		arraySubgrid[178] = array_foodSource[key][184];
		arraySubgrid[179] = array_foodSource[key][185];
		arraySubgrid[180] = array_foodSource[key][168];
		arraySubgrid[181] = array_foodSource[key][169];
		arraySubgrid[182] = array_foodSource[key][170];
		arraySubgrid[183] = array_foodSource[key][177];
		arraySubgrid[184] = array_foodSource[key][178];
		arraySubgrid[185] = array_foodSource[key][179];
		arraySubgrid[186] = array_foodSource[key][186];
		arraySubgrid[187] = array_foodSource[key][187];
		arraySubgrid[188] = array_foodSource[key][188];
		arraySubgrid[189] = array_foodSource[key][189];
		arraySubgrid[190] = array_foodSource[key][190];
		arraySubgrid[191] = array_foodSource[key][191];
		arraySubgrid[192] = array_foodSource[key][198];
		arraySubgrid[193] = array_foodSource[key][199];
		arraySubgrid[194] = array_foodSource[key][200];
		arraySubgrid[195] = array_foodSource[key][207];
		arraySubgrid[196] = array_foodSource[key][208];
		arraySubgrid[197] = array_foodSource[key][209];
		arraySubgrid[198] = array_foodSource[key][192];
		arraySubgrid[199] = array_foodSource[key][193];
		arraySubgrid[200] = array_foodSource[key][194];
		arraySubgrid[201] = array_foodSource[key][201];
		arraySubgrid[202] = array_foodSource[key][202];
		arraySubgrid[203] = array_foodSource[key][203];
		arraySubgrid[204] = array_foodSource[key][210];
		arraySubgrid[205] = array_foodSource[key][211];
		arraySubgrid[206] = array_foodSource[key][212];
		arraySubgrid[207] = array_foodSource[key][195];
		arraySubgrid[208] = array_foodSource[key][196];
		arraySubgrid[209] = array_foodSource[key][197];
		arraySubgrid[210] = array_foodSource[key][204];
		arraySubgrid[211] = array_foodSource[key][205];
		arraySubgrid[212] = array_foodSource[key][206];
		arraySubgrid[213] = array_foodSource[key][213];
		arraySubgrid[214] = array_foodSource[key][214];
		arraySubgrid[215] = array_foodSource[key][215];
		arraySubgrid[216] = array_foodSource[key][216];
		arraySubgrid[217] = array_foodSource[key][217];
		arraySubgrid[218] = array_foodSource[key][218];
		arraySubgrid[219] = array_foodSource[key][225];
		arraySubgrid[220] = array_foodSource[key][226];
		arraySubgrid[221] = array_foodSource[key][227];
		arraySubgrid[222] = array_foodSource[key][234];
		arraySubgrid[223] = array_foodSource[key][235];
		arraySubgrid[224] = array_foodSource[key][236];
		arraySubgrid[225] = array_foodSource[key][219];
		arraySubgrid[226] = array_foodSource[key][220];
		arraySubgrid[227] = array_foodSource[key][221];
		arraySubgrid[228] = array_foodSource[key][228];
		arraySubgrid[229] = array_foodSource[key][229];
		arraySubgrid[230] = array_foodSource[key][230];
		arraySubgrid[231] = array_foodSource[key][237];
		arraySubgrid[232] = array_foodSource[key][238];
		arraySubgrid[233] = array_foodSource[key][239];
		arraySubgrid[234] = array_foodSource[key][222];
		arraySubgrid[235] = array_foodSource[key][223];
		arraySubgrid[236] = array_foodSource[key][224];
		arraySubgrid[237] = array_foodSource[key][231];
		arraySubgrid[238] = array_foodSource[key][232];
		arraySubgrid[239] = array_foodSource[key][233];
		arraySubgrid[240] = array_foodSource[key][240];
		arraySubgrid[241] = array_foodSource[key][241];
		arraySubgrid[242] = array_foodSource[key][242];
		
		//sudoku E
		arraySubgrid[243] = array_foodSource[key][243];
		arraySubgrid[244] = array_foodSource[key][244];
		arraySubgrid[245] = array_foodSource[key][245];
		arraySubgrid[246] = array_foodSource[key][252];
		arraySubgrid[247] = array_foodSource[key][253];
		arraySubgrid[248] = array_foodSource[key][254];
		arraySubgrid[249] = array_foodSource[key][261];
		arraySubgrid[250] = array_foodSource[key][262];
		arraySubgrid[251] = array_foodSource[key][263];
		arraySubgrid[252] = array_foodSource[key][246];
		arraySubgrid[253] = array_foodSource[key][247];
		arraySubgrid[254] = array_foodSource[key][248];
		arraySubgrid[255] = array_foodSource[key][255];
		arraySubgrid[256] = array_foodSource[key][256];
		arraySubgrid[257] = array_foodSource[key][257];
		arraySubgrid[258] = array_foodSource[key][264];
		arraySubgrid[259] = array_foodSource[key][265];
		arraySubgrid[260] = array_foodSource[key][266];
		arraySubgrid[261] = array_foodSource[key][249];
		arraySubgrid[262] = array_foodSource[key][250];
		arraySubgrid[263] = array_foodSource[key][251];
		arraySubgrid[264] = array_foodSource[key][258];
		arraySubgrid[265] = array_foodSource[key][259];
		arraySubgrid[266] = array_foodSource[key][260];
		arraySubgrid[267] = array_foodSource[key][267];
		arraySubgrid[268] = array_foodSource[key][268];
		arraySubgrid[269] = array_foodSource[key][269];
		arraySubgrid[270] = array_foodSource[key][270];
		arraySubgrid[271] = array_foodSource[key][271];
		arraySubgrid[272] = array_foodSource[key][272];
		arraySubgrid[273] = array_foodSource[key][279];
		arraySubgrid[274] = array_foodSource[key][280];
		arraySubgrid[275] = array_foodSource[key][281];
		arraySubgrid[276] = array_foodSource[key][288];
		arraySubgrid[277] = array_foodSource[key][289];
		arraySubgrid[278] = array_foodSource[key][290];
		arraySubgrid[279] = array_foodSource[key][273];
		arraySubgrid[280] = array_foodSource[key][274];
		arraySubgrid[281] = array_foodSource[key][275];
		arraySubgrid[282] = array_foodSource[key][282];
		arraySubgrid[283] = array_foodSource[key][283];
		arraySubgrid[284] = array_foodSource[key][284];
		arraySubgrid[285] = array_foodSource[key][291];
		arraySubgrid[286] = array_foodSource[key][292];
		arraySubgrid[287] = array_foodSource[key][293];
		arraySubgrid[288] = array_foodSource[key][276];
		arraySubgrid[289] = array_foodSource[key][277];
		arraySubgrid[290] = array_foodSource[key][278];
		arraySubgrid[291] = array_foodSource[key][285];
		arraySubgrid[292] = array_foodSource[key][286];
		arraySubgrid[293] = array_foodSource[key][287];
		arraySubgrid[294] = array_foodSource[key][294];
		arraySubgrid[295] = array_foodSource[key][295];
		arraySubgrid[296] = array_foodSource[key][296];
		arraySubgrid[297] = array_foodSource[key][297];
		arraySubgrid[298] = array_foodSource[key][298];
		arraySubgrid[299] = array_foodSource[key][299];
		arraySubgrid[300] = array_foodSource[key][306];
		arraySubgrid[301] = array_foodSource[key][307];
		arraySubgrid[302] = array_foodSource[key][308];
		arraySubgrid[303] = array_foodSource[key][315];
		arraySubgrid[304] = array_foodSource[key][316];
		arraySubgrid[305] = array_foodSource[key][317];
		arraySubgrid[306] = array_foodSource[key][300];
		arraySubgrid[307] = array_foodSource[key][301];
		arraySubgrid[308] = array_foodSource[key][302];
		arraySubgrid[309] = array_foodSource[key][309];
		arraySubgrid[310] = array_foodSource[key][310];
		arraySubgrid[311] = array_foodSource[key][311];
		arraySubgrid[312] = array_foodSource[key][318];
		arraySubgrid[313] = array_foodSource[key][319];
		arraySubgrid[314] = array_foodSource[key][320];
		arraySubgrid[315] = array_foodSource[key][303];
		arraySubgrid[316] = array_foodSource[key][304];
		arraySubgrid[317] = array_foodSource[key][305];
		arraySubgrid[318] = array_foodSource[key][312];
		arraySubgrid[319] = array_foodSource[key][313];
		arraySubgrid[320] = array_foodSource[key][314];
		arraySubgrid[321] = array_foodSource[key][321];
		arraySubgrid[322] = array_foodSource[key][322];
		arraySubgrid[323] = array_foodSource[key][323];

		// sudoku C
		arraySubgrid[324] = array_foodSource[key][324];
		arraySubgrid[325] = array_foodSource[key][325];
		arraySubgrid[326] = array_foodSource[key][326];
		arraySubgrid[327] = array_foodSource[key][327];
		arraySubgrid[328] = array_foodSource[key][328];
		arraySubgrid[329] = array_foodSource[key][329];
		arraySubgrid[330] = array_foodSource[key][330];
		arraySubgrid[331] = array_foodSource[key][331];
		arraySubgrid[332] = array_foodSource[key][332];
		arraySubgrid[333] = array_foodSource[key][333];
		arraySubgrid[334] = array_foodSource[key][334];
		arraySubgrid[335] = array_foodSource[key][335];
		arraySubgrid[336] = array_foodSource[key][342];
		arraySubgrid[337] = array_foodSource[key][343];
		arraySubgrid[338] = array_foodSource[key][344];
		arraySubgrid[339] = array_foodSource[key][351];
		arraySubgrid[340] = array_foodSource[key][352];
		arraySubgrid[341] = array_foodSource[key][353];
		arraySubgrid[342] = array_foodSource[key][336];
		arraySubgrid[343] = array_foodSource[key][337];
		arraySubgrid[344] = array_foodSource[key][338];
		arraySubgrid[345] = array_foodSource[key][345];
		arraySubgrid[346] = array_foodSource[key][346];
		arraySubgrid[347] = array_foodSource[key][347];
		arraySubgrid[348] = array_foodSource[key][354];
		arraySubgrid[349] = array_foodSource[key][355];
		arraySubgrid[350] = array_foodSource[key][356];
		arraySubgrid[351] = array_foodSource[key][339];
		arraySubgrid[352] = array_foodSource[key][340];
		arraySubgrid[353] = array_foodSource[key][341];
		arraySubgrid[354] = array_foodSource[key][348];
		arraySubgrid[355] = array_foodSource[key][349];
		arraySubgrid[356] = array_foodSource[key][350];
		arraySubgrid[357] = array_foodSource[key][357];
		arraySubgrid[358] = array_foodSource[key][358];
		arraySubgrid[359] = array_foodSource[key][359];
		arraySubgrid[360] = array_foodSource[key][360];
		arraySubgrid[361] = array_foodSource[key][361];
		arraySubgrid[362] = array_foodSource[key][362];
		arraySubgrid[363] = array_foodSource[key][363];
		arraySubgrid[364] = array_foodSource[key][364];
		arraySubgrid[365] = array_foodSource[key][365];
		arraySubgrid[366] = array_foodSource[key][366];
		arraySubgrid[367] = array_foodSource[key][367];
		arraySubgrid[368] = array_foodSource[key][368];

		for (var checker = startSubgrid; checker < endSubgrid; checker ++) {
			if (arraySubgrid[indeksCell] = arraySubgrid[checker]){
				if (indeksCell != checker){
					indeksSama = checker;
				}
			}
			if (indeksSama != 0){
				// ada yang sama nilainya dalam subgrid
				// swap
				var temp = array_foodSource[key][j];
				array_foodSource[key][j] = v[key][j];
				v[key][j] = temp;
			}else{
				// langsung replace
				array_foodSource[key][j] = v[key][j];
			}
		}
	}

/*function scoutBee(array_foodSource, callback){
	var scout_bee = 0.1 * employed_bee;
	generateFoodSource (array_soal, scout_Bee);
	hitungFitness();
	if (fitness_scout > fitness_lama){
		array_foodSource = array_scout [];
	}
}*/

/* HELPERS */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n == excluded) n++;
    return n;
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