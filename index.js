const { off } = require("gulp")

let offset = 0
const sliderLine = document.querySelector('.swiper')

document.querySelectorAll('.btn').addEventListener('click', function () {
    offset += 256
    if (offset > 1100) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
    console.log('dasdas');
})