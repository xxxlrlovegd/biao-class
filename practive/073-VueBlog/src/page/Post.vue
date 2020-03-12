<template>
  <div class="container">
    <h1>{{post.title}}</h1>
    <div class="post-content">{{post.content}}</div> 
    <hr>
      <div class="input-control" v-for="item in commentData" style="margin:10px">
        <span>评论人名：{{item.name}} 评论内容：{{item.content}} <button @click="remove(item.id)">删除</button></span>
      </div>
     <button @click="commentEvent">评论</button>
      <form v-show="isShow" @submit.prevent="onSubmit">
      <h2>添加评论</h2>
      <div class="input-control">
        <label>你自己的名称</label>
        <input type="text" v-model="current.name">
      </div>
      <div class="input-control">
        <label>内容</label>
        <textarea v-model="current.content"></textarea>
      </div>
      <div class="input-control">
        <button type="submit">提交</button>
      </div>
    </form>
    </div>
</template>

<script>
  import api from '../lib/api';
  
  export default {
    data () {
      return {
        post : {},
        current:{},
        isShow:false,
        commentData:[],
        id:0,
      };
    },
    mounted () {
      this.id=this.$route.params.id
      this.rendComment()
      this.findPost(this.$route.params.id);
    },
    methods : {
      commentEvent(){
      this.isShow=true
      this.current={}
        },
      findPost (id) {
        api('post/find',{id})
          .then(r => { this.post = r.data;});
      },
       rendComment () {
        let param={
            where:{
                and:{
                    post_id:this.id,
                }
            }
        }
        api('comment/read',param)
          .then(r => { this.commentData = r.data;});
      },
      remove(id){
           api('comment/delete',{id})
           .then(r => {
            if (r.success) {
            this.rendComment()
            }
          })
         .catch(function(err) {
                 
                })
      },
      onSubmit(){
        api('comment/create',{
            'post_id':this.id,
            'content':this.current.content,
            'name':this.current.name
            })
            .then(r => {
            if (r.success) {
            this.isShow=false;
            this.rendComment()
            }
          })
         .catch(function(err) {
                 
                })
      }
    },
  };
</script>
