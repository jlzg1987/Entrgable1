import React from 'react';
import { useState } from 'react'
import DataBase from '../DataBase.json'
import colors from '../colores.json'
const Cart = () => {
    const [count, setCounte] = useState(0)


    const ButtonRandom = () => {
        let count = Math.floor(Math.random()* DataBase.length)
        setCounte(count)
    }
    let countColor = Math.floor(Math.random()* colors.length)
        document.body.style=`background: ${colors[countColor]} `
       

    return (
        <div className='carditem' style={{color: colors[countColor]} } >
            <p>{DataBase[count].quote}</p>
            <h4>{DataBase[count].author}</h4>
            <button onClick={ButtonRandom} className='bttRandom' >
            <i class="fa-solid fa-code"> R</i>
                </button>
        </div>
    );
};

export default Cart;