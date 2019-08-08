import './index.css'
import a1 from './img/a1.jpg'
import a2 from './img/a2.jpg'
import b1 from './img/b1.jpg'
import b2 from './img/b2.jpg'
import c1 from './img/c1.jpg'
import c2 from './img/c2.jpg'
import love from './img/love.jpg'
import peace from './img/love.gif'

let div = document.createElement("div")
div.classList.add('container')

function append(src) {
    let img = document.createElement('img')
    img.src = src
    div.append(img)
    document.body.append(div)
}
append(a1)
append(a2)
append(b1)
append(b2)
append(c1)
append(c2)
append(love)
append(peace)