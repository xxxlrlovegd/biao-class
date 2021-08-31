<script setup>
import {ref} from "vue"
defineProps({
    msg:String,
})
const count=ref(0)
</script>
<template>
    <div>
        <h1>{{msg}}</h1>
        <el-button type="warning" @click="count++">点击增加回血值{{count}}</el-button>
    </div>
</template>

