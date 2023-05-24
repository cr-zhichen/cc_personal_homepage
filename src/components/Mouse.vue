<script setup>
import {onMounted} from 'vue';
import {ref} from "@vue/reactivity";

onMounted(() => {
    const body = document.querySelector("body");

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="5" cy="5" r="5" fill="white"/>
    </svg>
`;
    const svgDataURL = svgToDataURL(svg);

    let styleElement = document.createElement('style');
    styleElement.textContent = `
    * {
        cursor: url('${svgDataURL}') 5 5, auto !important;
    }
`;


    let mouseScale = 1;

    function setPosition(e, scale = null) {
        mouseScale = scale || mouseScale;

        const element2 = document.getElementById("g-pointer");
        const halfAlementWidth2 = element2.offsetWidth / 2;

        element2.style.transform = `translate(${e.clientX - halfAlementWidth2}px, ${e.clientY - halfAlementWidth2}px) scale(${mouseScale})`;
        document.head.appendChild(styleElement);
    }

    function setOpacity(opacity) {
        const element2 = document.getElementById("g-pointer");
        element2.style.opacity = opacity;
    }

    function svgToDataURL(svgString) {
        const encoded = encodeURIComponent(svgString)
            .replace(/'/g, '%27')
            .replace(/"/g, '%22');
        return `data:image/svg+xml,${encoded}`;
    }

    body.addEventListener('mousemove', (e) => {
        window.requestAnimationFrame(function () {
            setPosition(e);
        });
    });

    body.addEventListener('mousedown', (e) => {
        setPosition(e, 0.6);
    });

    body.addEventListener('mouseup', (e) => {
        setPosition(e, 1);
    });

    body.addEventListener('mouseleave', (e) => {
        mouseScale = 1;
        setOpacity(0);
    });

    body.addEventListener('mouseenter', (e) => {
        mouseScale = 1;
        setOpacity(1);
    });
});

</script>

<template>
    <div id="mouse">
        <div id="g-pointer"></div>
    </div>
</template>

<style scoped>

#g-pointer {
    width: 20px;
    height: 20px;
    transition: .08s ease-out;

    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
}
</style>
