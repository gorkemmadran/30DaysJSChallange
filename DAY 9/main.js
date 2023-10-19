// const fonksiyon = number => number **2 ;
function gel(number){
return number **2
}

function cube(callback, number){
return gel(number) * number
}
console.log(cube(gel, 4));

/*
function here (){
    alert('Are you still here ? ')
}
function question(){
    alert('Sana bir soru sorucam')
}
setInterval(here, 10000)  // Bir olayın tekrar tekrar dönmesi için set ınterval kullanılır
setTimeout(question, 2000)  // Bir olayı planlanladıgımız süre sonra tek bir seefere mahsus yapması için setTımeout
*/
function sayHello(){
    console.log('Hello !')
}

 const merhaba = setInterval(sayHello, 1000)
 const time = setTimeout(() => {
    clearInterval(merhaba);
    console.log('İnterval işlemi sona erdi.')
 }, 5000)

 setTimeout(() => {
    clearTimeout(time)
    console.log('Interval işlemi durdurulmadı devam edecek')
 }, 3000)




 let sum = 0
 const numbers = [1,2,3,4,5]
 numbers.forEach(num => sum += num)
 console.log(sum)

const countries = ['Finland', 'Denmark', ' Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


const numbers2 = numbers.map((number)=> number *2)
console.log(numbers2)

const numbers3= numbers.map((number)=> number *3)
console.log(numbers3)

const number4 = numbers.map((number)=> number * 4 )
console.log(number4)

const add = numbers.map((number) => number += 1)
console.log(add)


let users = [
    {
    id : 1,
    name : 'Görkem',
    age : 26
},
{
    id : 2,
    name : 'Güler',
    age : 50
},{
    id : 3,
    name : 'Berkem',
    age : 22
}
]
 users = users.map((user)=>{
    if(user.id ===  2){
        user.name = 'Hakan'
    }
    return user
 })
 console.log(users)