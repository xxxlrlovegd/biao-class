<template>
  <div class="container">
    <h1>近期文章</h1>
    <div class="post-list">
      <div v-for="it in postList" class="post">
        <a href="#"><h2>{{it.title}}</h2></a>
        <div class="preview">{{it.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../lib/api';
  
  export default {
    data () {
      return {
        postList : [{content:'这个冬天有点甜，嘻嘻嘻'},{content:"这是个测试哈哈哈哈哈test"}],
      };
    },
    mounted () {
      this.readPost();
    },
    methods : {
      readPost () {
        api('post/read')
          .then(r => { this.postList = r.data;});
      },
    },
  };
</script>
