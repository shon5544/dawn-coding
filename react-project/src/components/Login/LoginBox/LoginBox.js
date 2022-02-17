import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default () => {
    const [userId, setUserId] = useState();
    const [userPw, setUserPw] = useState();

    const navigate = useNavigate();

    const setId = (value) => {
        setUserId(value.target.value);
    }

    const setPw = (value) => {
        setUserPw(value.target.value);
    }

    const sendData = async () => {
        console.log(userId, userPw);
        await axios.post('/login', {
            id: userId,
            pw: userPw
        }).then((res)=>{
            if(res.data.user){
                navigate("/");
            }
            
            if(res.data.message){
                alert(res.data.message)
            }
        });
    }

    return(
        <div>
            <div className='loginBox-title'>
                <h1>로그인</h1>
            </div>
            <div className='loginBox-input'>
                <div className='loginBox-input-cover'>
                    <h4>아이디를 입력하세요</h4>
                    <input onChange={(value)=> setId(value)} className='input-element' />
                    <h4>비밀번호를 입력하세요</h4>
                    <input onChange={(value)=> setPw(value)} className='input-element' />
                    <button onClick={()=> sendData()} type='submit'>입력</button>
                </div>
            </div>
        </div>
    )
}