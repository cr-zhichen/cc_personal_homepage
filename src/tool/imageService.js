const images = ['bg0.jpg'];

function getRandomBg() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageName = images[randomIndex];
    return 'https://accelerate-cdn.ccrui.cn/cc_personal_homepage/public/img/bg/' + imageName;
}

function getIcon(iconName) {
    return 'https://accelerate-cdn.ccrui.cn/cc_personal_homepage/public/img/icon/' + iconName;
}

export {getRandomBg, getIcon};