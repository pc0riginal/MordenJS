
// // function on object

// // function declaration
// // function greet(){
// //     console.log("hello!")
// // }

// //function expression
// // const sound = function(){ 
// //     console.log("have a great day!")
// // }

// greet()
// greet()
// greet()
// // sound()
// // sound()
// // sound()

// // function declaration - javascript hoisting -Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
// function greet(){
//     console.log("hello!")
// }

// //function expression - hoisting not working with FE
// // const sound = function(){ 
// //     console.log("have a great day!")
// // }


// // arguments and parameters
// const sound = function(name='xyz',time='night'){  //local variable
//     console.log(`have a great day!\ngood ${time}, ${name}`)
// }

// sound('paras','morning') // function with argument
// sound()

// // returning value function
// // const calArea = function(radius){
// //     let area = 3.14*radius**2;
// //     // console.log(area)
// //     return area
// // }

// // const area = calArea(5)
// // console.log(area)

// // arrow function
// // const calArea = (radius) => { //excetly one parameter no need parenthesis
// //     return 3.14*radius**2;
// // }

// // shorthand of arrow function
// const calArea = radius => 3.14*radius**2
// const area = calArea(5)
// console.log('area is : ',area)


// //practice arrow function 
// const welcome = function(){
//     return "hello world"
// }
// console.log(welcome())

// const total_bill = function(items,GST){
//     let total = 0
//     for(i=0;i<items.length;i++){
//         total += items[i] + items[i]*GST
//     }
//     return total
// }

// console.log(total_bill([10,20,40,50],10))

// // const total_bill = (items,GST) => {
// //     let total = 0
// //     for(i=0;i<items.length;i++){
// //         total += items[i] + items[i]*GST
// //     }
// //     return total
// // }

// const name_ = 'ketpar'

// //functions - it's own 
// const msg = () => 'good bye'
// console.log(msg)

// //methods - related to objects datatype

// console.log(name_.toUpperCase())

// // call backs & foreach 
// const myFunc = (callBackFunc) => {
//     let value = 50
//     callBackFunc(value)
// }

// // myFunc(function(value){
// //     console.log(value)
// // })

// myFunc(value => {
//     console.log(value)
// })

// let people = ['paras','ramesh','paresh','smith','ketpar']

// // people.forEach(function(person){
// //     console.log(person)
// // })

// const logPerson = (person,index)=>{
//     console.log(`${index} - hello ${person}`)
// }

// people.forEach(logPerson)

// // people.forEach((person,index) => {
// //     console.log(index,person)
// // })

// // get reference to the 'ul'

// const ul = document.querySelector('.people')

// let html = ``
// const list = ['khaman','cloths','body sprey','biscuits']
// list.forEach( person => {
//     html += `<li style="color:purple"> ${person} </li>`
// })
// console.log(html)
// ul.innerHTML = html