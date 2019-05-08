;
(function() {
    'use strict'
    window.lrCustomTable = {
        init,
    };
    /************init一切的开始 ****************/
    /**
     * @param {HtmlTableElement} tableSelector 表格类；
     * @param {Object} struct 表头结构对象
     * @param {Array} list  表格内容对象
     * @param {Object} options   个性化按钮及行为
     */
    function init(tableSelector, struct, list, options) {
        //选中表格类
        let table = document.querySelector(tableSelector);
        //创建表头
        let th = document.createElement('thead');
        //创建表内容
        let tb = document.createElement('tbody');
        //将表头元素及表内容元素追加到表格元素中
        table.appendChild(th);
        table.appendChild(tb);
        //将表头结构及表格内容对象存储到变量中，方便调用
        let st = struct;
        let lis = list;
        let thhtml = ``;
        for (let s in st) {
            //将表头内容添加进去
            thhtml += `<td>${st[s]}</td>`
        };
        //有个性化操作则加一列操作表头
        if (options) {
            thhtml += `<td>操作</td>`
        };
        // 在thead添加组装好的字符串
        th.innerHTML = thhtml;
        //将表内容添加进去
        lis.forEach((e) => {
            let tbhtml = ``;
            for (let e1 in st) {
                tbhtml += `<td>${e[e1]}</td>`;
            }
            // 如有个性化操作，则当前单元格创建按钮元素
            if (options) {
                tbhtml += '<td>'
                for (let ops in options) {
                    tbhtml += `<button class="${ops}" style="margin:2px">${options[ops].name}</button>`;
                };
                tbhtml += '</td>'
            }
            tb.innerHTML += tbhtml;
            //当页面元素加载完后选中表内容下的行元素
            let trs = tb.querySelectorAll('tr')
            if (options) {
                trs.forEach((tr, i) => {
                    console.log("i:", i)
                    for (let ops in options) {
                        //必须在页面元素加载之后，才能监听到事件；
                        tr.querySelector("." + ops).addEventListener(options[ops].event, (e) => {
                            options[ops].action(tr, i);
                        });
                    };
                });
            }
        });

    }
})();