<script setup>
import {ref} from 'vue'
const count=ref(0)
count.value=1000
function add(){
    count.value++
    if(count.value==1005) alert("回血值应该够了 别生气了")
}
defineProps({
    msg:String
})
</script>
<template>
    <div>
        <h1>{{msg}}</h1>
        <el-button type="success" @click="add">xixi{{count}}</el-button>
        <div v-if="count==1010">够了够了 别点了 别生气 不值得 这样更能鞭策你自己 你知道吧</div>
    </div>
</template>