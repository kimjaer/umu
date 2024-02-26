import React from 'react';

export default function Instar({ maininsta }) {
  // maininsta가 없거나 undefined인 경우 빈 배열로 초기화
  const instaData = maininsta || [];

  return (
    <>
      <div className='instacon text-center'>
        <p>INSTAGRAM</p>
        <h3>우무 인스타그램 @jeju.umu</h3>
        <div className="insta-container d-flex justify-content-center align-items-center">
          {/* instaData가 빈 배열이 아닌 경우에만 map 함수 호출 */}
          {instaData.length > 0 && instaData.map((insta, index) => (
            <div key={index} className="insta-item">
              <a href={insta.inslink} target="_blank" rel="noopener noreferrer">
                <img src={insta.insimg} alt={`인스타 썸네일 ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
