let names = Array()
console.log(names)

let arr = ['Görkem', 'Madran', 25, 1997, null]
console.log(arr)
console.log('gorkem'.split(''))
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
console.log(array1.concat(array2));

let isimler = ['Gorkem', 'Huseyin', 'Baturay', 'Atakan', 'Cem', 'İlyas']
console.log(isimler.indexOf('Cem'))
console.log(isimler.indexOf('Gökay'))
console.log(isimler.includes('Osman'))
// console.log(isimler.toString())
console.log(isimler.join(' - '))
// console.log(isimler.splice(0,2))
console.log(isimler.sort())

let emptyArray = []    // 1.) Boş Array tanımlandı
let ar = [1,2,3,4,5]   // 2.) İçinde 5 eleman olan bir array oluşturuldu
console.log(ar.length) // 3.) Arrayin uzunluğuna bakıldı
console.log(ar[0])     // 4.) Array içindeki ilk değer alındı
console.log(ar[4])     // 5.) Arrayın son itemi getirildi
console.log(ar[2])     // 6.) Arrayın ortasındaki item getirildi.
let newArray = [1,2,3,'Gorkem', undefined, null] 
 // 7.) Yeni bir array atandı ve içine farklı cinsdeki ögeler yerleştirildi.


console.log(newArray.length) // 8. Yeni oluşturulan arrayın uzunluguna bakıldı.

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//9.) Yeni bir itCompanies adında eleman oluşturuldu içine bazı markalar yazıldı.
console.log(itCompanies) // 10.) console.logla bastırıldı
 console.log(itCompanies.toString().toUpperCase()) // 11.) Bütün ögeler stringe cevrildi ve ardından Yazı tipleri büyütüldü
let search = itCompanies.includes('Facebook')

if(search == true){
    console.log('Evet aradığınız şirket ismi arrayde mevcut') 
     /*
     12.) Yazılan array da aratılan şirket ismi varsa doğrula
      yoksa olmadıgını if else ile belirt
    */
} else{
    console.log('Hayır aradığınız şirket ismi yok')
}
console.log(itCompanies.sort().reverse()) // sort metodu ile alfabeye göre sıralama yapıldı. ve tersten yazıldı
// console.log(itCompanies.slice(0,3))       // ilk 3 dize kesildi
// console.log(itCompanies.slice(3,4))         // ortadaki öğe cıkarıldı
//console.log(itCompanies.shift())               // ilk öğe cıkarıldı
console.log(itCompanies.shift())                   // son öğe cıkarıldı
itCompanies.shift()
itCompanies.shift()
itCompanies.shift()                             // bütün öğeler cıkartıldı
itCompanies.shift()
itCompanies.shift()
itCompanies.shift()
console.log(itCompanies)
