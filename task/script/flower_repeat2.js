//변수 설정

const resultBirth = document.querySelector('#result-birth')
const resultBtn = document.querySelector('#result')
const shareBtn = document.querySelector('#share')
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#day')
const inputform = document.querySelector('.input')
const resultFlower = document.querySelector('.flower-result')
const flowerImg = document.querySelector('.flower img')
const flowerWord = document.querySelector('.flower-word')
/* ====================================================== */

//초기 버튼 및 결과창 숨기기
resultBirth.style.display = 'none'
shareBtn.style.display = 'none'

//'만나기' 버튼 클릭시
resultBtn.addEventListener('click', () => {
    //년, 월, 일 데이터 value 불러오기
    const ymd = year.value && month.value && day.value 
    ymd ? flowerFunction() : alert('생년월일 냅둬 태어나지도 않았는갑제');
    function flowerFunction(){
        if(month.value >0 && month.value < 13){
            const userMonth = month.value
            const resultflowername = birthday_flower[userMonth-1].flower
            const resultflowerLang = birthday_flower[userMonth-1].content
            const resultflowersrc = birthday_flower[userMonth-1].src
            resultBirth.style.display = 'block'
            shareBtn.style.display = 'block'
            resultBtn.style.display = 'none'
            resultFlower.children[0].textContent = resultflowername
            flowerWord.children[0].textContent = resultflowerLang
            flowerImg.src = resultflowersrc
        } else {
            month.value=''
            alert('제대로 입력하소')
        }
    }
})