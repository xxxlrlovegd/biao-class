;
(function() {
    'use strict'
    window.lrDropdown = { init };

    function init(triggleSelector = '.triggle', dropdownSelector = '.dropdown') {
        let trigger = document.querySelector(triggleSelector);
        let dropdown = document.querySelector(dropdownSelector);
        dropdown.hidden = true;
        dropdown.classList.add('lr-dropdown');
        trigger.classList.add('lr-trigger');
        // 在body上绑定事件
        document.body.addEventListener('click', (e) => {
            // 如果事件源是按钮，就直接打开或关闭dropdown
            if (e.target == trigger) {
                dropdown.hidden = !dropdown.hidden
                    // 此时已经没有必要做其他的事情，直接返回
                return
            }
            // 如果事件源在dropdown内部（点在dropdown内部）就啥也不干
            // 否则（点在dropdown外部）就隐藏dropdown
            //closest方法是查找父级节点
            if (!e.target.closest(dropdownSelector))
                dropdown.hidden = true;
        })
    };
})();