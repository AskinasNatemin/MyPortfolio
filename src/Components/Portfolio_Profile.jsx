import React from 'react'
import '../css/portfolio.css'
import resume from '../Assets/resume.pdf'

import myProfile from '../Assets/myProfile.jpg'
import moon from '../Assets/moon.png'
import { IoMdSunny } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { useState } from 'react';
import Portfolio_Project from './Portfolio_Project'

const Portfolio_Profile = () => {

  const [theme, setTheme] = useState('light-bg')
  const [icon, setIcon] = useState(true)

  const handleTheme = () => {
    console.log(theme);

    if (theme === 'light-bg') {
      setTheme('dark-bg')
      setIcon(false)
    } else if (theme === 'dark-bg') {
      setTheme('light-bg')
      setIcon(true)
    }
  }

  return (
    <>
    <div className="container-fluid border-5" style={{ height: '100dvh' }}>

      <div className={`row profile ${theme}`} style={{ height: '100dvh' }}>

        {/*profile image container col start */}

        <div className="col-md-6 d-flex justify-content-md-end justify-content-center align-items-start align-items-md-center">

          <div className="profileImageContainer d-flex flex-column">
            {!icon && <img src={moon} className='icon' alt="moon" onClick={handleTheme} />}
            {icon && <IoMdSunny className='icon' onClick={handleTheme} />}
            <img src={myProfile} alt="" onClick={handleTheme} />
          </div>

        </div>

        {/*profile image container col end */}

        {/* ----------------------------------------------------------------------------- */}

        {/* profile content container col start */}

        <div className="col-md-6 d-flex justify-content-center align-items-start align-items-md-center justify-content-md-start">

          <div className="profileContentContainer p-4 text-center d-flex flex-column gap-2">

            <div className="nameContainer">
              <span className='first'>ASKINAS</span><br />
              <span>NATEMIN K</span>
            </div>

            <div className="professionContainer">
              <span>FRONTEND DEVELOPER</span>
            </div>

            <div className="gitupContainer">
              <FaGithubSquare style={{ height: '30px', width: '30px' }} />
            </div>

            <div className="summaryContainer">
              <span>With a passion for </span><br />
              <span>developing modern React</span><br />
              <span>web apps for commersial</span><br />
              <span>bussiness.</span>
            </div>
            <div className="resumeDownloadContainer">
              <a download href={resume}>
                <button type="button" >
                  Resume
                </button>
              </a>
            </div>

          </div>
        </div>

        {/* profile content container col end */}

      </div>
    </div>

    <Portfolio_Project/>
    
    </>
  )
}

export default Portfolio_Profile