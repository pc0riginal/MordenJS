// // Document Object Model (DOM)
// // add , change, & delete content
// // pop-up effect

// // const para = document.querySelector('p')
// // const p_error = document.querySelector('.error')
// // const div_error = document.querySelector('div.error')

// // console.log(para)
// // console.log(p_error)
// // console.log(div_error)

// const p = document.querySelectorAll('p')

// // p.forEach(pt => {
// //     console.log(pt)
// // })
// console.log(p[1])
// // const error = document.querySelectorAll('.error') //return nodelist object can use as for each
// // console.log(error)

// // get an element by ID
// const title = document.getElementById('page-title') 
// console.log(title)

// // get element by class 
// const error = document.getElementsByClassName('error') // return html collection can not use for each method
// console.log(error)
// console.log(error[0])

// // get element by tag name
// const paras = document.getElementsByTagName('p')
// console.log(paras)
// console.log(paras[1])


// const para =document.querySelector('p')
// console.log(para.innerText)
// para.innerText = 'code is fun'

// const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' learn'
// })

// const content = document.querySelector('.content')
// content.innerHTML = `<h2>This is changed by JS</h2>`

// const colors = ['black','white','green','blue','pink']
// colors.forEach(color => {
//     content.innerHTML += `<p>${color}</p>`
// })

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href','https://www.google.com')
// link.innerText = 'Google Site'

// const e = document.querySelector('div.error')
// console.log(e.getAttribute('class'))
// e.setAttribute('class','success')
// e.setAttribute('style','color:green;')

// const title = document.querySelector('h1')
// title.setAttribute('style','margin:50px')
// console.log(title.style)
// console.log(title.style.color)
// title.style.margin = '50px'
// title.style.color = 'orange'
// title.style.fontSize = '50px'
// title.style.margin = ''

// change class 
// const status = document.querySelector('h5')

// console.log(status.classList)
// status.classList.add('success')
// status.classList.remove('success')
// status.classList.add('error')

const challenge = document.querySelectorAll('.challenge > p')
console.log(challenge)
challenge.forEach(e => {
    // console.log(e)
    // let s = String(e.innerText)
    // innerText is only grab visible content 
    // textContent is also grab hidden content
    if (e.textContent.includes('error')){
        e.classList.add('error')
    } else{
        e.classList.add('success')
    }

})

const title = document.querySelector('.title')

const toggle = () => {
    title.classList.toggle('title')
}
// title.classList.toggle('test')
