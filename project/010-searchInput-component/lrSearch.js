;
(function() {
    'use strict'
    window.search = {
        init
    };
    let defaultConfig = {
        display: 'name', //用于数据显示（灵活）
        onSelect: (it) => {
                console.log(it)
            } //选中数据传给使用者
    };
    let flag = false;
    /**
     * 一切的开始
     * @param {HTMLELEMENT} 所在位置选择器
     * @param {Array} 渲染所需的数据
     * @param {Object} config 其他配置项
     */
    function init(selector, datalist, config) {
        // 合并设置
        config = Object.assign({}, defaultConfig, config)
            //选中插件挂载点
        let container = document.querySelector(selector)
            //数据缓存到container
        container.$list = datalist;
        prepare(container) //准备基础界面
        selectInput(container, config) //选中input框
        optionData(container, config) //输入数据回显
        selectOption(container, config) //选中下拉数据
        bindSearch(container) //插件被点击
    };
    /**
     * 准备基础界面
     * @param {HTMLELEMENT} container 
     * @param {Array} datalist 
     */
    function prepare(container) {
        container.innerHTML = ` 
        <div class="search">
         <input type="search" name="" id="" placeholder="请输入搜索内容">
        </div>
        <div class="option">
        </div>`
            // 将input框和下拉节点缓存到container方便使用
        container._input = container.querySelector('[type="search"]');
        container._input.style.cursor = 'pointer';
        container._option = container.querySelector('.option');
        container._input.classList.add("lr-input");
        container._option.classList.add("lr-option");
    };
    /**
     *下拉数据渲染
     * @param {HTMLELEMNT} 位置选择器
     * @param {Array} 下拉数据
     **/
    function render(container, datalist, config) {
        setOptionVisible(container, 'inline-block')
        container._option.innerHTML = ''
        datalist.forEach(e => {
            let item = document.createElement('div')
            if (e[config.display] == '无匹配数据')
                item.style.opacity = .5
            item.innerHTML = e[config.display]
                //将下拉数据缓存到.option里
            item.$data = e
            container._option.appendChild(item)
        });
    };
    /**
     * 选中input框
     * @param {HTMLELEMENT} input框所在位置
     */
    function selectInput(container, config) {
        container._input.addEventListener('click', e => {
            render(container, container.$list, config)
        })
    }
    /**
     *输入后数据回显
     *@param {HTMLELEMENT} 所在位置选择器
     *@param {Array} 过滤后数据显示 
     */
    function optionData(container, config) {
        container._input.addEventListener('keyup', e => {
            let keyword = container._input.value
            let filtered = container.$list.filter(data => {
                return data[config.display].includes(keyword)
            });
            if (filtered.length <= 0) {
                let key = config.display
                let obj = {}
                obj[key] = '无匹配数据'
                filtered.push(obj)
            }
            render(container, filtered, config)
        })
    }
    /**
     * 点击下拉数据
     * @param {HTMLELEMENT} 所在位置选择器
     * @param {Array}  
     */
    function selectOption(container, config) {
        container._option.addEventListener('click', e => {
            flag = true
            container._input.value = e.target.innerHTML
            if (e.target.innerHTML == '无匹配数据') {
                container._input.value = ''
                flag = false
            } else {
                setOptionVisible(container, 'none')
            }
            if (container._input.value)
                config.onSelect && config.onSelect(e.target.$data)
        })
    }
    /**
     * 下拉开关
     * @param {HTMLELEMENT} 所在位置选择器
     */
    function setOptionVisible(container, tarrget) {
        container._option.style.display = tarrget
    }

    /**
     * 插件被点击
     * @param {HTMLELEMENT} 所在位置选择器
     */
    function bindSearch(container) {
        container.addEventListener('click', e => {
            if (!e.target.closest('.search')) {
                setOptionVisible(container, 'none')
                if (!flag)
                    container._input.value = ''
            } else {
                return
            }
        })
    }
})();