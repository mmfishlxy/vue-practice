<template>
    <div>
        第一页
        {{ $route.params.color }}
        <span @click="getParams">获取参数</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        // 获取路由跳转携带的参数
        getParams () {
            console.log(this.$route.params)
        }
    }
} 
</script>