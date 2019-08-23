var app = new Vue({
    el: '#app',
    data() {
        return {
            items: [
                'a',
                'b',
                'c',
                'd',
                'e',
                'f'
            ],
            isShow: true,
            txt: '显示全部',
            num: 3
        }
    },
    methods: {
        showMore() {
            console.log('1', this.isShow);
            this.isShow = !this.isShow;
            console.log('2', this.isShow);
            this.num = this.isShow ? 3 : this.items.length;
            this.txt = this.isShow ? '显示全部' : '收起'
        }
    }
})