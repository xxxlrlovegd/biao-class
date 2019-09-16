;
(function() {
    'use strict'

    function copy(obj) {
        return Object.assign({}, obj)
    }
    var app = new Vue({
        el: '#main',
        data() {
            return {
                list: [],
                last_id: 0,
                current: {}
            }
        },
        mounted() {
            this.list = boot.get('list') || this.list;
            this.last_id = boot.get('last_id') || this.last_id;
        },
        methods: {
            merge() {
                var title = this.current.title;
                if (!title && title !== 0) return;
                var todo = copy(this.current);
                this.last_id++;
                boot.set('last_id', this.last_id);
                todo.id = this.last_id;
                this.list.push(todo);
                console.log(this.list)
                this.reset_current()
            },
            reset_current() {
                this.set_current({});
            },
            set_current(todo) {
                this.current = copy(todo)
            }
        },
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