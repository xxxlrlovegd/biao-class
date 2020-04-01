<template>
<i-Form ref="formInline"  :model="formInline" :rules="ruleInline"  :label-width="80" class="container">
        <Form-Item prop="username">
            <i-Input type="text" v-model="formInline.username" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-Input>
        </Form-Item>
        <Form-Item prop="password">
            <i-Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-Input>
        </Form-Item>
        <div v-if="errMsg" class="error">
           用户名或者密码输入错误！
        </div>
        <Form-Item>
            <i-Button type="primary" @click="handleSubmit('formInline')">登录</i-Button>
        </Form-Item>
    </i-Form>
</template>
<script>
import '../css/global.css'
import api from '../lib/api.js'
import session from '../lib/session'
  export default {
        data () {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                   ruleInline: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                },
                errMsg:false,
            }
        },
        mounted() {
             console.log("====", this.$route)
            console.log("====11", this.$router)
        },
        methods: {
            handleSubmit(name) {
                 this.$refs[name].validate((valid) => {
                    if (valid) {
                            let params = {
                                where: {
                                    and: {
                                        username:this.formInline.username,
                                        password:this.formInline.password
                                        },
                                },
                            };
                        api('user/first',params)
                        .then(r => {
                                    if (r.data) {
                                        this.errMsg=false
                                        session.login(r.data.id,r.data, '/')
                                      this.$Message.success('登录成功!');
                                    }else{
                                        this.errMsg=true
                                    }
                                }); 
                     
                    } else {
                        this.errMsg=false
                        return
                    }
                })
         
            }
        }
  }
</script>