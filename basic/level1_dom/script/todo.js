// todo.list
// 1. input 할일 입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li 할일 추가하기

// 1) input 설정
const listInput = document.querySelector('#list')
// 2) 추가하기 버튼 설정
const addBtn = document.querySelector('#list_add')
// 3) ul 설정 추가하기 버튼 설정
const wrapUl = document.querySelector('#list_wrap')
//3) input.value 값 설정
listInput.value =''

console.log(listInput, addBtn, wrapUl)

//4) 추가하기 버튼 클릭 이벤트
addBtn.addEventListener('click', () => {
    //입력안하면 '할 일이 있다면 입력하세요' 메세지 출력
    listInput.value == '' ? alert('할 일이 있다면 입력하세요') : toDofunc ()
    //list 추가하기
})

listInput.addEventListener('keydown', (e) => {
    //입력안하면 '할 일이 있다면 입력하세요' 메세지 출력
    if(e.key == "Enter")
    listInput.value == '' ? alert('할 일이 있다면 입력하세요') : toDofunc ()
    //list 추가하기
})
//input에 할일입력
// 입력한 정보를 토대로 Enter 누름**
// input.value에 있는 값이 list로 옮겨감
// list가 올라감


function toDofunc() {
    console.log('할 일 등록')
    console.log(listInput.value)
    console.log(wrapUl)
    wrapUl.innerHTML += `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`
    listInput.value = ''
    const toDoClose = document.querySelectorAll('li .close')
    console.log(toDoClose)
    for(let i of toDoClose){
        i.addEventListener('click', ()=>{
            i.parentNode.remove();
        })
    }
}