import React from 'react';

export default function HeroSection({ onContactClick }) {
  return (
    <section className="body semi-container !flex !flex-row !justify-between">
      <div className="body-left">
        <h1 className="title bebas-neue">BELLMIN</h1>
        <p className="body-left-content">
          알 때까지 파고드는 개발자 김종민입니다.
        </p>
        <div className="social">
          <button onClick={onContactClick} className="social-button">
            <img fetchPriority="high" src={`${import.meta.env.BASE_URL}/static/button.svg`} alt="Contact" />
          </button>
          <button onClick={()=>window.open("https://velog.io/@rlajm1203")} className="social-button">
            <img fetchPriority="high" src={`${import.meta.env.BASE_URL}/static/velog.svg`} alt="Contact" />
          </button>
          <button onClick={()=>window.open("")} className="social-button">
            <img fetchPriority="high" src={`${import.meta.env.BASE_URL}/static/linkedIn.svg`} alt="Contact" />
          </button>
          <button onClick={()=>window.open("https://github.com/rlajm1203")} className="social-button">
            <img fetchPriority="high" src={`${import.meta.env.BASE_URL}/static/github.svg`} alt="Contact" />
          </button>
        </div>
      </div>
      <div className="body-right-img">
        <img fetchPriority="high" src="profile/static/body-img.png" alt="" />
      </div>
    </section>
  );
}