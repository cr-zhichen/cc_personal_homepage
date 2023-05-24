<script setup>
import {getIcon} from "@/tool/imageService.js";
import {ref} from "@vue/reactivity";
import {i18n} from "@/tool/languageChange.js";

//查找文字
const findText = (o) => {
    return i18n.global.t('left.icons_text.' + o);
}

//更改left-icons-text文字显示
const leftIconsText = ref(findText('default'))
const modifyLeftIconsText = (text = '') => {
    leftIconsText.value = text
}


</script>

<template>

    <div id="left">

        <div class="left-name">
            <span id="left-name-domain">ccrui</span>
            <span id="left-name-suffix">.cn</span>
        </div>

        <div class="left-introduction card">
            <div class="left-introduction-title">
                <span>Hello World !</span>
            </div>
            <div class="left-introduction-content">
                <span>{{ $t('left.introduction_content') }}</span>
            </div>
        </div>

        <div class="left-icons card">
            <div class="icons-container">
                <a href="https://github.com/cr-zhichen"
                   target="_blank"
                   @mouseover="modifyLeftIconsText(findText('github'))"
                   @mouseout="modifyLeftIconsText(findText('default'))"
                >
                    <img :src="getIcon('github.png')" class="left-icons-item">
                </a>
                <a href="https://space.bilibili.com/6668879"
                   target="_blank"
                   @mouseover="modifyLeftIconsText(findText('bilibili'))"
                   @mouseout="modifyLeftIconsText(findText('default'))"
                >
                    <img :src="getIcon('bilibili.png')" class="left-icons-item">
                </a>
                <a href="https://wpa.qq.com/msgrd?v=3&uin=296529530&site=qq&menu=yes"
                   target="_blank"
                   @mouseover="modifyLeftIconsText(findText('qq'))"
                   @mouseout="modifyLeftIconsText(findText('default'))"
                >
                    <img :src="getIcon('qq.png')" class="left-icons-item">
                </a>
                <a href="mailto:zgccrui@outlook.com"
                   target="_blank"
                   @mouseover="modifyLeftIconsText(findText('email'))"
                   @mouseout="modifyLeftIconsText(findText('default'))"
                >
                    <img :src="getIcon('email.png')" class="left-icons-item">
                </a>
            </div>
            <span class="left-icons-text">
                {{ leftIconsText }}
            </span>
        </div>
    </div>

</template>

<style scoped>

a {
    text-decoration: none;
}

.left-icons-text {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0);
    transition: all .3s;
}


.left-icons-item {
    width: 24px;
    height: 24px;
    /*居中对齐*/
    vertical-align: middle;
    margin-right: 18px;
}

.icons-container {
    display: flex;
    justify-content: flex-start;
}

.left-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0px);
}

.left-icons:hover {
    background: rgba(0, 0, 0, .35);
    backdrop-filter: blur(10px);

    .left-icons-text {
        color: #fff;
    }
}

.left-introduction-title {
    margin-bottom: 5px;
    font-family: 'Pacifico', cursive;
    font-size: 1rem;
}

.left-icons,
.left-introduction {
    width: 70%;
    margin-top: 10px;
}


#left {
    width: 100%;
    height: 100%;
}

#left-name-domain,
#left-name-suffix {
    font-family: 'Pacifico', cursive;
    font-size: 5rem;
}

#left-name-suffix {
    font-size: 3rem;
    margin-left: 6px;
}
</style>