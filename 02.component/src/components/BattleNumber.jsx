import React, { useState } from 'react'

/*
    실습) 숫자 맞추기
    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
        - parseInt(Math.random() + 3)+1
    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기

        - 정답인 경우 -> "정답입니다"
        - 틀린 경우 -> "땡~" 
        * 누른버튼의 값 가져오는 방법 -> event객체.target
*/

const BattleNumber = () => {
    const[btn,setBtn] = useState(0);
    const[ran,setRan] = useState(0);
    const [result, setResult] = useState("");
    
    const numEventHandler = (e) => {
        const btnValue = parseInt(e.target.innerText);
        const ranNum = parseInt(Math.random() * 3)+1
        setBtn(btnValue);
        setRan(ranNum);
        if(btnValue === ranNum){
            setResult("정답입니다")
        } else{
            setResult("땡")
        }

    }

  return (
    <div>
        <button onClick={numEventHandler}>1</button>
        <button onClick={numEventHandler}>2</button>
        <button onClick={numEventHandler}>3</button>
        <p>내가 입력한 숫자 : {btn}</p>
        <p>랜덤한 숫자 : {ran}</p>
        <p>결과 : {result}</p>
    </div>
  )
}

export default BattleNumber