<template>
    <section>
        这是登录页面
        <el-button type="primary" plain>主要按钮</el-button>
    </section>
</template>

<script>
export default {
    async mounted () {
        // 方式一
        let _res = await this.$api.login({
            name: 'lls',
            passWord: '12345',
            mock: true
        })
        console.log(_res, '_res 方式一');
        // 方式二
        let res = await this.$api.loginTwo({
            name: 'lls',
            passWord: '12345',
            mock: true
        })
        console.log(res, 'res 方式二');
    }
}
</script>