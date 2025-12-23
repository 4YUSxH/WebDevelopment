import React from 'react'

function HeroCenter() {
  return (
    <div className='herocentercontainer'>
      <h1>Unleash Your Inner Champion Today. All In One Place.</h1>
      <p>Join the ultimate tenis experience - where passion meets performance and every swing brings you closer to victory.</p>
      <button>Start your own journey</button>

      <div className="herobottom">
        <div className="left">
          <p>Train with real professionals. Get the real results.</p>
          <div className="leftbox"></div>
        </div>
        <div className="right">
          <a href="#">Instagram <i class="ri-arrow-right-up-long-line"></i></a>
          <a href="#">Facebook <i class="ri-arrow-right-up-long-line"></i></a>
          <a href="#">Tik Tok <i class="ri-arrow-right-up-long-line"></i></a>
        </div>
      </div>
    </div>
  )
}

export default HeroCenter
