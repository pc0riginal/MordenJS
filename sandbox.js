// objects 
// const hobbies = [ 
//     { hobby:'cricket', interest:10},
//     { hobby:'football', interest:8},
//     { hobby:'gymnastic', interest:10}
// ]

let user = {
    name : 'Coding king',
    age : 23,
    location : 'palanpur',
    email : 'pc.koder@gmail.com',
    hobbies : [
        { hobby:'cricket', interest:10},
        { hobby:'football', interest:8},
        { hobby:'gymnastic', interest:10}
    ],
    login : function() {
        console.log('the user is logged in')
    },
    logout: function() {
        console.log('the user is logged out')
    },
    logHobbies : function(){ // if use arrow function JS does not chage value of this object
        // console.log(this)                        // this is context object 
        this.hobbies.forEach(blog => {
            console.log(blog.hobby,blog.interest)
        })
    }

}

user.logHobbies() // only for that object 
console.log(this) // global window object
user.login()
const name = 'paras'

// // dot notation 
// console.log(user)
// console.log(user.name)
// console.log(user['name'])
// user['name'] = 'code-hash'
// console.log(user.name)

// // bracket notation
// const key = 'location'
// console.log(user[key])

// // type
// console.log(typeof user)

// Math object
console.log(Math.PI)
console.log(Math.E)

const area = 7.7
console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

// random number
const random = Math.random()
console.log(Math.round(random*100))

// premitive types & reference types
// 1. premitive type -> [number,string,boolean,null,undefined,symbols] -> store in stack -> small space
// 2. reference type -> [object,object literals,arrays,functions,dates,all other object] -> store in heap -> big memory
      
