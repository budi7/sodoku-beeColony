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
			//console.log(getData('foodSource'));
			debug.showModeledData(getData('foodSource')[0]);
			console.log(getData('foodSource')[0]);
		});
	});

	// step 2
}

/* BEE COLONY CORE */
var getSoal = function(callback){
	var array = [];

	// get soal
	var tabel = $(document).find("#soal"); // variabel pointer

	array[0] =  tabel.find("#a-1-1").find('input').val() ? parseInt(tabel.find("#a-1-1").find('input').val()) : null;
	array[1] =  tabel.find("#a-1-2").find('input').val() ? parseInt(tabel.find("#a-1-2").find('input').val()) : null;


	// save data to local storage
	saveData('soal', array);

	// modul return
	if(callback) { callback(array); }
}
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
		console.log('|' + array[0] + '|' + array[1] + '|' + array[2] + '|' + array[3] + '|' + array[4] + '|' + array[5] + '|' + array[6] + '|' + array[7] + '|' + array[8] + '|                                                                 |' + array[81] + '|' + array[82] + '|' array[83] + '|' + array[84] + '|' + array[85] + '|' + array[86] + '|' + array[87] + '|' + array[88] + '|' + array[89] + '|');
		console.log('|' + array[9] + '|' + array[10] + '|' + array[11] + '|' + array[12] + '|' + array[13] + '|' + array[14] + '|' + array[15] + '|' + array[16] + '|' + array[17] + '|                                                         |' + array[90] + '|' + array[91] + '|' + array[92] + '|' + array[93] + '|' + array[94] + '|' + array[95] + '|' + array[96] + '|' + array[97] + '|' + array[98] + '|');
		console.log('|' + array[18] + '|' + array[19] + '|' + array[20] + '|' + array[21] + '|' + array[22] + '|' + array[23] + '|' + array[24] + '|' + array[25] + '|' + array[26] + '|                                                        |' + array[99] + '|' + array[100] + '|' + array[101] + '|' + array[102] + '|' + array[103] + '|' + array[104] + '|' + array[105] + '|' + array[106] + '|' + array[107] + '|');
		console.log('|' + array[27] + '|' + array[28] + '|' + array[29] + '|' + array[30] + '|' + array[31] + '|' + array[32] + '|' + array[33] + '|' + array[34] + '|' + array[35] + '|                                                        |' + array[108] + '|' + array[109] + '|' + array[110] + '|' + array[111] + '|' + array[112] + '|' + array[113] + '|' + array[114] + '|' + array[115] + '|' + array[116] + '|');
		console.log('|' + array[36] + '|' + array[37] + '|' + array[38] + '|' + array[39] + '|' + array[40] + '|' + array[41] + '|' + array[42] + '|' + array[43] + '|' + array[44] + '|                                                        |' + array[117] + '|' + array[118] + '|' + array[119] + '|' + array[120] + '|' + array[121] + '|' + array[122] + '|' + array[123] + '|' + array[124] + '|' + array[125] + '|');
		console.log('|' + array[45] + '|' + array[46] + '|' + array[47] + '|' + array[48] + '|' + array[49] + '|' + array[50] + '|' + array[51] + '|' + array[52] + '|' + array[53] + '|                                                        |' + array[126] + '|' + array[127] + '|' + array[128] + '|' + array[129] + '|' + array[130] + '|' + array[131] + '|' + array[132] + '|' + array[133] + '|' + array[134] + '|');
		console.log('|' + array[54] + '|' + array[55] + '|' + array[56] + '|' + array[57] + '|' + array[58] + '|' + array[59] + '|' + array[60] + '|' + array[61] + '|' + array[62] + '|' + array[324] + '|' + array[325] + '|' + array[326] + '|' + array[135] + '|' + array[136] + '|' + array[137] + '|' + array[138] + '|' + array[139] + '|' + array[140] + '|' + array[141] + '|' + array[142] + '|' + array[143] + '|');
		console.log('|' + array[63] + '|' + array[64] + '|' + array[65] + '|' + array[66] + '|' + array[67] + '|' + array[68] + '|' + array[69] + '|' + array[70] + '|' + array[71] + '|' + array[327] + '|' + array[328] + '|' + array[329] + '|' + array[144] + '|' + array[145] + '|' + array[146] + '|' + array[147] + '|' + array[148] + '|' + array[149] + '|' + array[150] + '|' + array[151] + '|' + array[152] + '|');
		console.log('|' + array[72] + '|' + array[73] + '|' + array[74] + '|' + array[75] + '|' + array[76] + '|' + array[77] + '|' + array[78] + '|' + array[79] + '|' + array[80] + '|' + array[330] + '|' + array[331] + '|' + array[332] + '|' + array[153] + '|' + array[154] + '|' + array[155] + '|' + array[156] + '|' + array[157] + '|' + array[158] + '|' + array[159] + '|' + array[160] + '|' + array[161] + '|');
		console.log('                                                                                                                  |' + array[333] + '|' + array[334] + '|' + array[335] + '|' + array[336] + '|' + array[337] + '|' + array[338] + '|' + array[339] + '|' + array[340] + '|' + array[341] + '|                     ');
		console.log('                                                                                                                  |' + array[342] + '|' + array[343] + '|' + array[344] + '|' + array[345] + '|' + array[346] + '|' + array[347] + '|' + array[348] + '|' + array[349] + '|' + array[350] + '|                     ');
		console.log('                                                                                                                  |' + array[351] + '|' + array[352] + '|' + array[353] + '|' + array[354] + '|' + array[355] + '|' + array[356] + '|' + array[357] + '|' + array[358] + '|' + array[359] + '|                     ');
		console.log('|' + array[162] + '|' + array[163] + '|' + array[164] + '|' + array[165] + '|' + array[166] + '|' + array[167] + '|' + array[168] + '|' + array[169] + '|' + array[170] + '|' + array[360] + '|' + array[361] + '|' + array[362] + '|' + array[243] + '|' + array[244] + '|' + array[245] + '|' + array[246] + '|' + array[247] + '|' + array[248] + '|' + array[249] + '|' + array[250] + '|' + array[251] + '|');
		console.log('|' + array[171] + '|' + array[172] + '|' + array[173] + '|' + array[174] + '|' + array[175] + '|' + array[176] + '|' + array[177] + '|' + array[178] + '|' + array[179] + '|' + array[363] + '|' + array[364] + '|' + array[365] + '|' + array[252] + '|' + array[253] + '|' + array[254] + '|' + array[255] + '|' + array[256] + '|' + array[257] + '|' + array[258] + '|' + array[259] + '|' + array[260] + '|');
		console.log('|' + array[180] + '|' + array[181] + '|' + array[182] + '|' + array[183] + '|' + array[184] + '|' + array[185] + '|' + array[186] + '|' + array[187] + '|' + array[188] + '|' + array[366] + '|' + array[367] + '|' + array[368] + '|' + array[261] + '|' + array[262] + '|' + array[263] + '|' + array[264] + '|' + array[265] + '|' + array[266] + '|' + array[267] + '|' + array[268] + '|' + array[269] + '|');
		console.log('|' + array[189] + '|' + array[190] + '|' + array[191] + '|' + array[192] + '|' + array[193] + '|' + array[194] + '|' + array[195] + '|' + array[196] + '|' + array[197] + '|                                                        |' + array[270] + '|' + array[271] + '|' + array[272] + '|' + array[273] + '|' + array[274] + '|' + array[275] + '|' + array[276] + '|' + array[277] + '|' + array[278] + '|');
		console.log('|' + array[198] + '|' + array[199] + '|' + array[200] + '|' + array[201] + '|' + array[202] + '|' + array[203] + '|' + array[204] + '|' + array[205] + '|' + array[206] + '|                                                        |' + array[279] + '|' + array[280] + '|' + array[281] + '|' + array[282] + '|' + array[283] + '|' + array[284] + '|' + array[285] + '|' + array[286] + '|' + array[287] + '|');
		console.log('|' + array[207] + '|' + array[208] + '|' + array[209] + '|' + array[210] + '|' + array[211] + '|' + array[212] + '|' + array[213] + '|' + array[214] + '|' + array[215] + '|                                                        |' + array[288] + '|' + array[289] + '|' + array[290] + '|' + array[291] + '|' + array[292] + '|' + array[293] + '|' + array[294] + '|' + array[295] + '|' + array[296] + '|');
		console.log('|' + array[216] + '|' + array[217] + '|' + array[218] + '|' + array[219] + '|' + array[220] + '|' + array[221] + '|' + array[222] + '|' + array[223] + '|' + array[224] + '|                                                        |' + array[297] + '|' + array[298] + '|' + array[299] + '|' + array[300] + '|' + array[301] + '|' + array[302] + '|' + array[303] + '|' + array[304] + '|' + array[305] + '|');
		console.log('|' + array[225] + '|' + array[226] + '|' + array[227] + '|' + array[228] + '|' + array[229] + '|' + array[230] + '|' + array[231] + '|' + array[232] + '|' + array[233] + '|                                                        |' + array[306] + '|' + array[307] + '|' + array[308] + '|' + array[309] + '|' + array[310] + '|' + array[311] + '|' + array[312] + '|' + array[313] + '|' + array[314] + '|');
		console.log('|' + array[234] + '|' + array[235] + '|' + array[236] + '|' + array[237] + '|' + array[238] + '|' + array[239] + '|' + array[240] + '|' + array[241] + '|' + array[242] + '|                                                        |' + array[315] + '|' + array[316] + '|' + array[317] + '|' + array[318] + '|' + array[319] + '|' + array[320] + '|' + array[321] + '|' + array[322] + '|' + array[323] + '|');
	}
}