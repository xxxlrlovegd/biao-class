;
(function() {
    'use strict'
    window.lrBoard = {
        init
    };
    // 全局变量,方便调用
    let config, count;
    // 默认配置
    let defaultConfig = {
            list: ['test1', 'test2', 'test3'],
            interval: 500,
        }
        /*************init一切的开始********************/
        /**
         * 广告牌制作
         * @param {string} boardSelector  广告容器
         * @param {string} innerSelector  广告容器子级
         * @param {Object} adlist   广告内容
         */
    function init(boardSelector, innerSelector, adlist) {
        //选中广告容器
        const board = document.querySelector(boardSelector);
        //选中广告容器子级
        const inner = board.querySelector(innerSelector);
        // 加载用户配置
        loadConfig(adlist);
        //广告索引默认从0开始
        count = 0;
        //广告内容从头开始
        inner.innerHTML = config.list[count];
        // 广告闪烁开始表演
        setadFlash();
    }
    /**
     * 加载用户配置
     * @param {Object} adlist 用户配置
     */
    function loadConfig(adlist) {
        config = Object.assign({}, defaultConfig, adlist)
    };
    /**
     * 广告闪烁,实质为定时
     */
    function setadFlash() {
        setInterval(() => {
            /*切换广告内容时,样式改变,运用了回调函数
            函数调用的是匿名函数
            */
            toggleText(
                () => {
                    board.style.borderColor = 'transparent';
                },
                () => {
                    board.style.borderColor = 'inherit';
                    count++;
                    if (count > config.list.length - 1) {
                        count = 0;
                    }
                    inner.innerText = config.list[count];
                })
        }, config.interval);
    };
    // 判断广告内容是否为显示状态
    function visible() {
        return getComputedStyle(inner).opacity == '1'
    }
    // 切换广告内容
    function toggleText(hide, show) {
        if (visible()) {
            inner.style.opacity = 0;
            hide();
        } else {
            inner.style.opacity = 1;
            show();
        }
    }
})();