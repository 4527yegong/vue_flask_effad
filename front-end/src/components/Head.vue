
<template>
    <div id="head" class="header-content">
        <div class="logo">
            <a href="#">我的网站</a>
        </div>
        <nav>
            <ul>
                <li><a href="#">主页</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">服务</a></li>
                <li><a href="#">联系方式</a></li>
            </ul>
        </nav>
        <div class="search">
            <input type="text" placeholder="搜索...">
            <button type="submit">搜索</button>
        </div>
    </div>
</template>

<!-- 页面其他内容 -->
<style>
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

.header-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;


    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #515050;
    color: #fff;
    z-index: 999;
}

.logo a {
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    margin-left: 100px;
    margin-right: 0;
}

nav {
    margin-left: 100px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: flex-start; /* 默认值，项目会靠左排列 */
    margin-left: 50px;
}

nav ul li {
    margin-left: 20px;
}

nav a {
    /* font-size: 30px; */
    color: #fff;
    text-decoration: none;
}

.search {
    display: flex;
    margin-left: 40%;
}

.search input {
    padding: 5px;
    border: 1px solid #ddd;
}

.search button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

/* 响应式设计 */
@media (max-width: 600px) {
    .header-content {
        flex-direction: column;
    }

    nav ul {
        margin-bottom: 10px;
    }

    .search {
        width: 100%;
    }
}
</style>


