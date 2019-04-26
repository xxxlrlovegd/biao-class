;
(function() {
    'use strict'

    // 将lrForm暴露出去,否则别的文件访问不到
    window.lrForm = {
        getData, //相当于getData:getData,ES6语法如果value即方法名与key相同value可省略
        setData, //同上
    }

    /**
     * 解析表单数据（取值）
     * @param {HTMLFormElement} form 选好的form元素
     * @return {Object}
     */

    function getData(form) {
        //初始化空对象，否则解析后的数据没有地方存
        let data = {};
        //取到form表单下所有输入框有name属性
        let inputs = form.querySelectorAll('[name]');
        //循环所有的输入框
        inputs.forEach(input => {
            // 检查输入框的类型
            switch (input.type) {
                //如果是数字,将value转换成数字类型
                case 'number':
                    data[input.name] = parseFloat(input.value);
                    break;
                    // 如果是单选，查看是否勾选
                case 'radio':
                    // 如果没勾选则跳过
                    if (!input.checked)
                        return
                    data[input.name] = input.value;
                    break;
                case 'checkbox':
                    // 如果第一次碰到复选框,则将值转换成数组
                    if (!Array.isArray(data[input.name])) {
                        data[input.name] = [];
                    }
                    // 如勾选则推到数组中
                    if (input.checked)
                        data[input.name].push(input.value);
                    break;
                case "date":
                case "week":
                    data[input.name] = input.valueAsDate;
                    break;
                    //默认情况直接取字符串
                default:
                    data[input.name] = input.value;
                    break;
            }
        });
        // 返回解析好的数据
        return data
    }

    /**
     * 通过纯数据填充表单（存值）
     * @param {HTMLFormElement} form
     * @param {Object} data
     */
    function setData(form, data) {
        // 循环数据的每一项
        for (let key in data) {
            // 取到本项对应的输入框
            let input = form.querySelector(`[name='${key}']`);
            // 检查输入框类型
            switch (input.type) {
                case 'radio':
                    let radio = form.querySelector(`[type='radio'][name='${key}'][value='${data[key]}']`);
                    radio && (radio.checked = true);
                    break;
                case 'checkbox':
                    if (Array.isArray(data[key])) {
                        data[key].forEach(i => {
                            let checkbox = form.querySelector(`[type='checkbox'][name='${key}'][value='${i}']`);
                            checkbox && (checkbox.checked = true);
                        })
                    }
                    break;
                default:
                    input.value = data[key];
                    break;
            }
        }
    }
})();