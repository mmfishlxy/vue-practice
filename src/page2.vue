<template>
    <div>
        第二页<br/>
        router-link<br/>
        params传参：{{ $route.params.id }}
        {{ $route.params.name }}
        <div class="button" @click="getParams">params: 获取参数</div>
        query传参：{{ $route.query.id }}
        <!-- {{ $route.query.name }} -->
        <div class="button" @click="getQuery">query: 获取参数</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
            getParams () {
                console.log('params', this.$route.params)
            },
            getQuery () {
                console.log('query', this.$route.query)
            }
        }
    }
</script>

<style>
.button {
    width: 200px;
    border: 1px solid grey;
    padding: 5px;
}
</style>
