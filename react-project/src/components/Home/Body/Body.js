import React from 'react';
import "./Body.css";

export default () => {
    return(
        <div>
            <div className='video-container'>
                <video className="video" autoPlay muted loop src='/Videos/Laptop.mp4'>현재 들어오신 브라우저로는 영상을 재생할 수 없네요..!</video>
            </div>
            <div className='content-container'>
                <h1 className='content-title content'>"새벽에 같이 코딩할 사람?"</h1>
                <h3 className='content'>혼자서 힘들게 진행하던 토이 프로젝트,<br></br> 새벽코딩에서 여러 사람들과 함께 진행해보세요!</h3>
                <a href='#' className='btn-0'>프로젝트 보러가기!</a>
            </div>
        </div>
    )
}