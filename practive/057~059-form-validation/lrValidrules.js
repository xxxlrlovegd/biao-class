/**
 * 验证插件，思路是验证input框里输入的数据是否正确；
 * 1.每一个输入框的基本验证规则；并将验证规则解析处理（数据层）
 * 2.将验证后的错误信息渲染到每个输入框下（视图层）
 * 3.点击提交的时候是整个表单验证一遍，而点击每个输入框时则验证的是每个输入框
 * 4.参考iview里表单验证的样式用js实现一下 
 * */
;
(function() {
    'use strict'
    //暴露接口
    window.validrules = {
            boot,
        }
        /*****一切的开始******/
    function boot(selector) {
        let el = document.querySelector(selector);
        //如果是表单元素
        if (el.nodeName == 'FORM') {
            //绑定键盘事件，每次修改都会进行验证
            bindFormKeyup(el);
            //绑定提交事件，确保提交时进行验证
            bindSubmit(el);
            //绑定重置事件，清空数据及验证信息
            bindReset(el);
        } else {
            //绑定输入框事件
            bindInputKeyup(el)
        }
    }
    /**
     * 验证表单中某个输入框数据
     * @param {HTMLFormElement} form
     */
    function bindFormKeyup(form) {
        let inputs = form.querySelectorAll('[data-rule]');
        inputs.forEach(input => {
            bindInputKeyup(input)
        })
    }
    /**
     * 验证输入框数据
     * @param {HTMLFormElement} input
     */
    function bindInputKeyup(input) {
        input.addEventListener('keyup', e => {
            //对表单中的莫个输入框进行验证时提交按钮可触发
            // let submit = document.querySelector('[type=submit]')
            // submit.disabled = false
            //error错误信息
            let errors = validateInput(input)
                //将错误信息渲染出来
            showInputError(input, errors)
        })
    }
    /**
     * 表单重置事件
     * @param {HTMLElement} form 
     */
    function bindReset(form) {
        let submit = form.querySelector('[type=submit]')
        let reset = form.querySelector('[type=reset]');
        let inputs = form.querySelectorAll('[data-rule]');
        //监听重置按钮，触发则将输入框数据及验证清空,提交按钮可触发
        reset.addEventListener('click', e => {
            inputs.forEach(input => {
                let errors = validateInput(input);
                if (errors.length > 0) {
                    errors = [];
                    input.$errorContainer.innerHTML = ''
                    input.$errorContainer.hidden = true;
                    submit.disabled = false
                }
            })
        })
    }
    /**
     * 表单提交事件
     * @param {HTMLElement} form 
     */
    function bindSubmit(form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            validateForm(form);
        })
    }
    /**
     * 验证整个表单数据
     * @param {HTMLElement} form 
     */
    function validateForm(form) {
        let submit = form.querySelector('[type=submit]');
        let inputs = form.querySelectorAll('[data-rule]');
        inputs.forEach(input => {
            //验证表单信息
            let errors = validateInput(input);
            // 有错误信息则不可触发提交按钮
            if (errors.length > 0) {
                submit.disabled = true;
            } else {
                submit.disabled = false;
            }
            //渲染错误信息
            showInputError(input, errors)
        })
    }
    /**
     * 验证输入框数据
     * @param {HTMLFormElement} input
     * @return {array} 错误信息
     */
    function validateInput(input) {
        let rule = input.dataset.rule;
        let value = input.value;
        let errors = validate(value, rule)
        return errors
    }

    /**
     * 输入框的验证信息解析验证
     * @param {string} value输入框的值 
     * @param {objec} strRule输入框规则 
     */
    function validate(value, strRule) {
        return applyRules(value, parseRules(strRule))
    }
    /**
     * 将输入框验证信息放入基础规则
     * @param {*} value 输入框的值
     * @param {object} rules 输入框规则 
     * @return {Array} errors 错误信息
     */
    function applyRules(value, rules) {
        let errors = [];
        for (let key in rules) {
            let ru = rules[key]
            try {
                is[key](value, ru)
            } catch (e) {
                errors.push(e)
            }
        }
        return errors
    }
    /**
     * 解析验证规则
     * @param {string} str 
     * @return {object} rule
     */
    function parseRules(str) {
        let rule = {};
        let ruleArr = str.split('|')
        ruleArr.forEach(e => {
            let key = e.split(":")[0]
            let comparison = e.split(":")[1]
            let numRules = ['numeral', 'min', 'max', 'between', 'minLength', 'maxLength']
            if (!comparison) {
                comparison = true
            } else {
                if (numRules.indexOf(key) !== -1) {
                    comparison = parseFloat(comparison)
                }
                if (key == 'in') {
                    comparison = comparison.split(',');
                }
            }
            rule[key] = comparison
        });
        return rule
    };

    /**
     *基础验证规则 
     *将每一个验证信息放到对象里
     */
    let is = {
        // 是否是数字
        numeral(value) {
            if (isNaN(parseFloat(value)))
                throw '不是合法数字'
        },
        // 是否小于
        min(value, stand) {
            if (value < stand)
                throw '不可小于' + stand;
        },
        // 是否大于
        max(value, stand) {
            if (value > stand)
                throw '不可大于' + stand;
        },
        // 是否在大于小于之间
        between(value, min, max) {
            if (is.min(value, min) && is.max(value, max)) return
            throw '必须小于' + max + '且大于' + min;
        },
        // 是否小于长度
        minLength(value, len) {
            if (String(value).length >= len) return
            throw '长度不可小于' + len;
        },
        //是否大于长度 
        maxLength(value, len) {
            if (String(value).length <= len) return
            throw '长度不可大于' + len;
        },
        // 是否之间长度
        betweenLen(value, min, max) {
            if (is.minLength(value, min) && is.maxLength(value, max)) return
            throw '长度必须小于' + max + '且大于' + min;
        },
        //是否正数
        positive(value) {
            if (value < 0)
                throw '不可小于0';
        },
        // 是否负数
        nositive(value) {
            if (value > 0)
                throw '不可大于0';
        },
        // 是否开头
        startWith(value, stand) {
            if (value.startsWith(stand)) return
            throw '必须以"' + stand + '"开头';
        },
        // 是否结尾
        endWith(value, stand) {
            if (value.endsWith(stand)) return
            throw '必须以"' + stand + '"结尾';
        },
        // 是否包含
        include(value, stand) {
            if (value.includes(stand)) return
            throw '必须包含"' + stand + '"';
        },
        /**
         * 是否存在在数组里
         * param:{mix}任意类型
         * param:{Array}
         */
        in (value, stand) {
            if (stand.indexOf(value) != -1) return
            throw '必须在' + comparison + '之中';
        },
        // 验证用户名此处需学习正则
        username(value) {
            // 由数字和字母汉字组成并且长度为6到10
            let reg = (/^[a-zA-Z0-9\u4E00-\u9FFF]{6,10}$/)
            if (!reg.test(value))
                throw '不合法的用户名';
        },
        // 验证手机号
        phone(value) {
            let reg = (/^[1][3|5|7|8][0-9]{9}$/)
            if (!reg.test(value))
                throw '不合法的手机号';
        },
        //邮箱
        email(value) {
            let reg = (/^\w+@\w+\.\w+$/)
            if (!reg.test(value))
                throw '不合法的邮箱';
        },
    };
    /**
     * 将验证错误信息渲染出来
     * @param {*HTMLElement} input 
     * @param {*Array} errors 
     */
    function showInputError(input, errors) {
        let submit = document.querySelector('[type=submit]')
        if (!errors.length) {
            // 如果没有错误信息则隐藏错误信息
            if (input.$errorContainer)
                input.$errorContainer.hidden = true;
            submit.disabled = false
            return
        }
        submit.disabled = true
            //输入框后面同级元素只读
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error')) {
            //缓存到input元素中方便使用
            let ec = input.$errorContainer = document.createElement('div');
            ec.classList.add('error');
            input.insertAdjacentElement('afterend', ec)
        }
        let html = '';
        errors.forEach(err => {
            html += `<div>${err}</div>`;
        })
        input.$errorContainer.innerHTML = html
        input.$errorContainer.hidden = false;
    }
})();