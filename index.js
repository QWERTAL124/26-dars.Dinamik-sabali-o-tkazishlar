' use srtict '

// Dynamic typing - bir ma'lumot turidan boshqa ma'lumot turiga o'tish

// 1) to string

console.log(String(4));

// 2-)

console.log('samar'+21);
console.log(typeof('samar'+21));

const youtubeChannel = 10;

console.log("youtube.com/channel/"+youtubeChannel); // bunda o'zgaruvchidagi soni ham string m'lumot turiga o'tkazib yuboradi

// 3-) to number
// 3.1
console.log(typeof Number('4'));
//3.2
console.log(typeof +'5'); // oldida plus belgisi bo'lgani uchun raqam  number ma'lumot turiga o'tdi

// 3.3

console.log(typeof (parseInt("15"))); // stringdan numberga o'tkazdi

// promptda ishlatish

const name = parseInt(prompt('15'));

// 4-) to boolean

// 0,"", null, undefined , NaN == har doim false bo'ladi 
// Misol uchun
let age = 0;
if(age){
    console.log('g');  // ushbu amal ishlamaydi chunki 0 = false
}

age = 18;

if(age){
    console.log('g'); //  ushbu amal ishlaydi chunki age 0 dan farqli
}


console.log(typeof Boolean('4'));

console.log(typeof !!'4');