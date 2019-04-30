;
(function() {
    'use strict'
    window.lrPopout = {
        init
    };

    function init() {
        // 所有点击过的按钮
        let triggle = new Set();
        // 上次点击过的按钮
        let lastpopout;
        document.addEventListener('click', e => {
            let el = e.target;
            let content = el.dataset.popout;
            if (content) {
                // 如果至少点击过一个按钮（不是第一次点击），
                // 那么就隐藏上一次点击
                if (lastpopout)
                // 隐藏popout
                    lastpopout.$popout.hidden = true;
                // 将本次点击的按钮存为lastTrigger，
                // 为下次点击做准备
                lastpopout = el;
                // 显示对应的Popup
                // 如果弹出框不存在
                if (!el.$popout) {
                    // 新建弹出框元素
                    let popout = document.createElement('div');
                    // 设置弹出框内容
                    popout.innerText = content;
                    // 为弹出框添加.lr-popout类
                    popout.classList.add('lr-popout');
                    // 将弹出框添加到DOM中
                    document.body.appendChild(popout);
                    // 将弹出框对象存在按钮对象上
                    el.$popout = popout;
                    // 记录到triggers中，方便统一隐藏
                    triggle.add(el);
                    //调整Popout至合适的位置
                    popout.style.left = (el.getBoundingClientRect().left) + 'px'
                    popout.style.top = (el.getBoundingClientRect().top + popout.offsetHeight) + 'px';
                } else {
                    // 否则直接显示弹出框
                    el.$popout.hidden = false;
                }
            } else {
                // 隐藏全部Popout
                triggle.forEach(button => {
                    button.$popout.hidden = true;
                })
            }
        });
    };

})();