import React from 'react'
import './about.css'
import Build from '../../img/ratemybuild.jpeg'

const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Build} alt='' className="a-image" />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About me</h1>
                <p className='a-sub'>Sub</p>
                <p className='a-desc'>Description</p>
               
            </div>
        </div>
    )
}

export default About
