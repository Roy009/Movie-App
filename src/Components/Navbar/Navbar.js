import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar_container'>
        <img className='navbar_logo' src="https://th.bing.com/th/id/R.6c617dcfcc6933dae210f6bb0c1c71d2?rik=0npmGpf0lrWEfg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmovie-png-hd-movie-logo-cliparts-2524910-1118.png&ehk=G3GfIkpmGGFizSQXbqYq%2fWy9Pf5St7ECppgIhUxpdEc%3d&risl=&pid=ImgRaw&r=0" alt="logo" />
        <button className='navbar_button'>Sign In</button>
    </div>
  )
}
