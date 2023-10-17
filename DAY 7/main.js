function sayHello (){
    console.log('Hello')
}
sayHello()

function multiply(num1, num2){
    return num1 * num2
}
let result = multiply(10,2)
console.log('Çarpım sonucu', result)




let dizi = [2,4,5,10,20,30,100,20]

function someArrayValues(array){
    let total = 0;
    for(let i = 0; i <array.length; i++){
        total += array[i]

    }
    return total
}
console.log('Sonuç : ', someArrayValues(dizi))




let dize2 = [10,15,20,10,2,90,83,75,64]
function sumFunction(array){
    let toplam =0;
    for(let i =0; i <array.length; i++){
     toplam += array[i]
    }
return toplam
}
console.log('Döngü döndükçe gelen sayıların toplamı ',sumFunction(dize2))

const merhabaDe = function(name){
   return `Hello ${name}`
}
console.log(merhabaDe('Görkem'))

const arrow = (num1, ...numbers) => {
    let sonuc = 0;
    for(let i = 0; i<numbers.length; i++){
        sonuc += numbers[i]
        sonuc -= num1

    }
    return sonuc
}
console.log('Sonuç : ',arrow(10,50,50,20,40,30,80))