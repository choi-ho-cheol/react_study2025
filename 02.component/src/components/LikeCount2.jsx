import React, { useState } from 'react'

const LikeCount2 = () => {
    const [num ,setNum] = useState(0);

    const likeUp = () => {
        setNum(num+1);
    }

    const likeDown = () => {
        setNum(num-1);
        if(num === 0){
            setNum(0);
        }
    }
  return (
    <div className='Gram'>
    <div className='Instar'>
        <img style={{width:200, height:200}}
        src={"src/assets/img/냥냥.gif"} alt={"냥이는냥냥"} />
        <p>좋아요{num}</p>
        {/* onClick 속성에 함수 실행문을 넣을 때 {() => 함수명} 형태로 정의해야 한다. */}
        <button onClick={likeUp}>💖</button>
        <button onClick={likeDown}>💔</button>
    </div>
    </div>
  )
}

export default LikeCount2