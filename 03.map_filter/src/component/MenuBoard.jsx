import React, { useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem';
import MenuNav from './MenuNav';

const MenuBoard = () => {

    const [menuDatas] = useState(menuData);
    const [selectMenu,setSelectMenu] = useState('All');

    // menus는 가장 최근에 조회한 정보가 저장되어 있으므로
    // 'All'을 누르면 최근 정보로만 조회
    // import한 menuData로 업데이트 초기화해줘야 전체 메뉴가 출력된다.
    const filteredMenu = selectMenu === 'All'
    ? menuDatas
    : menuDatas.filter(item => item.category === selectMenu);

    const menufilter = (category) => {
        // alert('클릭');
        setSelectMenu(category);

    }
    
    
    

  return (
    <div className='menu-board'>
        <h1>메뉴판</h1>
        <MenuNav onFilter={menufilter}/>
        <div className='menu-list'>
        {filteredMenu.map((item) =>(
            <MenuItem key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            img={item.img}
            />
        ))}
        </div>

    </div>
  )
}

export default MenuBoard