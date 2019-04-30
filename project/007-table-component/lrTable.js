;
(function() {
    'use strict'
    window.lrTable = {
        init
    };
    /**
     * @param {HtmlTableElement} tableSelector 表格类;
     * @param {Object} struct 表头结构;
     * @param {Array}  list   表格内容；
     */
    function init(tableSelector, struct, list) {
        // 选中表格
        let table = document.querySelector(tableSelector);
        //创建表头元素
        let th = document.createElement('thead');
        // 创建表内容
        let tb = document.createElement('tbody');
        // 将表头及表内容追加到表格中
        table.appendChild(th);
        table.appendChild(tb);
        //将表结构及内容存下来方便调用
        let st = struct;
        let lt = list;
        //循环表结构后将数据追加到表头中
        let html = ``;
        for (let e in st) {
            html += `<th>${st[e]}</th>`;
        };
        th.innerHTML = html;
        // 循环表格数据追加到表内容中
        list.forEach(it => {
            let thtml = ``;
            for (let e in st) {
                thtml += `<td>${it[e]||'-'}</td>`;
            }
            tb.innerHTML += thtml;
        });
    };
})();