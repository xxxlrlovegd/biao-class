;
(function() {
    'use strict'
    /**
     * 合并对象
     * @param {Object}} obj 
     */
    function copy(obj) {
        return Object.assign({}, obj)
    }
    var alert_sound = document.getElementById('alert-sound')
    var Event = new Vue();
    Vue.component('task', {
        template: '#task-tpl',
        props: ['todo'],
        methods: {
            action(name, params) {
                Event.$emit(name, params);
            }
        }
    })
    var app = new Vue({
        el: '#main',
        data() {
            return {
                list: [],
                last_id: 0,
                current: {},
            }
        },
        mounted() {
            var me = this
            this.list = boot.get('list') || this.list;
            this.last_id = boot.get('last_id') || this.last_id;
            var time = setInterval(() => {
                app.check_alerts();
            }, 1000);
            Event.$on('toggle_complete', function(params) {
                if (params) {
                    me.toggle_complete(params)
                }
            })
            Event.$on('remove', function(params) {
                if (params) {
                    me.remove(params)
                }
            })
            Event.$on('set_current', function(params) {
                if (params) {
                    me.set_current(params)
                }
            })
            Event.$on('toggle_detail', function(params) {
                if (params) {
                    me.toggle_detail(params)
                }
            })
        },
        methods: {
            /**
             * 是否提示
             */
            check_alerts() {
                this.list.forEach((item, i) => {
                    if (!item.alert_at || item.alert_confirmed) return;
                    var alert_at = (new Date(item.alert_at)).getTime();
                    var now = (new Date()).getTime();
                    if (now >= alert_at) {
                        alert_sound.play();
                        var confirmed = confirm(item.title);
                        Vue.set(this.list[i], 'alert_confirmed', confirmed);
                    }
                });
            },
            /**
             * 是否完成
             */
            toggle_complete(id) {
                var index = this.find_index(id);
                Vue.set(this.list[index], 'completed', !this.list[index].completed);
            },
            /**
             * todo列表信息
             */
            merge() {
                var is_update, id;
                is_update = id = this.current.id;
                if (is_update) {
                    var index = this.find_index(id)
                    Vue.set(this.list, index, copy(this.current))
                } else {
                    var title = this.current.title;
                    if (!title && title !== 0) return;
                    var todo = copy(this.current);
                    this.last_id++;
                    boot.set('last_id', this.last_id);
                    todo.id = this.last_id;
                    this.list.push(todo);
                }
                this.reset_current();
            },
            /**
             * 清空输入框数据
             */
            reset_current() {
                this.set_current({});
            },
            /**
             * 更新current对象
             * @param {Object} todo 
             */
            set_current(todo) {
                this.current = copy(todo)
            },
            /**
             * 删除数据
             */
            remove(id) {
                var index = this.find_index(id)
                this.list.splice(index, 1)
            },
            /**
             * 根据id查找数组index
             */
            find_index(id) {
                return this.list.findIndex(item => {
                    return item.id == id
                })
            },
            /**
             * 详细信息
             */
            toggle_detail(id) {
                var index = this.find_index(id)
                Vue.set(this.list[index], 'show_detail', !this.list[index].show_detail)
            }
        },
        /**
         * 监听list,有变化则存到localstorge里
         */
        watch: {
            list: {
                deep: true,
                handler(newval, oldval) {
                    if (newval) {
                        boot.set('list', newval);
                    } else {
                        boot.set('list', []);
                    }
                }
            }
        }
    });
})();