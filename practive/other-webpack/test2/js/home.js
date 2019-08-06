// var open = require('./base').open
import { open } from "./base";
if (open) {
    document.body.innerHTML = `<a href='../page/signup.html'>请先点我鸭！</a>`
} else {
    document.body.innerHTML = `<h3>该网站暂不开放！</h3>`
}