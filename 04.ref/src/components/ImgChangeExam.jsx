import React, { useRef, useState } from 'react'
import cat from '../assets/고양이.jpg'
import dog from '../assets/강아지.png'
import animals from '../assets/고양이와 강아지.png'
const ImgChangeExam = () => {
    const imgs = useRef('');
    const [imgSrc, setImgSrc] = useState(animals);

    const changeAnimals = (e) => {
        e.preventDefault();
        if(imgs.current.value === '고양이'){
            setImgSrc(cat);
        } else if(imgs.current.value === '강아지'){
            setImgSrc(dog);
        } else {
            alert('값이 잘못되었습니다.')
        }
        
        // 입력창의 내용을 초기화하고 해당 요소를 선택하는 기능 
        imgs.current.value = '';
        imgs.current.focus();
    }
  return (
    <div>
        <span>희망하는 사진이 있으신가요</span>
        <p><input type="text" ref={imgs}/>
        <input type="submit" value="변경" onClick={changeAnimals}/></p>
        <img src={imgSrc} alt="동물 사진" width="300" />
    </div>
  )
}

export default ImgChangeExam