import React from 'react'
import './LandingPageContent.css';

export default function LandingPageContent() {
  return (
    <div className='landingpagecontent_container'>
        <p className="landingpagecontent_title">Unlimited Films, TV Programs and more</p>
        <p className="landingpagecontent_subtitle">Watch from anywhere, Cancel at any time</p>
        <p className="landingpagecontent_description">Ready to watch Enter your email to create or start your membership.{""}</p>
        <div className="landingpagecontent_input">
            <input type="text" />
            <button>GET STARTED</button>
        </div>
    </div>
  )
}
