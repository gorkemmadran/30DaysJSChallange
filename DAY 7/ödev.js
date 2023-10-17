function fullName (isim){
    console.log(`Hello ${isim}`)        // ismini print ettiren bir function oluştur
}
fullName('Gorkem')

function nameLastName (name, lastname){
    let fullisim = `${name} ${lastname}`   // ismini ve soy ismini bastırabilcegim  bir function oluştur
    return fullisim
}
console.log(nameLastName('Görkem', 'Madran'))

function addNumber(num1, num2){
    let sum = 0;
   return sum += num1 + num2            // 2 parametre alan ve birbirilerinin toplamını veren bir function oluştur

}
console.log(addNumber(5,10))

function  areaOfRectangle(length, width){
let area = 0;
    return area += length * width         // Dik dörtgenin alanını hesaplayan bir function oluştur.
}
console.log(areaOfRectangle(10,50))

function perimeterOfRectangle(length, width){
    let perimeter = 0;
    return perimeter += 2* (length + width)     // Dikdörtgenin çevresini hesaplayan bir function oluştur.
}
console.log(perimeterOfRectangle(180, 100))

function volumeOfRectPrism(length, width, height){
    let volume =0;
    return volume += length * width * height;       // Dikdörtgen prizmasının hacmini hesaplayan bir function oluştur.
}
console.log(volumeOfRectPrism(10,30,50))

function densityOfASubtance(mass, volume){
    let density = 0;
    return density += mass/volume                   // Maddenin yoğunlugunu hesaplayan bir function oluştur
}
console.log(densityOfASubtance(10,5));

function speed(distance, duration){
    let result = 0;
    return result += distance / duration;           // Mesafe bölü süre yaparak hızımı hesaplayın.
}
console.log(speed(200, 5.59))