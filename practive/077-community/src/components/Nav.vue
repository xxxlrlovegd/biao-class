<template>
<div class="nav">
     <Row>
        <i-Col span="8">  
        <div class="logo">
                <img src="" alt="">
            </div>
        </i-Col>
        <i-Col span="16">  
        <div class="search">
                <input type="search">
            </div>
            <div id="tourist">
                <a href="./login.html" class="nav-item">登录</a>
                <a href="./registe.html" class="nav-item">注册</a>
            </div>
            <div id="loggedIn">
                <a href="#" class="nav-item" id="navItemName"></a>
                <a href="#" onclick="logout()">登出</a>
            </div>
            </i-Col>
    </Row>
</div>
</template>