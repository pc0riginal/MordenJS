// for loop
for(let i = 0;i < 5; i++){
    console.log(i)
}

const names = ['code','ketpar','learn']
for(let i=0;i<names.length;i++){
    // console.log(names[i])
    let html = `<div>${names[i]}</div>`
    console.log(html)
}

// while loop
let i=0
while (i< 5){
    console.log(i)
    i++
}
i=0
while(i<names.length){
    console.log(names[i])
    i++
}

i = 0
do{
    console.log('val of i :',i)
    i++
} while(i<5)


// if statement 
age = 35
if (age > 20){
    console.log('you are 20 year old')
}

if (names.length > 2){
    console.log("lot of names")
}

// let password = "pass"
// if (password.length >=12 && password.includes('@') ){ // 12 char long

// } else if( password.length >= 8 || password.includes('@') && password.length > 5 ) { // 8 char long
 
// } else{

// }


// logical not
let user = false;
if(!user){
    console.log('you can log in ')
}
// console.log(!true)
// console.log(!false)

// break and continue
const scores = [50,25,0,30,100,20,10]
for(let i=0;i<scores.length;i++){
    if(scores[i] === 0){
        continue
    }
    console.log('your score :' , scores[i])
    if (scores[i] > 50){
        console.log("you are passed")
        break
    }
}

//switch statement
const grade = 'D' // this is working as a === not type conversion
switch (grade) {
    case 'A':
        console.log("grade is A")
        break;
    case 'B':
        console.log("grade is B")
        break;
    case 'C':
        console.log("grade is C")
        break;
    default:
        console.log('not invalid')
        break;
}

// variable & block scope
let marks = 50
//global scope
if(true){ // local scope
    let marks = 40
    console.log('inside of block :',marks)
    if(true){
        var test = 50
        console.log('inside 2nd of block :',marks)
    }
}
console.log('outside of block :',marks,test)