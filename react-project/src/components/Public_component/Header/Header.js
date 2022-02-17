import React, { useState, useEffect } from 'react';
import "./Header.css";
import "../../../Font.css";
import axios from 'axios';

export default () => {
    const [isLogined, setIsLogined] = useState(false);
    const [userName, setUserName] = useState();
    useEffect(()=>{
        getLoginState();
    }, []);
    
    const getLoginState = async () => {
        await axios.get('/isLogined').then((res)=>{
            console.log(res.data);
            if(res.data){
                setUserName(res.data);
                setIsLogined(true);
            }
        });
    }

    return(
        <div className='header-container'>
            <div className='header-title'>
                <a href='/' className='header-text'>
                    <h2>새벽코딩</h2>
                </a>
            </div>
            <div className='header-option'>
                <a className='header-option-child' href='/projects'>
                    <span className='innerText'>프로젝트</span>
                </a>
                {!isLogined?
                    <a className='header-option-child' href='/login'>
                        <span className='innerText'>로그인</span>
                    </a>
                :
                    <a className='header-option-child' href='#'>
                        <span className='innerText'>{userName}님, 안녕하세요!</span>
                    </a>
                }
            </div>
        </div>
    )
}