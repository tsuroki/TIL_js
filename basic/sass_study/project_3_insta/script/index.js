const iconA = document.querySelectorAll('.left a')
const iconImg = document.querySelectorAll('.left a Img')

console.log(iconImg, iconA)

iconA[0].addEventListener ('click', () => changeImg(0, 'like'))
iconA[1].addEventListener ('click', () => changeImg(1, 'comment'))
iconA[2].addEventListener ('click', () => changeImg(2, 'paper'))

function changeImg(num, data) {
    return iconImg[num].src = `./images/${data}_on.png`
}

iconA[0].addEventListener ('dblclick', () => changeImg2(0, 'like'))
iconA[1].addEventListener ('dblclick', () => changeImg2(1, 'comment'))
iconA[2].addEventListener ('dblclick', () => changeImg2(2, 'paper'))

function changeImg2(num, data) {
    return iconImg[num].src = `./images/${data}_off.png`
}
/* const instaMenu = document.querySelectorAll ('#menu .left a')
const instaIcon = document.querySelectorAll ('#menu .left a img')

instaMenu[0].addEventListener('click', 'like')
instaMenu[1].addEventListener('click', 'comment')
instaMenu[2].addEventListener('click', 'paper')

function changeImg(){
} */

//사진 클릭 시 스피커 모양 보이기
const postImg = document.querySelector('div#photo')
const volumeIcon = document.querySelector('#popup')
console.log(postImg,volumeIcon)

volumeIcon.style.transition = 'opacity 0.5s'

postImg.addEventListener('click', () => {
    volumeIcon.style.opacity = 1
})

postImg.addEventListener('dblclick', () => {
    volumeIcon.style.opacity = 0
})
//사진 1개
//스피커 1개