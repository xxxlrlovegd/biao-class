<template>
<i-Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" class="container">
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
         <Form-Item prop="password2">
            <i-Input type="password" v-model="formInline.password2" placeholder="确认密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-Input>
        </Form-Item>
        <Form-Item>
            <i-Button type="primary" @click="handleSubmit('formInline')">注册</i-Button>
        </Form-Item>
    </i-Form>
</template>
<script>
import '../css/global.css'
import api from '../lib/api.js'
  export default {
        data () {
              const  validPassword = (rule, value, callback) => {
                    if (value!==this.formInline.password) {
                        callback(new Error('确认密码输入不正确'))
                    } else {
                        callback()
                    }
                };
            return {
                formInline: {
                    username: '',
                    password: '',
                    password2:''
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码至少6位', trigger: 'blur' }
                    ],
                     password2: [
                           { required: true, message: '请再次确认密码', trigger: 'blur' },
                          { validator: validPassword, trigger: 'blur' }
                    ]
                }
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
                        api('user/create', this.formInline)
                        .then(r => {
                                    if (r.success) {
                                      this.$Message.success('注册成功!');
                                      this.$router.push('/login');
                                    }
                                }); 
                     
                    } else {
                        return
                    }
                })
            }
        }
    }
</script>