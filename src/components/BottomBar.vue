<script setup>

//根据宽度判断是否是手机
import {ref} from "@vue/reactivity";

const isMobile = ref(window.innerWidth <= 768)

//监听页面宽度改变
window.onresize = () => {
    isMobile.value = window.innerWidth <= 768;
}


</script>

<template>

    <div id="bottomBar">
        <div>
            <span>
                Copyright&nbsp;©&nbsp;2023
            </span>
            <span>
                Made&nbsp;by
            </span>
            <span>
                ccrui
            </span>
            <!--            <a href="https://beian.miit.gov.cn/" target="_blank">-->
            <!--                &&nbsp;黑ICP备19008070号-1-->
            <!--            </a>-->
        </div>
    </div>

</template>

<style scoped>

a {
    text-decoration: none;
    color: inherit;
}

#bottomBar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
}

</style>