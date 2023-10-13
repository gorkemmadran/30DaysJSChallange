let age = prompt('Yaşınızı giriniz')
if(age >= '18'){
    console.log('Araba ehliyeti alabilirsin')
} else if(age == 16){
    console.log('Araba ehliyeti alabilmek için 2 sene daha beklemelisin')
}
else if(age == 15){
    console.log('Araba ehliyeti alabilmek için 3 sene daha beklemelisin')
}
else if(age == 17){
    console.log('Araba ehliyeti alabilmek için  sene daha beklemelisin')
}
else{
    console.log('Araba ehliyeti alamazsın')
}

let myAge = 25
let yourAge = Number(prompt('Yaşınızı giriniz', '22'))
if(myAge == yourAge){
    console.log('Benle aynı yaştasın :) ')
}else if (myAge < yourAge){
    let result = yourAge - myAge;
    console.log('Senden tam olarak ' +`${result}` + ' '  + 'yaş küçüğüm')
}else if(myAge > yourAge){
    let result = myAge - yourAge;
    console.log('Senden tam olarak ' +`${result}` + ' '  + 'yaş büyüğüm')
}


let a = 4;
let b = 3;
if(a>b){
    console.log('a > b den')
} else{
    console.log('a < b')
}

let enterNumber = prompt('Bir sayı girin. Tek mi çift mi bileceğim')
if((enterNumber % 2) === 0){
    console.log('Sayı çift sayı')
} else{
    console.log('Sayı tek sayı')
}

let studentPoint = prompt('Aldığınız puanı yazınız ');
if(studentPoint >= 80){
    console.log('Tebrikler "A" aldınız')
} else if(studentPoint < 80){
    console.log('Tebrikler "B" aldınız')
}
else if(studentPoint >60){
    console.log('Tebrikler "C" aldınız')
}
else if(studentPoint < 59){
    console.log('Tebrikler "D" aldınız')
}
else if(studentPoint < 49 ){
    console.log('Tebrikler "F" aldınız')
}
