//用export之后运用require
export class Header {
    constructor() {
        const ele = document.createElement("div")
        ele.innerText = "This is XXXX"
        document.body.appendChild(ele)
    }
}