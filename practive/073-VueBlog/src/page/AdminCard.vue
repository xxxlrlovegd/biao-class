<template>
  <div class="main container">
    <form @submit.prevent="onSubmit">
      <h2>添加/更新分类</h2>
      <div class="input-control">
        <label>名称：</label>
        <input type="text" v-model="current.name">
      </div>
      <div class="input-control">
        <button type="submit">提交</button>
      </div>
    </form>
    <table>
      <thead>
      <th>id</th>
      <th>名称</th>
      <th style="text-align: center;">操作</th>
      </thead>
      <tbody>
      <tr v-for="it in list">
        <td>{{it.id}}</td>
        <td >{{it.name}}</td>
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
      };
    },
    mounted () {
      this.read();
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
        api(`card/${action}`, this.current)
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
         api('card/delete', {id})
          .then(r => {
            if (r.success) {
              this.read();
            }
          })
         .catch(function(err) {        
                 
                })
      },
      read () {
        api('card/read')
          .then(r => {
            this.list = r.data;
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
    max-width: 600px;
  }

  .main > * {
    margin-bottom: 1em;
  }
  td:last-of-type, th:last-of-type {
    text-align: center;
}
</style>
