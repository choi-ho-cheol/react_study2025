import './App.css';

// App 컴포넌트
// ~ React 에플리케이션 루트 컴포넌트
// ~ 화면UI를 정의하는 컴포넌트 + 다른 컴포넌트를 포함
// ~ JSX 문법을 사용해서 HTML+JS를 작성
// ~ CSS 스타일 정의

// JSX 문법
// - JS와 HTML을 결합한 문법
// - Document 객체 x
// - 사용문법: { 변수 }
function App() {
  let isLogin = true; // 로그인 상태
  let name = '최호철';

  // css 스타일 정의 방법 3가지
  // 1. 요소 내부의 style 속성으로 적용 -> 값의 형태 : 객체 ex)<div style = {{color:"red"}}</div
  // 2. style값을 변수에 선언
  // 3. css 파일 분리
  let styled = {
      border: "1px solid black",
      width: 400,
      textAlign: "center"
  };

  // 여러 조건을 판단해야 할 경우
  let temp = prompt("오늘의 온도는?");
  let result = "";
  if(temp > 25){
    result = "너무 더움";
  } else if(temp > 20){
    result = "조금 더움";
  } else if(temp > 14){
    result = "선선함";
  }
  

  // 화면에 보여줄 HTML을 구성
  // 부모 요소는 반드시 하나여야한다.
  return (
    <div style={styled}>
    <div className="App">
      이름 : {name}<br />
      나이 : {28}   
    </div>
    <div className="App">
      {/* 조건부 렌더링
          조건이 하나일 떄 사용하는 문법
          ex) 클래스 or 스타일 이름 추가/삭제, 상태값과 연계
      */}
      로그인상태 : {isLogin && "로그인된 상태"} <br/>
      이름 : {name}<br />
      나이 : {28}
      {/* 조건부 렌더링
        - 삼항연산자를 활용하는 방법(조건식 ? 참 : 거짓)
      */}
      {28 > 19 ? (
        <p>성인</p>
      ):(
        <p>미성년자</p> 
      )  }

      <p>오늘의 날씨는? {result}</p>
    </div>
    </div>
  );
}

export default App;
