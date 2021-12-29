import React from 'react';
import './BodyContent.css';

export default () => {
    return (
        <div className='biggest-container'>
            <div className='body-content-title-container'>
                <h1>살펴보기</h1>
            </div>
            <div className='body-content-container'>
                <div className='body-content-circle'>
                    <div>
                        <div>
                            <h1>새로운 글</h1>
                        </div>
                        <div>
                            <h1 className='body-content-circle-num'>0</h1>
                        </div>
                    </div>
                </div>
                <div className='body-content-circle'>
                    <div>
                        <div>
                            <h1>모든 글</h1>
                        </div>
                        <div>
                            <h1 className='body-content-circle-num'>0</h1>
                        </div>
                    </div>
                </div>
                <div className='body-content-circle'>
                    <div>
                        <div>
                            <h1>모집 완료</h1>
                        </div>
                        <div>
                            <h1 className='body-content-circle-num'>0</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}