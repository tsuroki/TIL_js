const inputBox = document.querySelectorAll('.date');

//inputbox에 마우스 오버시 테두리 색 변경
for(let i of inputBox){
i.addEventListener('mouseover', () =>{
    i.style.border = '1px  solid #F4991A';
    i.style.transition = '0.2s';
    i.addEventListener('mouseout', () =>{
        i.style.border = '1px solid #e9e9e9';
        i.style.transition = '0.2s';})
    })
}

//input 입력 시 상한 12, 31 설정
//초기 비어있음
const monthInput = document.querySelector('#birthday-month');
const dateInput = document.querySelector('#birthday-date');
console.log(monthInput, dateInput)
monthInput.value = '';
let valMonth = monthInput.value;
dateInput.value = '';
let valDate = dateInput.value;

//monthInput에 값을 입력 시 12이상 입력 불가
monthInput.addEventListener('input', () =>{
    if(monthInput.value > 12){
        monthInput.value = 12;
    } else if(monthInput.value < 1){
        monthInput.value = '';
    }
})
dateInput.addEventListener('input', () =>{
    if(dateInput.value > 31){
        dateInput.value = 31;
    } else if(dateInput.value < 1){
        dateInput.value = '';
        }
    }
)

//submit 버튼에 마우스 오버시 색 변경
const submitBtn = document.querySelector('.submit-btn');
console.log(submitBtn)
submitBtn.addEventListener('mouseover', () => {
    submitBtn.style.backgroundColor = '#FEF3E2';
    submitBtn.style.transition = '0.15s';
    submitBtn.addEventListener('mouseout', () =>{
        submitBtn.style.backgroundColor = '#ffffff';
        submitBtn.style.transition = '0.15s';
    })
})

const textNotice = document.querySelector('.notice');
console.log(textNotice)

submitBtn.addEventListener('click', () =>{
    if(monthInput.value == ''&& dateInput.value == ''){
        textNotice.textContent = '날짜가 입력되지 않았어요!';
    } else if(monthInput.value == ''){
            textNotice.textContent = '월이 입력되지 않았어요!';
        } else if(dateInput.value == ''){
            textNotice.textContent = '일이 입력되지 않았어요!';
        }
    //month 값에 따라 flower_date.js의 데이터 가져오기
    if (monthInput.value != '' && dateInput.value != ''){
        let outputMonth = monthInput.value;
        for(let i=0; i<=birthday_flower.length; i++){
            if(birthday_flower[i].month == outputMonth){
                textNotice.textContent = `당신은 ${outputMonth}월에 태어났으며 당신의 탄생화는 ${birthday_flower[i].flower}입니다. (${birthday_flower[i].content})`;
            }
        }
    }

})
