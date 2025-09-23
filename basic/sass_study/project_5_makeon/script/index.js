

//1. gnb에 마우스를 올릴 때, 선이 나타나는 트랜지션 추가하기

//2. 이미지에 마우스를 올릴 때, 투명도가 0.7로 적용되게 할 것.**
const hoveringImg = document.querySelectorAll ('.smallimg > a')

//3. 썸네일 이미지를 클릭할 때, 이미지에 border가 나타나게 할 것.
//3-1. 썸네일 이미지를 클릭할 때, 이 외의 이미지에는 border가 사라지게 할 것.

//4. 아래의 nav 버튼을 클릭 할 때, 배너가 이동하며 해당 부분으로 배너가 넘겨갈것
//4-1. 왼쪽의 이미지 버튼을 클릭 할 때, 배너가 이동하며 해당 부분으로 배너가 넘겨갈것
const displayImg = document.querySelector('.display_img .big_img')
console.log(displayImg)

for(let i of hoveringImg){
    console.log(i)
    i.addEventListener('mouseover', () => {
        i.style.opacity = 0.7;
    })
    i.addEventListener('mouseout', () => {
        i.style.opacity = 1;
    })
    i.addEventListener('click', (e)=>{
        i.className='active' //클래스 부여
        i.style.border = '1px solid $color-111'
    })
}
//4.2. 배너 클릭 후 드래그 시, 해당 부분으로 마우스가 움직여 배너가 움직일 것.
//1) 배너를 클릭 하고 상태를 유지한다.
displayImg.addEventListener('mousedown', (e) =>{
    let isDrag = false
    console.log(e)
    console.log(displayImg)
    displayImg.addEventListener('mousemove', (e) => {
        console.log(e)
        isDrag = true
    })
    displayImg.addEventListener('mouseup', (e) => {
        isDrag = false
    })
})


//5. 하트버튼 클릭 시, 하트가 빨갛게 변하며 트랜지션 효과를 적용시킬것