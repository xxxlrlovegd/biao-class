<template>
<i-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
    <i-button @click="handleEdit"> <span v-if="isShowEditBt==!isShowEditBt">取消</span>编辑</i-button>
        <FormItem  label="用户名" prop="username">
            <i-input type="text" v-model="formCustom.username" placeholder="用户名">
            </i-input>
        </FormItem>
        <FormItem label="昵称">
            <i-input type="text" v-model="formCustom.name"  placeholder="昵称">
            </i-input>
        </FormItem>
        <FormItem label="自我描述">
            <i-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="formCustom.info"  placeholder="自我描述">
            </i-input>
        </FormItem>
        <FormItem>
            <i-button type="primary" @click="handleSubmit('formCustom')">确定修改</i-button>
        </FormItem>
    </i-form>
</template>
<script>
    export default {
        data () {
            const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    if (value.length<= 6) {
                        // 对第二个密码框单独验证
                        callback(new Error('用户名至少6位'));
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
                }
            }
        },
        methods: {
             handleEdit () {

            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
           
        }
    }
</script>