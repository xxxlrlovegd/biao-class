### HTML/CSS/JavaScript小技巧
## 1.子选择器

/* lst <li> element*/
li:first-child{
    color:red;
}

/* Last <li> element*/
li:last-child{
    color:green;
}

/* Select All <li> element but the first three */
li:nth-child(n+4){
    color:yellow;
}

/* Select only the first 3<li> elements*/
li:nth-child(-n+3){
    color:green;
}

/* Styles are elements that are not a <p> */
.my-class:not(p){
    display:none;
}

## 2写作模式

<style>
    .sideway{
        writing-mode:vertical-rl;
    }
    .normal{
        width:5%;
        float:left;
    }
</style>
<p class="normal">This is a nice day!!</p>
<p class="sideway">This is a nice day!!</p>

## 3Math.round 和 Math.floor 的替代方案
0|743.4343 //returns 743
Math.floor(743.4343) //returns 743
812.777+.5|0 //returns 813
Math.round(812.777) //returns 813

## 4console.table()/console.time()-->console.timeEnd()
//console.table 在控制台打印成表格形式 console.time控制台展示出时间

## 5In运算符
可以检查数组中是否存在索引，并且将返回true或者false;也可以检查对象中是否存在某项属性。

## 6将Chrome作为文本编辑器
浏览器中打data:text/html,<html contenteditable> 然后按下回车即可