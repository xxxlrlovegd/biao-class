<template>
 <Row>
        <i-col span="8" style="mragin">
            <div>
                <router-link to='/setting/me'>基本设置</router-link>
            </div>
            <div>
                <router-link to='/setting/security'>安全设置</router-link>
            </div>
        </i-col>
        <i-col span="16">
            <router-view></router-view>
        </i-col>
    </Row>
</template>
<script>
// import api from '../lib/api.js'
// import session from '../lib/session'
  export default {
  }
</script>