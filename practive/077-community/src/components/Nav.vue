<template>
<div class="nav">
     <Row>
        <i-Col span="8">  
        <div class="logo">
                <img src="" alt="">
            </div>
        </i-Col>
        <i-Col span="16" class="text-right">  
        <div class="search" >
                <input type="search">
            </div>
            <div v-if="!session.loggedIn()" id="tourist">
                <router-link  class="nav-item" to="/login">登录</router-link>
                <router-link  class="nav-item" to="/registe">注册</router-link>
            </div>
            <div v-else id="loggedIn">
                <router-link  class="nav-item" to="/setting/me">{{session.user().username}}</router-link>
                <a href="#" @click="session.logout()">登出</a>
            </div>
            </i-Col>
    </Row>
</div>
</template>
<style>
    .text-right{
        display: inline-block; 
        text-align: right;
    }
   .text-right>*,  .nav-item{
        display: inline-block !important;
        padding:0 2px;
    }
</style>
<script>
import session from '../lib/session'
export default {
    data(){
        return {
            session
        }
    }
}
</script>