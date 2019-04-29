/**
 *因为全局变量造成变量污染，最后的值会覆盖掉之前的
 *不能方便引用，但是因为自己写的太完美故保留！！
 */
;
(function() {
    'use strict'
    // 将slide轮播组件暴露出去，方便别的文件使用！
    window.lrCarousel = {
        init
    };
    //全局变量,整个js文件可见
    let carousel, item, config, count, lastindex;
    // 默认设置
    const defaultConfig = {
        mode: 'fade',
        interval: 1000,
    };
    /**************init一切的开始********************* */
    /**
     * 轮播1.滑动slide2.淡入淡出fade
     * @param {string} carouselSelector 轮播容器（选择器）
     * @param {string} itemSelector 轮播子级（选择器）
     * @param {Object} custom 用户设置
     */
    function init(carouselSelector, itemSelector, custom = {}) {
        //选中轮播容器
        carousel = document.querySelector(carouselSelector);
        //选中轮播子级
        item = carousel.querySelectorAll(itemSelector);
        //默认从第一页开始
        count = 0;
        //记录最后一页索引,方便后面调用
        lastindex = item.length - 1;
        //加载用户设置
        loadConfig(custom);
        //选择轮播方式
        carouselWay(config)
    }
    /** 
     *加载用户设置
     *@param {Object} custom 用户设置
     */
    function loadConfig(custom) {
        // 将用户设置和默认设置合并起来，存到全文变量中方便通篇调用
        config = Object.assign({}, defaultConfig, custom)
    };
    /**
     * 轮播方式
     * @param {Object} config 用户设置
     */
    function carouselWay(config) {
        //如用户选择淡入淡出
        if (config.mode == 'fade') {
            //一开始需要隐藏所有页
            hideAll();
            fade();
        } else {
            // 确保一开始就滚动
            slide();
        }
        // 每隔config.interval秒就滚动一次
        setInterval(() => {
            // 自增当前索引,即翻页效果;
            increment();
            config.mode == 'fade' ? fade() : slide();
        }, config.interval);
    };
    /**
     * 隐藏所有页,为fade做准备
     */
    function hideAll() {
        item.forEach(el => {
            el.style.opacity = 0;
        });
    }
    /**
     * 淡入淡出效果
     */
    function fade() {
        let prev = getPrev();
        let current = getCurrent();
        prev.style.opacity = 0;
        current.style.opacity = 1;
    };
    /**
     * 滑动效果
     */
    function slide() {
        let prev = getPrev();
        let current = getCurrent();
        let next = getNext();
        // 横向移动
        prev.style.left = -prev.offsetWidth + 'px';
        current.style.left = 0;
        next.style.left = next.offsetWidth + 'px';
        //调整覆盖次序,防止滑动中出现重叠抖动现象
        prev.style.zIndex = 1;
        current.style.zIndex = 99;
        next.style.zIndex = 0;
    }
    /**
     * 自增当索引,即翻页
     */
    function increment() {
        ++count
        //如索引为最后一页则返回首页
        if (count > lastindex) {
            count = 0
        }
    };
    /**
     * 获取上一页的元素对象
     * @return {HTMLElement} 
     */
    function getPrev() {
        // 如不是首页则-1;是则为最后一页 
        if (count != 0) {
            return item[count - 1]
        } else {
            return item[lastindex];
        }
    };
    /**
     * 获取当前页的元素对象
     * @return {HTMLElement} 
     */
    function getCurrent() {
        return item[count];
    };
    /**
     * 获取下一页的元素对象
     * @return {HTMLElement} 
     */
    function getNext() {
        if (count != lastindex) {
            return item[count + 1]
        } else {
            return item[0];
        }
    };

})();