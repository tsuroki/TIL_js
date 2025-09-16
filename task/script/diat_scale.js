// 변수값 선언
const bodyHeight = document.querySelector('#height');
const bodyWeight = document.querySelector('#body_weight');
const outPutButton = document.querySelector('.result_btn');
const outPutWeight = document.querySelector('.output');

// 변수값 확인
console.log(bodyHeight, bodyWeight, outPutWeight, outPutButton);

//버튼 클릭시 함수 실행
outPutButton.addEventListener('click', () => {
    //입력값 불러오기 -> 함수 바깥에서 선언 시 값이 0으로 고정되어 계산이 되지 않으므로 내부에서 선언
    const userHeight = Number(bodyHeight.value)
    const userWeight = Number(bodyWeight.value)
    //적정 몸무게 계산식
    const IdealWeight = (userHeight-100) * 0.9
    const overWeight = userWeight - IdealWeight
    //결과 출력
    outPutWeight.style.display = 'block'
    outPutWeight.textContent = `적정몸무게는 ${IdealWeight}kg 인데, ${overWeight}kg 초과했네요?`
    if(userHeight == ''){
        //키 입력 안했을 시
        outPutWeight.textContent = "키를 입력하지 않았어요! 입력해주세요!"
    }
    else if(userWeight == ''){
        //몸무게 입력 안했을 시
        outPutWeight.textContent = "몸무게를 줄이고 싶은 마음은 알겠지만..."
    }
    });