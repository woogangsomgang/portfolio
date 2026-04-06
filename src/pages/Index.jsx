import React from 'react'
import '../css/main.scss'
import '../css/common.scss'
import Logo from './Logo'
import HeroText from './Herotext'


function Index() {
    return (


        <div className="main">
            <div className="main-text">
                <HeroText />
            </div>
            <div className="main-logo"> 
                <Logo />
            </div>
        </div>

    )
}

export default Index
