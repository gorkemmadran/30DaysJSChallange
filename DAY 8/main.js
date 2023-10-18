// a = 5;  // Window scope

let name = 'Görkem'         //GLOBAL SCOPE
let surName = 'Madran'

function letsLearnScope(){
    console.log(name, surName)   // GLOBAL SCOPE GÖRKEM MADRAN YAZDIRIR
    if(true){
        let name = 'Gökhan'
        let surName = 'Kandemir'   // Block içinde name ve surname tekrar tanımlandığı için scope içindeyken o değerden devam edicek Gökhan kandemir döner
        console.log(name, surName)
    }
    console.log(name, surName)     // BLOCKTAN cıkıldıgı için görkem madran yazıcak

}
letsLearnScope()
console.log(name, surName)        // BLOCKTAN cıkıldıgı için görkem madran yazıcak


const user = {
    name: 'Görkem',
    surName: 'Madran',
    age : 25,
    isMarried : false,
    skills : ['Html','Css','Javascript','Php'],
    siblings : [{
        name : 'Ercüment',
        surName : 'Madran',
    }
    
    ],
    getFullName : function(){
        return `${this.name} ${this.surName}`
    }

}


console.log(user.name)
console.log(user.surName)
console.log(user.age)
console.log(user.isMarried)
console.log(user.skills[0])
console.log(user.siblings[0].name)
console.log(user.siblings[0].surName)
console.log(user.getFullName())

user.getPersonInfo = function(){
    return `Merhaba benim adım${this.name}. Soy adım${this.surName}. Yaşım ${this.age}. Medeni halim ${this.isMarried ? 'Evliyim' : 'Evli değilim'} Kullandığım teknolijiler ${this.skills[0]}, ${this.skills[1]} , ${this.skills[2]} ve ${this.skills[3] }   `
}
console.log(user.getPersonInfo())

