let person = {
    name : 'Görkem',
    lastName : 'Madran',
    age : 25,
    country : 'Turkey',
    city : 'İzmir',
    job : 'Front end Developer',
    skills : ['HTML', 'CSS', 'JAVASCRİPT', 'BOOTSTRAP', 'TAILWIND', 'REACT'],
    personInfo : function (){
        this.country = 'Türkiye'
       console.log(`Merhaba. Benim adım ve soyadım ${this.name} ${this.lastName}. ${this.age } yaşındayım.${this.country} ${this.city}'de yaşıyorum. İşim ${this.job} ve bildiğim bazı skiller ${this.skills[0]} ${this.skills[1]} ${this.skills[2]} ${this.skills[3]} ${this.skills[4]} ${this.skills[5]} `)
        
    }
}
console.log(person.personInfo())