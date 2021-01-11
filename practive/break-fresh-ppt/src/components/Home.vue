<template>
 <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',background: '#19be6b',padding: '1px 50px',height: '62px'}">
                <home-menu></home-menu>
            </Header>
            <Content :style="{margin: '90px 66px 0 ', background: '#fff', minHeight: '520px'}">
                 <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">技术创新<br> 参与人：谢春明&nbsp;李刚&nbsp;路锐&nbsp;刘淳&nbsp;顾瑞&nbsp;梁悦</Footer>
        </Layout>
    </div>
</template>
<script>
import HomeMenu from './Menu'
export default {
    data() {
        return {
            
        }
    },
    components:{
        'home-menu':HomeMenu
    }
}
</script>
<style lang="less" scoped>
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>