<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
console.log(count)
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <p>
      Edit111122211114444
      <code>components/Hello5555World.vue</code> to test hossst module replacement.
    </p>
  </div>
</template>

<style scoped>
a {
  color: #22b983;
}
</style>
