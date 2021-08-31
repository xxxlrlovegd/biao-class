<script setup>
import { ref } from "vue";

const count = ref(0);
defineProps({
  msg: String
}) 
</script>
<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button type="success" @click="count++"
      >aaaaaaaaaaaaa！！！！{{ count }}</el-button
    >
  </div>
</template>