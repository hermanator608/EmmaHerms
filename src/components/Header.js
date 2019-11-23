import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { SkillsInfo } from '../constants'
import Skills from './Skills'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>
                        Hello, my name is <strong id="header_name">Emma Herms</strong>.<br />
                    </h1>
                    <br/>
                    <Skills info={SkillsInfo} divId='headerSkills' />
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
