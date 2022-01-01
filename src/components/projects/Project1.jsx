import React from 'react'
import './projects.css'


const Project1 = ({img, link}) => {
    return (
        <div className='pj'>
            <div className="pj-browser">
                <div className="pj-circle"></div>
                <div className="pj-circle"></div>
                <div className="pj-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="" className='pj-image'/>
            </a>
        </div>
    )
}

export default Project1
