import React from 'react'

const App2 = () => {
    let name = prompt("이름을 입력하세요");
    // 날짜, 시간 관련 정보를 가진 객체
    let today = new Date();
    let result = "";
    let month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 해줘야 함
    console.log(today);
    console.log(today.toLocaleDateString()); // 현재 시간 기준 날짜
    console.log(today.getMonth()+1); // 0~11 값으로 반환 -> +1 더해주는 작업 필요
    
    if(month === 3 || 4 || 5){
        result = "봄";
    } else if(month === 6 || 7 || 8){
        result = "여름";
    } else if(month === 9 || 10 || 11){
        result = "가을";
    } else {
        result = "겨울";
    }
  return (
    <div>
        <h1>{today.toLocaleDateString()}</h1>
        <hr />
        <p>{name}님 지금은 {result}입니다. 좋은 하루 보내세요^^</p>
    </div>

    


    
    
  )
}

export default App2