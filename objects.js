//Question1
function namesOfAdults(people){
    return people.filter(person => person.age >=18).map(person => person.name)
}
const people=[
{name:'Alice',age:17},
{name:'Eunice',age:22},
{name:'Charlie',age:14},
{name:'Max',age:19},
]
const overEighthteen = namesOfAdults(people)
console.log(overEighthteen)
//Qiuestion2

function differentProducts(products){

}
//Question3


function arrayOfObjects(number){
    const students=[
        {name:'John',scores:[90,80,85]},
        {name:'Jane',scores:[95,92,88]},
        {name:'Jim',scores:[70,80,75]},
        {name:'Jill',scores:[85,90,84]},
    ];
    students.filter(student=>{
    return totalOfScores=students.score.reduce((one,two)=>one+two)/student.scores.length
        return totalScore >= 85
    })
    .map(student =>student.name)
}
console.log(arrayOfObjects(student))

const car={
    make:'Ford',
    model:'Ranger',
    year:2023,
    displayInfo: function(){
        console.log(`make: ${this.make}, Model:${this.model},Year: ${this.year}`)
    },
    age:function(){
        const current = new Date().getFullYear();
        const newValue = current-car.year
        return newValue
    }
}
console.log(car.age())