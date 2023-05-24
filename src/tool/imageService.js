const images = ['bg0.jpg'];

function getRandomBg() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageName = images[randomIndex];
    return '/img/bg/' + imageName;
}

function getIcon(iconName) {
    return '/img/icon/' + iconName;
}

export {getRandomBg, getIcon};