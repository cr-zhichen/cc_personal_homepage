<script setup>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
</script>


<template>
    <div class="container">
        <Left/>
        <Right/>
    </div>
</template>

<style scoped>

.container {
    display: flex; /* 使用 flex 布局 */
    height: 100vh; /* 让容器占满整个视口高度 */
    width: 80%;
    margin: 0 auto;
}

.container > * {
    flex: 1; /* 让子元素平分容器的宽度 */
    display: flex; /* 让子元素也使用 flex 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    flex-direction: column;
}

</style>
