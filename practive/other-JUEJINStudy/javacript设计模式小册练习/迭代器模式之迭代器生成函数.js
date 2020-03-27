function* iteratorGenerator() {
    yield '1号选手'
    yield '2号选手'
    yield '3号选手'
}

const iterator = iteratorGenerator()

iterator.next()
iterator.next()
iterator.next()

// 定义生成器函数，入参是任意集合
function iteratorGenerator(list) {
    var idx = 0
    var len = list.length
    return {
        next: function() {
            var done = idx >= len
            var value = !done ? list[idx++] : undefined
            return {
                done: done,
                value: value
            }
        }
    }
}
var iterator = iteratorGenerator(['1号选手', '2号选手', '3号选手'])
iterator.next()
iterator.next()
iterator.next()