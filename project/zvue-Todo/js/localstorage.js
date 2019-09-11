;
(function() {
    'use strict'
    window.boot = {
        set,
        get
    };
    /**
     * 放值
     * @param object json转string
     */
    function set(str) {
        str = JSON.parse(JSON.stringify(str))
        for (let i in str) {
            localStorage.setItem(i, str[i])
        }
    }
    /**
     * 取值
     * @param string 
     */
    function get(key) {
        return localStorage.getItem(key)
    }
    let str1 = {
        name: 'hhhh',
        sex: 'female',
        age: 12
    }
    boot.set(str1)
    let data = boot.get("name")
    console.log("data===", data)
})();