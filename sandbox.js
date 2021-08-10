// console.log("hello worlds!")
// alert("hi")
// var x = "paras"
// console.log(x)

// const v = 5
// v = 10
// console.log(v)
// let c = 5
// console.log(c)

// strings
// let fullname = "paras patel"
let first = "paras"
let last = "patel"
let full_name = first + ' ' + last
console.log(full_name)

//get
console.log(full_name[4])

// length
console.log(full_name.length) //properties

// methoad 
let r
console.log(full_name.toUpperCase())
full_name = full_name.toLowerCase()
console.log(full_name)

// let email = 'pc@gmail.com'
// let index = email.indexOf('m')
// console.log(index)
// r = email.lastIndexOf('-')
// console.log(r)
// r = email.slice(3,8)
// console.log(r)
// r = email.substr(0,10)
// console.log(r)
// r = email.replace('m','k') // first char only
// console.log(r)


// numbers 
// let ra = 10
// const pi = 3.14
// console.log(ra*pi)

// console.log(10/2)
// console.log(ra % 3)
// console.log(2*pi*ra**2)
// console.log(3**2)
// r = 5*(10-9)**2 //BODMAS
// console.log(r)
let l = 10
l = l + 1
console.log(l)
l += 2
console.log(l)
l++
console.log(l)
l = 10
console.log(l)
// l*=2
// l/=2
// l%=2
// console.log(l)
// console.log(5 * 'hello')
// console.log('4' + 5)

r = 'the photo has ' +l + ' likes';
console.log(r)

const title = 'Best reads of 2021'
const author = 'Ketpar'
const likes = 30;

// concat
r = 'the blog called ' + title + ' by' + author + ' has ' + likes + ' likes'
console.log(r)

// template string 
r = `The blog called ${title} by ${author} has ${likes} likes`
console.log(r)

//html template
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} </span>
`
console.log(html)

//array
let n = ['paras','ketpar','coding',5,5.9]
n[1] = 'ken'
console.log(n)

let ages = [12,23,40,24]
console.log(ages[2])

let random = ['paras',21,5.6,'green']
console.log(random)
console.log(random.length)

console.log(random.join(","))
console.log(random.indexOf(21))
console.log(random.concat('blue')) // constructive method
console.log(random.push('pc')) //destructive method
console.log(random.push('name')) //destructive method

console.log(random.pop())
console.log(random)


//null and undefined 
// let fa
// console.log(fa,fa+3,`the age is ${fa}`)

let age = null
console.log(age,age+5,`my age is ${age}`)

//boolean 
console.log(true,false,"true","false")
let email = "pc@gmail.com"
r = email.includes('!')
console.log(r)

let name_ = ['code','eat','learn']
console.log(name_.includes('eat'))

// // comparison
// console.log(true == 0)
// let c_name = "ketpar"
// console.log(c_name == 'ketpar')
// console.log(c_name > 'qaetpar')

// //loose comparison ( different types still can be equal) implicit type conversion
// age = 21
// console.log(age == 21)
// console.log(age == '21')
// console.log(age != 21)
// console.log(age != '21')

// //strict comparison (different types can not be equal)
// age = 25
// console.log(age === 25)
// console.log(age === '25')
// console.log(age !== 25)
// console.log(age !== '25')

// //type conversion
// let score = '100'
// console.log(score +1)

// score = Number(score)
// console.log(score+1)
// console.log(typeof(score))
// console.log(typeof score)

// r = Number('hello')
// console.log(r)

// let s = String(50)
// s = Boolean(1)
// s = Boolean('1')
// s = Boolean('')

// console.log(s,typeof s)









