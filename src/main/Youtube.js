import React from 'react';

export default function Youtube({ mainytb }) {
  return (
    <>
      <div className='ytbcon'>
        <p>우무가 출연한 유튜브 영상들</p>
        <div className="youtube-container d-flex justify-content-center align-items-center">
          {mainytb.map((ytb, index) => (
            <div key={index} className="youtube-item">
              <a href={ytb.ytblink} target="_blank" rel="noopener noreferrer">
                <img src={ytb.ytbimg} alt={`유튜브 썸네일 ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}