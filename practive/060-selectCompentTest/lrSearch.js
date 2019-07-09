;
(function() {
    'use strict'
    window.search = {
        init
    };
    /**
     * 一切的开始
     * @param {HTMLELEMENT} 所在位置选择器
     * @param {Array} 渲染所需的数据
     */
    function init(selector, datalist) {
        let container = document.querySelector(selector)
        container.innerHTML = ` 
                <div class="search">
                 <input type="search" name="" id="" placeholder="请输入搜索内容">
                </div>
                <div class="option">
                </div>`
        render(container, datalist)
        optionData(container, datalist)
    };
    /**
     *下拉数据渲染
     * @param {HTMLELEMNT} 位置选择器
     * @param {Array} 下拉数据
     **/
    function render(container, datalist) {
        let items = container.querySelector('.option')
        items.innerHTML = ''
        datalist.forEach(e => {
            let item = document.createElement('div')
            item.innerHTML = e.name
            items.appendChild(item)
        });
    };

    /**
     *数据选中后数据回显
     *@param {HTMLELEMENT} 所在位置选择器
     *@param {Array} 过滤后数据显示 
     */
    function optionData(container, datalist) {
        let input = container.querySelector('[type=search]')
        input.addEventListener('keyup', e => {
            let keyword = input.value
            let filtered = datalist.filter(data => {
                return data.name.includes(keyword)
            })
            render(container, filtered)
        })
    }
    /**
     * 点击下拉数据
     * @param {HTMLELEMENT} 所在位置选择器
     * @param {}
     */
})();