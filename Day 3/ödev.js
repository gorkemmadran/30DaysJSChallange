let firstName = 'Görkem',
    lastName = 'Madran',
    country = 'Turkey',                 // 1-) Değişkenler atandı
    city = 'İzmir',
    age = 25,
    isMarried = false,
    years = 2023


console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)               // 2-) Değişkenleri typeof operatörüyle cinsine bakıldı string mi number mi vb..
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof years)

let numberTen = 10;
let stringTen = '10'              // 3-) String olan ve olmayan iki operatör farklı karşılaştırma operatörleriyle incelendi
console.log(numberTen == stringTen, numberTen === stringTen)

console.log(parseInt(9.8) == 10, parseInt(9.8) === 10)   // Ondalıklı bir ifadenin tam sayıyla karşılaştırılması incelendi

let a = 4 < 5
let b = 2 >= 2                  // 3 tane true değer yazıldı
let c = 33 > 20

let d = 5 < 4
let e = 5 >= 10                // 3 tane false değer yazıldı
let f = 100 === '100'

const date = new Date();                              // Zamanı aldık
let year = date.getFullYear()                        // Sadece Yılı aldık
let numMonth = date.getMonth() + 1                  // Ayı sayı cinsinden aldık
let day = date.getDay()                             // Sayı olarak hangi gün
let hours =date.getHours()                          // Saat 
let minute = date.getMinutes()                      // Dakika
let second = date.getSeconds()                      // Saniye

let base = prompt('Base değeri sayı cinsinden giriniz')
let height = prompt('Height değerini sayı cinsinden basınız') 
                                                            /*
                                                            KULLANICIDAN 2 DEĞER ALINDI VE ALINAN DEĞERLERİN GEREKLİ FORMULLERLE
                                                            İŞLEMLERİ YAZILIP RESULT DEĞİŞKENİNDE SONUC OLARAK CONSOLA BASILDI
                                                          */            
        let result = base * height * 0.5
console.log(result)

let length = prompt('Karenizin Uzunlugunu giriniz')
let heightSecondary = prompt('Karenizin genişliğini giriniz') // Karenin alanı hesaplandı
 let resultSecondary = 2 * (length * heightSecondary)
 console.log(resultSecondary)

 let nameSecondary = firstName.length > 10 ? 'İsminiz 6 harfden fazla' : 'İsminiz altı harften kısa'
 console.log(nameSecondary)          

 
 