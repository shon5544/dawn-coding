import React, { useState } from "react";
import axios from "axios";

export default () => {
    const [userId, setUserId] = useState();
    const [userPw, setUserPw] = useState();
    const [nickname, setNickname] = useState();
    const [userPwCheck, setUserPwCheck] = useState();

    const setId = (value) => {
        setUserId(value.target.value);
    }

    const setPw = (value) => {
        setUserPw(value.target.value);
    }

    const setPwCheck = (value) => {
        setUserPwCheck(value.target.value);
    }

    const setNM = (value) => {
        setNickname(value.target.value);
    }

    const checkpw = () => {
        if(userPw === userPwCheck){
            return true
        } else {
            return false
        }
    }

    const sendData = async () => {
        if(checkpw()){
            await axios.post('/regist', {
                id: userId,
                pw: userPw,
                nickname
            }).then((res)=>{
                if(res.state === 'already-id'){
                    alert('이미 존재하는 아이디입니다.');
                } else if(res.state === 'already-nickname'){
                    alert('이미 존재하는 닉네임입니다.');
                } else if(res.state === 'OKAY') {
                    alert('회원가입에 성공했습니다.');
                }
            });
        } else {
            alert('비밀번호가 틀립니다. 다시 입력해주세요.');
        }
    }

    return(
        <div>
            <div className='loginBox-title'>
                <h1>회원가입</h1>
            </div>
            <div className='loginBox-input'>
                <div className='loginBox-input-cover'>
                    <h4>닉네임</h4>
                    <input onChange={(value)=> setNM(value)} placeholder="사용할 닉네임을 입력해주세요" className='input-element' />
                    <h4>아이디</h4>
                    <input onChange={(value)=> setId(value)} placeholder="사용할 아이디를 입력해주세요" className='input-element' />
                    <h4>비밀번호</h4>
                    <input onChange={(value)=> setPw(value)} placeholder="사용할 비밀번호를 입력해주세요" className='input-element' />
                    <h4>비밀번호 확인</h4>
                    <input onChange={(value)=> setPwCheck(value)} placeholder="비밀번호를 입력해주세요" className='input-element' />
                    <button onClick={()=>sendData()} type='submit'>입력</button>
                </div>
            </div>
        </div>
    )
}