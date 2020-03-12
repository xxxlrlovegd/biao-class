<template>
  <div class="main container">
    <form @submit.prevent="onSubmit">
      <h2>添加/更新文章</h2>
      <div class="input-control">
        <label>分类</label>
        <select type="text" v-model="current.card_id">
          <option v-for="item in cardData" :value="item.id">{{item.name}}</option>
        </select>
        <br>
        <label>标题</label>
        <input type="text" v-model="current.title">
      </div>
      <div class="input-control">
        <label>内容</label>
        <textarea v-model="current.content"></textarea>
      </div>
      <div class="input-control">
        <button type="submit">提交</button>
      </div>
    </form>
    <table>
      <thead>
      <th>标题</th>
      <th>内容</th>
      <th>分类</th>
      <th style="text-align: center;">操作</th>
      </thead>
      <tbody>
      <tr v-for="it in list">
        <td>{{it.title}}</td>
        <td :title="it.content">{{it.content|cut}}</td>
        <td>{{it.$cardInfo?it.$cardInfo.name:' '}}</td>
        <td>
          <button @click="remove(it.id)">删除</button>
          <button @click="updateEvent(it)">更新</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div >
</template>

<script>
  import '../css/admin.css';
  import api from '../lib/api';
  export default {
    data () {
      return {
        current : {},
        list    : [],
        cardData:[],
      };
    },
    filters:{
      cut(value){
           return value.length<20?value:value.substring(0,20)+'...'
      },
    },
    mounted () {
      this.read();
      this.readCard();
    },
    methods : {
      onSubmit () {
        this.createOrUpdate();
      },
    updateEvent(param){
      this.current=JSON.parse(JSON.stringify(param)) 
    },
      createOrUpdate () {
        let action = this.current.id ? 'update' : 'create';
        api(`post/${action}`, this.current)
          .then(r => {
            if (r.success) {
              this.read();
              this.resetCurrent();
            }
          })
         .catch(function(err) {
                 
                })
      },

      remove (id) {
         api('post/delete', {id})
          .then(r => {
            if (r.success) {
              this.read();
            }
          })
         .catch(function(err) {        
                 
                })
      },

      read () {
        let param={
        with:[{
          model:'card',
          relation:'belongs_to',
          foreign_key:'card_id',
          as:'cardInfo'
        }
        ],
        };
        api('post/read',param)
          .then(r => {
            this.list = r.data;
          });
      },
      readCard(){
          api('card/read')
          .then(r => {
            this.cardData = r.data;
          });
      },
      resetCurrent () {
        this.current = {};
      },
    },
  };
</script>

<style>
  .main {
    width: 80%;
  }

  .main > * {
    margin-bottom: 1em;
  }
</style>
