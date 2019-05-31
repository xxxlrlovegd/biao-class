;
(function() {
    'use strict'
    let is = {
            // 是否是数字
            numeral(value) {
                return !isNaN(parseFloat(value))
            },
            // 是否小于
            min(value, stand) {
                if (is.numeral(value)) return value >= stand
                return false;
            },
            // 是否大于
            max(value, stand) {
                if (is.numeral(value)) return value <= stand
                return false;
            },
            // 是否在大于小于之间
            between(value, min, max) {
                return is.min(value, min) && is.max(value, max)
            },
            // 是否小于长度
            minLength(value, len) {
                return String(value).length >= len
            },
            //是否大于长度
            maxLength(value, len) {
                return String(value).length <= len
            },
            // 是否之间长度
            betweenLen(value, min, max) {
                return is.minLength(value, min) && is.maxLength(value, max)
            },
            //是否正数
            positive(value) {
                if (is.numeral(value)) return value > 0
                return false;
            },
            // 是否负数
            nositive(value) {
                if (is.numeral(value)) return value < 0
                return false;
            },
            // 是否开头
            startWith(value, stand) {
                return value.startsWith(stand)
            },
            // 是否结尾
            endWith(value, stand) {
                return value.endsWith(stand)
            },
            // 是否包含
            include(value, stand) {
                console.log(value, stand)
                return value.includes(stand)
            },
            /**
             * 是否存在在数组里
             * param:{mix}任意类型
             * param:{Array}
             */
            in (value, stand) {
                return stand.indexOf(value) != -1
            },
            // 验证用户名此处需学习正则
            username(value) {
                // 由数字和字母汉字组成并且长度为6到10
                let reg = (/^[a-zA-Z0-9\u4E00-\u9FFF]{6,10}$/)
                return reg.test(value)
            },
            // 验证手机号
            phone(value) {
                let reg = (/^[1][3|5|7|8][0-9]{9}$/)
                return reg.test(value)
            },
            //邮箱
            email(value) {
                let reg = (/^\w+@\w+\.\w+$/)
                return reg.test(value)
            },
        }
        // console.log(is.numeral("ahaha"))
        // console.log(is.min(1, 2))
        // console.log(is.minLength(["hh9"], 4))
        // console.log(is.betweenLen("hahhah", 2, 5))
        // console.log(is.in('hh', ['hh', 'haha', 'beauty']))
        // console.log(is.include("fd32fz哈", 'p8888888888p'))
        // console.log(is.startWith("123455", 2))
        // console.log(is.positive(8));
        // console.log(is.phone(15145933))
})();