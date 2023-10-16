for(let i = 0; i <= 100; i++){
    console.log('i', i)
}

for(let i = 5; i >= 0; i--){
    console.log('i', i)
}

let counteries = ['Turkey', 'Germany', 'Ireland', 'America', 'England', 'France']
for(let i = 0; i<=counteries.length; i++){
    console.log(counteries[i])
}

let numbers = [1,2,3,4,5,10,20,30]
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log('Toplam', sum)

let names = ['Görkem', 'Hüseyin', 'Cem', 'İlyas', 'Atakan', 'Baturay']
let names2 = []
for(let i = 0; i<names.length; i++){
    names2.push(names[i].toUpperCase());
}
console.log(names2)
let i = 0;
// while(i <= 5){
    console.log('Sonuç', i)
    i++
// }

for(const name of names){
    console.log('Ülke adı',':', name )
}


for(const name of names){
    if(name === 'Cem'){
        console.log('Cemi buldun döngü kırıldı.')
        break
    }
    console.log('AD', name)
}