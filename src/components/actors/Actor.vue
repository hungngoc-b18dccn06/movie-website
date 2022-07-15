<template>
    <div class="my-component">
        <div>{{ message }}</div>
        <div><button @click="changeMessage">Click me</button></div>
    </div>
</template>

<script>
    export default {
        name: 'actors',
        data() {
            return {
                message: 'This is my first component using binding data'
            }
        },
        methods: {
            changeMessage() {
                this.message = 'this is new message'
            }
        },
        watch: {
            message() {
                console.log('message changed')
            }
        }
    }
</script>

<style scoped>
    .my-component {
        color: red;
    }
</style>
