// // // Document Object Model (DOM)
// // // add , change, & delete content
// // // pop-up effect
// const para = window.document.querySelector('page-title')
// console.log(para)
// const p_error = document.querySelector('.error')
// console.log(p_error)
// const div_error = document.querySelector('body > div.challenge > p:nth-child(1)') //only one element
// console.log(div_error)
// // // console.log(para)
// // // console.log(p_error)
// // // console.log(div_error)

// const p = document.querySelectorAll('p')
// // console.log(p)
// // p.forEach((data,id)=>{
// //     console.log(data)
// // })

// // const cal = (data,callBack) =>{
// //     console.log(data)
// //     callBack(data)
// // }   

// // const callBack = (data)=>{
// //     console.log(data)
// // }
// // cal(500,(data)=>{
// //     console.log(data)
// // })


// // // p.forEach(pt => {
// // //     console.log(pt)
// // // })
// // console.log(p[0])
// // const error = document.querySelectorAll('.error') //return nodelist object can use as for each
// // console.log(error)
// // // console.log(error)

// // // get an element by ID
// const title = document.getElementById('page-title') 
// console.log(title)

// // // get element by class 
const error = document.getElementsByClassName('error') // return html collection can not use for each method
console.log(error)

// // console.log(error[0])

// // // get element by tag name
// const paras = document.getElementsByTagName('p')
// console.log(paras)


const para =document.querySelector('p')
console.log(para.innerText)
para.innerText = 'code is fun'

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para.innerText)
    para.innerText += ' learn'
})

const content = document.querySelector('.content')
// console.log(content)
content.innerHTML = `<h2>This is changed by JS</h2>`

// const colors = ['black','white','green','blue','pink']
// colors.forEach(color => {
//     content.innerHTML += `<p>${color}</p>`
// })



const link = document.querySelector('a')
console.log(link)
att = link.getAttribute('href')
console.log(att)
link.setAttribute('href','https://www.google.com')
link.innerText = 'Google Site'

const e = document.querySelector('div.error')
console.log(e.getAttribute('class'))
e.setAttribute('class','success')
e.setAttribute('style','color:blue;')

const title = document.querySelector('h1')
console.log(title)
// title.setAttribute('style','margin:50px')
// title.setAttribute('style','color:brown')
console.log(title.style)
console.log(title.style.color)
// title.style.fontSize = '50px'
// title.style.margin = '50px'
// title.style.color = 'orange'
// // title.style.fontSize = '50px'
// // title.style.margin = ''

// // change class 
const status = document.querySelector('h5')

// console.log(status.classList)
// status.classList.add('success')
// status.classList.remove('soon')
// status.classList.add('error')

// const challenge = document.querySelectorAll('.challenge > p')
// console.log(challenge)

// const title = document.querySelector('.title')

// const toggle = () => {
//     title.classList.toggle('title')
// }
// // title.classList.toggle('test')
