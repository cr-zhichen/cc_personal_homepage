<script setup>

import {getRandomBg} from "@/tool/imageService.js";
import Mouse from "@/components/Mouse.vue";
import BottomBar from "@/components/BottomBar.vue";

const randomImage = getRandomBg();

</script>

<template>

  <!--    背景图片-->
    <div class="bg-img">
        <img :src="randomImage" alt="">
    </div>

  <!--    鼠标样式-->
    <Mouse></Mouse>

  <!--    底栏-->
    <bottomBar></bottomBar>

    <router-view/>
</template>

<style scoped>

.bg-img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.bg-img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
}

.bg-img img {
    position: relative;
    z-index: 0;
}

</style>
