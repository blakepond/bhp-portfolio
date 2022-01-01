import React, { useContext } from 'react'
import { ThemeContext } from '../../context';
import './header.css'

const Header = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div style={{backgroundColor: darkMode && "white" }} className='h-bg'>
        
        </div>
    )
}

export default Header
