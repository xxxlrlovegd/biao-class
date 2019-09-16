;
(function() {
    'use strict'
    window.boot = {
        set,
        get
    };
    /**
     * 放值
     */
    function set(key, val) {
        localStorage.setItem(key, JSON.stringify(val))
    }
    /**
     * 取值
     */
    function get(key) {
        let val = localStorage.getItem(key)
        if (val)
            return JSON.parse(val)
    }
})();