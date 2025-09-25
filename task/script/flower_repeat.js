//index.js
//jquery ver


// 1. 초기 세팅
// 1.1 결과 숨기기
const $resultbirth = $('#result-birth')
$resultbirth.hide()
// 1.2 공유 버튼 숨기기
const $sharebtn = $('#share')
$sharebtn.hide()
// 2. 만나기 버튼 클릭 시 입력한 년/월/일 중 '월'을 인식하여 해당 값과 동일한 탄생화 배열 출력
// 필요한 변수 => 만나기버튼, 년, 월, 일
const $resultbtn = $('#result')
const $year = $('#year')
const $month = $('#month')
const $day = $('#day')
const $inputform = $('.input')

$resultbtn.click(function (){
    // 조건? 참 : 거짓;
    console.log(Boolean($year.val()))
    const ymd = $year.val()&&$month.val()&&$day.val()
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요')

    function flowerFunc(){

        const $userMonth = $month.val()
        const $flowerresult = $('.flower-result')
        const $flowerword = $('.flower-word')
        const $flowerImg = $('.flower > img')

        console.log($userMonth)

        const FlowerDB = birthday_flower[$userMonth-1]
        const flowername = FlowerDB.flower
        const flowerword = FlowerDB.content
        const flowerSrc = FlowerDB.src

        console.log(flowername)

        $flowerresult.find('em').text(flowername)
        $flowerword.find('span').text(flowerword)
        $inputform.hide()
        $resultbtn.hide()
        $resultbirth.show()
        $sharebtn.show()
        $flowerImg.attr('src', flowerSrc)
        }
    }
)