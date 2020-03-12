<template>
  <div class="main container">
    <form @submit.prevent="onSubmit">
      <h2>评论列表：</h2>
      <div class="comment-control" v-for="it in list">
        <p>被评论的文章名称：{{it.$post.title}}</p>
        <p>评论人名：{{it.name}}</p>
        <p>评论内容：{{it.content}}</p>
      </div>
    </form>
  </div >
</template>
<script>
  import api from '../lib/api';
  export default {
    data () {
      return {
        list    : [],
      };
    },
    mounted () {
      this.read();
    },
    methods : {
      read () {
          let param={
            with:[{
            model:'post',
            relation:'belongs_to',
            foreign_key:'post_id',
            as:'post'
            }],
          };
        api('comment/read',param)
          .then(r => {
            this.list = r.data;
          });
      },
    },
  };
</script>
<style>
.comment-control{
    border-bottom: 1px solid;
}
</style>