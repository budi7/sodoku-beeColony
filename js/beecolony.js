// var declaration
var iterasi, bees_onl, bees_emp;


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

/* INTERFACE  HANDLER */
var processInput = function(){
	/* step 1 */
	// 1.1 get soal
	getSoal(function(array_soal){
		// 1.2 generate foodsource
		generateFoodSource(array_soal, function(){
			// 1.3 check missing number
			// array foodsource telah disimpan (method generateFoodSource) dalam local storage dengan key index : foodsource
			// untuk proses berikutnya yg menggunakan data foodsource dapat memanggil data denganmenggunakan method getData('foodSource')
			checkMissingNumber(getData('foodSource'));
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

	// modul return
	if(callback) { callback(array); }
}

/* BEE COLONY CORE */
var generateFoodSource = function(array_soal, callback){
	// init
	var foodSource = [];
	
	// on emp bee count
	for (var j = 0; j < bees_emp ; j++) {
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
	var error_ctr = 0;
	var data_debug = {};

	// for loop : tiap array foodsource
	Object.keys(array_foodSource).forEach(function(key){
		console.log('ini array foodsource ke-' + (parseInt(key) + 1 ));
		debug.showModeledData(array_foodSource[key]);


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
						console.log("jumlah error baris ke-" + baris + ' = ' + err_ctr);
					}

					// kolom
					
					for (var kolom = sudokuStartIndeks; kolom < sudokuStartIndeks + 9; kolom++) {
						var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
						for (var nomor = kolom; nomor < kolom + 73; nomor = nomor + 9){
							flag[array_foodSource[key][nomor]] = true;
						}

						console.log(flag);

						var err_ctr = countFlag(flag);
						console.log("jumlah error kolom ke-" + kolom + ' = ' + err_ctr);
					}
					
				}else{
					// sudoku C
					
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
					}

					for (var kolom = 0; kolom < 9; kolom++) {
						var flag = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
						for (var nomor = kolom; nomor < kolom + 73; nomor = nomor + 9){
							flag[arraySudokuC[nomor]] = true;
						}

						console.log(flag);

						var err_ctr = countFlag(flag);
						console.log("jumlah error kolom ke-" + kolom + ' = ' + err_ctr);
					}


				}

			}

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
	if(callback) { callback(); }
}


/* HELPERS */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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