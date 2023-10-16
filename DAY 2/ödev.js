let challange = `30 Days Of Javascript` // 1  Challange adında bir değişken oluşturup içine string bir değer girdik

let string = `Str` 
console.log(`${string}`)   // 2   Template literals olarak string değerimizi consola bastık

console.log(string.length)  // 3    length ile string ifademizin kelime uzunlugu bulundu

let upper = string.toUpperCase()   // 4  upperCase Methodu ile büyün harfler büyük bastırıldı
console.log(upper)

let lower = string.toLowerCase()  // 5   LowerCase methodu ile bütün harfler kücük bastrıldı
console.log(lower)

let cut = challange.substring(0,3)   // 6  Substring methodu ile string ifadenin ilk kelimesi kesildi
console.log(cut)

console.log(challange.includes('script'));   //7  İncludes methodu ile 'script' string ifadesinde var mı diye kontrol ettik 

console.log(challange.split(' '));  // 8  Split methoodu ile boşluktan sonra olan kelimeleri arraye döndürdük

console.log(string.split(''))  // 9   Split methodu ile her harfi bir arraye döndürdük

let newWord = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(newWord.split(','))                               // 10  Split methoduyla , den sonra arraye çevirdik

console.log(challange.replace('Javascript', 'Python'));      // 11  Javascriprt yazısını replace methodu ile Pythona çevirdik

console.log(challange.charAt(15));      // 12    15. İndexte hangi harf olduğınu bulduk

console.log(challange.indexOf('Of'));    //13 İndexOf metoduyla 'Of' kelimesinin kaçıncı indexte başladığını bulduk

console.log(challange.lastIndexOf('Of'))  //14 LastİndexOf methodu ile of en son nerede geçiyor bakıldı

let word = 'You cannot end a sentence with because because because is a conjunction '
console.log(word.indexOf('because'))       // 15  İndexOf metoduyla 'because' kelimesinin kaçıncı indexte başladığını bulduk
console.log(word.lastIndexOf('because'))     // 16 LastİndexOf metoduyla 'because' kelimesinin sonuncusunun kaçıncı indexte başladığını bulduk
console.log(word.search('because'));      // 17  search ile kaçıncı indexte oldugunu bulduk


console.log(challange.startsWith(30))  // 18 Starswith kullanarak cümle yazdığım harflerle mi başlıyor kontrol ediyor
console.log(challange.endsWith('Javascript'))  // 19 endsWith methodu ile belirttiğimiz string ifade bu şekilde mi bitiyor kontrol ediyor
console.log(challange.match('a'))  // 20 match methodu ile arattıgımız harf kaç kere ve nerelerde geçiyor bakıldı
console.log(challange.repeat(2))  //21 repat methodu ile string ifademizi 2 kere yazdırttık


let num = 10;
let numString = '10';
console.log(num === numString)  // String ve number türünden 2 değişken oluşturuldu ve eşitliğine bakıldı
let num1 = Number(numString);   // eşit olmadıgı için string olanı numbera cevirip tekrar inceledik eşitlik sağlandı
console.log(num1 == num)

let word2 = 'python'
let word3 = 'jargon'
console.log(word2.includes('on'))  /*
                                        2 Değişkendede 'on' kelimesi geçiyor mu kontrol edildi
                                        */
console.log(word3.includes('on'))

let cumle = 'I hope this course is not full of jargon'
                                                            // jargon kelimesi geçiyor mu kontrol edildi
console.log(cumle.includes('jargon')
)


let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)

let randomNumber2 = Math.floor(Math.random() * 51 );
console.log(randomNumber2)

let randomNumber3 = Math.floor(Math.random() * 255)
console.log(randomNumber3)
 console.log(randomNumber + randomNumber2 + randomNumber3)

