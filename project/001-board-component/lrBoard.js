;
(function() {
    'use strict'
    window.lrBoard = {
        init
    };
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
        let board = document.querySelector(boardSelector);
        //选中广告容器子级
        let inner = board.querySelector(innerSelector);
        // 为广告牌添加类方便加样式
        board.classList.add('lr-board');
        // 加载用户配置
        let config = Object.assign({}, defaultConfig, adlist);
        //广告索引默认从0开始
        let count = 0;
        //广告内容从头开始
        inner.innerHTML = config.list[count];
        // 广告闪烁开始表演
        setInterval(() => {
            //切换广告内容时,样式改变
            // 判断广告内容是否为显示状态
            if (getComputedStyle(inner).opacity == '1') {
                inner.style.opacity = 0;
                board.style.borderColor = 'transparent';
            } else {
                inner.style.opacity = 1;
                board.style.borderColor = 'inherit';
                count++;
                if (count > config.list.length - 1) {
                    count = 0;
                }
                inner.innerText = config.list[count];
            }
        }, config.interval);
    }
})();