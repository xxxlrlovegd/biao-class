<template>
  <div class="container">
    <h1>近期文章{{res}}</h1>
    <div class="post-list">
      <div v-for="it in postList" class="post">
        <router-link :to="'/post/' + it.id"
          ><h2>{{ it.title }}</h2></router-link
        >
        <div class="post-content">{{ it.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../lib/api";
import largeNumber from "large-number-lr";
export default {
  data() {
    return {
      res:'',
      postList: [],
    };
  },
  mounted() {
    this.readPost();
    this.res = largeNumber("999", "1");
    this.$nextTick(() => {
      console.log(this.res);
    });
  },
  methods: {
    readPost() {
      api("post/read").then((r) => {
        this.postList = r.data;
      });
    },
  },
};
</script>
