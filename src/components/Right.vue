<script setup>

import {onMounted} from "vue";
import {GetAWord} from "@/tool/httpRequest.js";
import {ref} from "@vue/reactivity";
import {getNowDate, getNowTime} from "@/tool/timeHelper.js";
import {getIcon} from "@/tool/imageService.js";

const aWordHitokoto = ref("")
const aWordFrom = ref("")

const isHideAWord = ref(window.innerWidth <= 1000)
const isHideTime = ref(window.innerWidth <= 850)
const isHideIconsText = ref(window.innerWidth <= 850)

//当前日期
const nowDate = ref("")
//当前时间
const nowTime = ref("")

nowTime.value = getNowTime();
nowDate.value = getNowDate();

//每秒刷新
setInterval(() => {
    nowTime.value = getNowTime();
    nowDate.value = getNowDate();
}, 1000)

//监听页面宽度改变
window.onresize = () => {
    isHideAWord.value = window.innerWidth <= 1000;
    isHideTime.value = window.innerWidth <= 850;
    isHideIconsText.value = window.innerWidth <= 850;
}

//加载完成
onMounted(() => {
    getAWord()
})

const getAWord = () => {
    GetAWord((ok) => {
        aWordHitokoto.value = ok.hitokoto
        aWordFrom.value = ok.from
    }, (err) => {
        console.log(err)
    })
}

//在新页面打开网页
const openNewPage = (url) => {
    window.open(url)
}

</script>

<template>

    <div id="right">

        <div class="right-display" v-if="!isHideTime">
            <div class="right-display-aWord card" @click="getAWord" v-if="!isHideAWord">
                <div class="right-display-aWord-hitokoto">
                    {{ aWordHitokoto }}
                </div>
                <div class="right-display-aWord-from">
                    -「{{ aWordFrom }}」
                </div>
            </div>
            <div class="right-display-time card">
                <div class="right-display-time-nowData">
                    {{ nowDate }}
                </div>
                <div class="right-display-time-nowTime">
                    {{ nowTime }}
                </div>
            </div>
        </div>

        <div class="right-separate">
            <svg xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 512 512" data-v-6b5f55f6=""
                 class="right-separate-svg"
            >
                <path
                    d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                    fill="currentColor"></path>
            </svg>
            <span style="margin-left: 10px;">{{ $t('left.right_separate') }}</span>
        </div>

        <div class="right-websiteList">
            <div
                class="right-websiteList-blog websiteList card"
                @click="openNewPage('https://ccrui.cn')"
            >
                <img :src="getIcon('blog.svg')" class="right-websiteList-item-icon">
                <span v-if="!isHideIconsText">
          {{ $t('right.websiteList.blog') }}
        </span>
            </div>
            <div
                class="right-websiteList-img websiteList card"
                @click="openNewPage('https://img.ccrui.cn')"
            >
                <img :src="getIcon('img.svg')" class="right-websiteList-item-icon">
                <span v-if="!isHideIconsText">
        {{ $t('right.websiteList.img') }}
        </span>
            </div>
            <div
                class="right-websiteList-short websiteList card"
                @click="openNewPage('https://s.ccrui.cn')"
            >
                <img :src="getIcon('short.svg')" class="right-websiteList-item-icon">
                <span v-if="!isHideIconsText">
        {{ $t('right.websiteList.short') }}
        </span>
            </div>
            <div
                class="right-websiteList-aiChat websiteList card"
                @click="openNewPage('https://aichat.ccrui.cn')"
            >
                <img :src="getIcon('aiChat.svg')" class="right-websiteList-item-icon">
                <span v-if="!isHideIconsText">
        {{ $t('right.websiteList.aiChat') }}
        </span>
            </div>
            <div
                class="right-websiteList-buy websiteList card"
                @click="openNewPage('https://buy.ccrui.cn')"
            >
                <img :src="getIcon('buy.svg')" class="right-websiteList-item-icon">
                <span v-if="!isHideIconsText">
        {{ $t('right.websiteList.buy') }}
        </span>
            </div>
            <div
                class="right-websiteList-homepage websiteList card"
                @click="openNewPage('https://i.ccrui.cn')"
            >
                <img :src="getIcon('homepage.svg')" class="right-websiteList-item-icon">
                <span v-if="!isHideIconsText">
        {{ $t('right.websiteList.homepage') }}
        </span>
            </div>
        </div>

        <div id="right-placeholder"></div>

    </div>

</template>

<style scoped>

@media screen and (max-width: 1000px) {
    .right-display-time {
        width: 100% !important;
    }
}

@media screen and (max-width: 850px) {
    .right-websiteList-item-icon {
        margin: 0 auto !important;
    }
}

.right-websiteList-item-icon {
    width: 32px;
    height: 32px;
    margin: 0 auto 5px;
    display: block;
}

.right-websiteList {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-top: 20px;
    text-align: center;
}

.right-separate {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    width: 70%;
    font-size: 1.1rem;
    padding-left: 10px;
    box-sizing: border-box;
}

.right-separate-svg {
    width: 18px;
    height: 18px;
}

.right-display-time {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.right-display-time-nowData {
    text-align: center;
    font-size: 1rem;
}

.right-display-time-nowTime {
    text-align: center;
    font-size: 3rem;
    font-family: 'UniDream LED', cursive;
}

.right-display-aWord-from {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 30px; /* 添加内边距 */
}

.right-display-aWord {
    position: relative;
    margin-right: 10px;
}

.right-display-time {
    margin-left: 10px;
}

.right-display-aWord,
.right-display-time {
    width: 50%;
    height: 100%;
}

.right-display {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    height: 180px;
}

#right {
    width: 100%;
    height: 100%;
}

</style>