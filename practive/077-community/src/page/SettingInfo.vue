<template>
<div>
 <i-button @click="isShowEditBt=!isShowEditBt"> <span v-if="isShowEditBt">取消</span>编辑</i-button>
<i-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" :disabled="updatePending">
        <FormItem  label="用户名" prop="username">
            <i-input type="text" v-model="formCustom.username" placeholder="用户名">
            </i-input>
        </FormItem>
        <FormItem label="昵称">
            <span v-if="!formCustom.name && !isShowEditBt">-</span>
            <i-input v-else type="text" v-model="formCustom.name"  placeholder="昵称">
            </i-input>
        </FormItem>
        <FormItem label="自我描述">
            <span v-if="!formCustom.info && !isShowEditBt">-</span>
            <i-input  v-else type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="formCustom.info"  placeholder="自我描述">
            </i-input>
        </FormItem>
        <FormItem>
            <i-button v-show='isShowEditBt' type="primary" @click="handleSubmit('formCustom')">确定修改</i-button>
        </FormItem>
    </i-form>
</div>
</template>
<script>
import api from '../lib/api'
import store from '../lib/store'
    export default {
        data () {
            const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    console.log(value.length)
                    if (value.length< 4) {
                        callback(new Error('用户名至少4位'));
                    }
                    callback();
                }
            };
            
            return {
                isShowEditBt:false,
                formCustom: {
                    username: '',
                    name: '',
                    info: ''
                },
                ruleCustom: {
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                },
                updatePending:false
            }
        },
        mounted(){
        api('user/find',{id:store.get('user').id})
        .then(r=>{
            if(!r.success)
                return
            this.formCustom=r.data
        })
        },
        methods: {
             handleEdit () {
                 this.isShowEditBt=true
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.isExitUser()
                        api('user/update',this.formCustom)
                        .then(r=>{
                            this.formCustom=r.data;
                            this.isShowEditBt=false;
                            this.updatePending=false;
                        })
                    } 
                })
            },
           isExitUser(){
               api('user/exists',{where:{and:{username:this.formCustom.username}}})
               .then(r=>{
                   let usernameChanged=this.formCustom.username != store.get('user').username
                   if(r.data &&usernameChanged){
                       this.$Message.error('用户名已存在！！')
                       this.updatePending=false
                       this.isShowEditBt=true;
                       return 
                   }
               })
           }
        }
    }
</script>