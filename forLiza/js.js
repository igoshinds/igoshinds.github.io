const hearts = document.querySelectorAll('.heart');
const needed = [116,170,224,278,332,172,228,284,340,122,177,232,287,342,288,234,180,126,181,236,291,346,128,129,130,131,186,241,240,296,351,350,349,348,239,133,188,243,298,353,354,355,356,357,302,247,192,137,136,135,134,139,194,249,304,359,250,251,252,197,142,307,362,144,199,254,309,364,365,366,367,312,257,256,255,149,204,259,314,369,260,206,152,316,372,374,320,266,212,158,214,270,326,382,321,322,323,324,325,577,521,520,519,573,628,683,739,795,851,907,523,524,525,581,636,691,745,799,853];
let flag = false;
let button = document.querySelector('.start');

function check_need_heart(position, array){
	for (let i = 0; i < array.length; i++){
		if (array[i] === position){
			return true;
		}
	}
	return false;
}

button.addEventListener('click', function(){
	flag = true;
})

for (let i = 0; i < hearts.length; i++){
	hearts[i].addEventListener('mousemove', function(){
		if (check_need_heart(i, needed) && (flag)) {
			hearts[i].style = "background: url(heart_2.png) center center no-repeat; background-size: cover;";
		}
		
	})
}



// 116
// 170
// 224
// 278
// 332
// 172
// 228
// 284
// 340
// 122
// 177
// 232
// 287
// 342
// 288
// 234
// 180
// 126
// 181
// 236
// 291
// 346
// 128
// 129
// 130
// 131
// 186
// 241
// 240
// 296
// 351
// 350
// 349
// 348
// 239
// 133
// 188
// 243
// 298
// 353
// 354
// 355
// 356
// 357
// 302
// 247
// 192
// 137
// 136
// 135
// 134
// 139
// 194
// 249
// 304
// 359
// 250
// 251
// 252
// 197
// 142
// 307
// 362
// 144
// 199
// 254
// 309
// 364
// 365
// 366
// 367
// 312
// 257
// 256
// 255
// 149
// 204
// 259
// 314
// 369
// 260
// 206
// 152
// 316
// 372
// 374
// 320
// 266
// 212
// 158
// 214
// 270
// 326
// 382
// 321
// 322
// 323
// 324
// 325
// 577
// 521
// 520
// 519
// 573
// 628
// 683
// 739
// 795
// 851
// 907
// 523
// 524
// 525
// 581
// 636
// 691
// 745
// 799
// 853
