<template>
    <div>
        Hi!
        第一页
        <br/>
        <!-- 路由路径绑定的第一种方式 -->
        <!-- <router-link :to="{path: '/page1'}">路由路径一之跳转到第一页</router-link> -->
        <br/>
        <!-- 路由绑定的第二种方式 -->
        <!-- <router-link :to="pageOne">路由路径二之跳转到第一页</router-link> -->
        <br/>
        <!-- 通过名字进行路由跳转 -->
        <!-- <router-link :to="{name: 'Page1'}">跳转到第一页</router-link> -->
        <br/>
        <!-- <span @click="routeToPage1">配置带参数跳转</span> -->
        <br/>
        <br/>
        Hi!第二页<br/>
        <br/>
        路由跳转的具体四种方式
        <br/>
        <br/>
        router-link
        <br/>
        不带参数<br/>
        <router-link :to="{path: '/page2'}">通过path不带参数跳转到page2</router-link>
        <br/>
        <router-link :to="{name: 'Page2'}">通过name不带参数跳转到page2</router-link>
        <br/>
        带参数<br/>
        <router-link :to="{name: 'Page2', params: {'id': 3, 'name': 'fish'}}">params传参(name)</router-link>
        <br/>
        <router-link :to="{name: 'Page2', query: {'id': 2, 'name': 'elephant'}}">query传参(name)</router-link>
        <br/>
        <!-- 不行 -->
        <router-link :to="{path: './page2', params: {'id': 3, 'name': 'fish'}}">params传参(path)</router-link>
        <br/>
        <!-- 使用时不可以设置router里面的配置，否则会改变path的值 -->
        <router-link :to="{path: './page2', query: {'id': 2, 'name': 'elephant'}}">query传参(path)</router-link>
        <br/>
        <br/>
        this.$router.push(函数中用)<br/>
        不带参数
        <div class="button" @click="to1">直接写地址跳转</div>
        <div class="button" @click="to2">通过name跳转</div>
        <!-- 使用时不可以设置router里面的配置，否则会改变path的值 -->
        <div class="button" @click="to3">通过path跳转</div>
        <br/>
        query传参
        <div class="button" @click="query1">query传参: name</div>
        <div class="button" @click="query2">query传参: path</div>
        <br/>
        params传参(只能用name)
        <div class="button" @click="params1">params传参: name</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            pageOne: '/page1'
        }
    },
    methods: {
        // 第一页
        // routeToPage1 () {
        //     this.$router.push({name: 'Page1', params: {'color': 'red'}});
        // },
        // 第二页
        to1 () {
            this.$router.push('./page2')
        },
        to2 () {
            this.$router.push({ name: 'Page2' })
        },
        // 使用时不可以设置router里面的配置，否则会改变path的值
        to3 () {
            this.$router.push({ path: './page2' })
        },

        query1 () {
            this.$router.push({ name: 'Page2', query: { 'id': 1 } })
        },
        query2 () {
            this.$router.push({ path: '/page2', query: { 'id': 1 } })
        },

        params1 () {
            this.$router.push({ name: 'Page2', params: { 'id': 9, 'name': 'fish' } })
        }

    }
}
</script>