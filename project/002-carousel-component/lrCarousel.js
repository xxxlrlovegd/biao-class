;
(function() {
    'use strict'
    window.lrCarousel = { init };
    //默认设置
    const defaultConfig = {
        mode: 'fade',
        interval: 1000,
    };
    /**************init一切的开始******************** */
    /**
     * 轮播1.滑动slide2.淡入淡出fade
     * @param {string} carouselSelector 轮播容器（选择器）
     * @param {string} itemSelector 轮播子级（选择器）
     * @param {Object} custom 用户设置
     * 目前只做了3张图片的轮播，还要在进行优化！！
     */
    function init(carouselSelector, itemSelector, custom = {}) {
        //选中轮播容器
        let carousel = document.querySelector(carouselSelector);
        // 为轮播容器添加类，便于添加样式
        carousel.classList.add('lr-carousel');
        //选中轮播子元素
        let item = carousel.querySelectorAll(itemSelector);
        // 为轮播子元素添加类，便于添加样式
        item.forEach(el => {
            el.classList.add('lr-item')
        });
        //默认第一页开始播放
        let count = 0;
        //记录存储最后一页索引，方便后面调用！
        let lastindex = item.length - 1;
        //加载用户设置
        let config = Object.assign({}, defaultConfig, custom);
        //如用户选择淡入淡出
        if (config.mode == 'fade') {
            //一开始需要隐藏所有页
            item.forEach(el => {
                el.style.opacity = 0;
            });
            // 如不是首页则-1;是则为最后一页 
            if (count != 0) {
                item[count - 1].style.opacity = 0;
            } else {
                item[lastindex].style.opacity = 0;
            }
            item[count].style.opacity = 1;
        } else {
            // 确保一开始就滚动
            if (count != 0) {
                item[count - 1].style.left = -item[count - 1].offsetWidth + 'px';
                item[count - 1].style.zIndex = 1;
            } else {
                item[lastindex].style.left = -item[lastindex].offsetWidth + 'px';
                item[lastindex].style.zIndex = 1;
            }
            // 横向移动
            item[count].style.left = 0;
            //调整覆盖次序,防止滑动中出现重叠抖动现象
            item[count].style.zIndex = 99;
            if (count != lastindex) {
                item[count + 1].style.left = item[count + 1].offsetWidth + 'px';
                item[count + 1].style.zIndex = 0;
            } else {
                item[0].style.left = item[0].offsetWidth + 'px';
                item[0].style.zIndex = 0;
            }
        }
        // 每隔config.interval秒就滚动一次
        setInterval(() => {
            // 自增当前索引,即翻页效果;
            ++count
            //如索引为最后一页则返回首页
            if (count > lastindex) {
                count = 0
            }
            if (config.mode == 'fade') {
                if (count != 0) {
                    item[count - 1].style.opacity = 0;
                } else {
                    item[lastindex].style.opacity = 0;
                }
                item[count].style.opacity = 1;
            } else {
                // 确保一开始就滚动
                if (count != 0) {
                    item[count - 1].style.left = -item[count - 1].offsetWidth + 'px';
                    item[count - 1].style.zIndex = 1;
                } else {
                    item[lastindex].style.left = -item[lastindex].offsetWidth + 'px';
                    item[lastindex].style.zIndex = 1;
                }
                // 横向移动
                item[count].style.left = 0;
                //调整覆盖次序,防止滑动中出现重叠抖动现象
                item[count].style.zIndex = 99;
                if (count != lastindex) {
                    item[count + 1].style.left = item[count + 1].offsetWidth + 'px';
                    item[count + 1].style.zIndex = 0;
                } else {
                    item[0].style.left = item[0].offsetWidth + 'px';
                    item[0].style.zIndex = 0;
                }
            };
        }, config.interval);

        function newFunction() {
            return 'lr-item';
        }
    };
})();