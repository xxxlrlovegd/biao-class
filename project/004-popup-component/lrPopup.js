;
(function() {
    'use strict'
    window.lrPopup = {
        init
    };
    //默认配置
    let defaultConfig = {
        position: 'center',
        yoffset: 0,
        xoffset: 0,
        on: 'click',
        keyToHide: 'Escape'
    };
    /**
     * 设置必要的弹出层信息
     * @param {string} triggerSelector 点谁弹出（选择器）
     * @param {string} popupSelector 弹出谁（选择器）
     * @param {Object} custom 用户设置
     */
    function init(triggerSelector, popupSelector, custom) {
        // 加载用户设置
        let config = Object.assign({}, defaultConfig, custom);
        //选中控制弹窗按钮
        let trigger = document.querySelector(triggerSelector);
        // 选中弹窗
        let popup = document.querySelector(popupSelector);
        console.log(trigger, popupSelector, popup)
            // 弹窗默认隐藏
        popup.hidden = true;
        //为弹框添加类，方便为其添加样式
        popup.classList.add('lr-popup');
        // 创建遮罩层
        let mask = document.createElement('div');
        mask.classList.add('lr-mask');
        // 再body中加遮罩
        document.body.appendChild(mask);
        // 遮罩默认隐藏
        mask.hidden = true;
        // 弹窗打开监听事件
        trigger.addEventListener(config.on, () => {
            // 弹窗及遮罩显示
            popup.hidden = mask.hidden = false;
            //弹窗定位位置
            let position = config.position;
            let yoffset = config.yoffset;
            let xoffset = config.xoffset;
            let style = popup.style;
            let Width = window.innerWidth;
            let Height = window.innerHeight;
            let popupHeight = popup.offsetHeight;
            let popupWidth = popup.offsetWidth;
            switch (position) {
                // 上中
                case "top":
                case "top-center":
                case "center-top":
                    style.top = yoffset + 'px';
                    style.left = (Width / 2 - popupWidth / 2 + xoffset) + 'px';
                    break;
                    //下中
                case "bottom":
                case "bottom-center":
                case "center-bottom":
                    style.bottom = yoffset + 'px';
                    style.left = (Width / 2 - popupWidth / 2 + xoffset) + 'px';
                    break;
                    // 左中
                case "left":
                case "left-center":
                case "center-left":
                    style.top = (Height / 2 - popupHeight / 2 + yoffset) + 'px';
                    style.left = xoffset + 'px';
                    break;
                    // 右中
                case "right":
                case "right-center":
                case "center-right":
                    style.top = (Height / 2 - popupHeight / 2 + yoffset) + 'px';
                    style.right = xoffset + 'px';
                    break;
                    // 左上
                case "left-top":
                case "top-left":
                    style.top = yoffset + 'px';
                    style.left = xoffset + 'px';
                    break;
                    // 左下
                case "left-bottom":
                case "bottom-left":
                    style.bottom = yoffset + 'px';
                    style.left = xoffset + 'px';
                    break;
                    // 右上
                case "right-top":
                case "top-right":
                    style.top = yoffset + 'px';
                    style.right = xoffset + 'px';
                    break;
                    // 右下
                case "right-bottom":
                case "bottom-right":
                    style.bottom = yoffset + 'px';
                    style.right = xoffset + 'px';
                    break;
                    //居中
                default:
                    style.top = (Height / 2 - popupHeight / 2 + yoffset) + 'px';
                    style.left = (Width / 2 - popupWidth / 2 + xoffset) + 'px';
                    break;
            }
        });
        // 弹窗关闭事件
        mask.addEventListener(config.on, () => {
            popup.hidden = mask.hidden = true
        });
        // 弹窗关闭快捷方式
        window.addEventListener('keyup', (e) => {
            if (e.key == config.keyToHide)
                popup.hidden = maks.hidden = true
        })
    };
})();