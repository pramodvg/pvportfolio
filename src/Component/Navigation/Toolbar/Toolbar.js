import React from 'react'
import ToolbarItem from './ToolbarItem';

export default function Toolbar() {
    return (
        <nav className='navbar'>
            <a className='navbar-brand' href='/'>Pramod Vaghasia

            </a>

            {/* <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#mynavigation'>
                <span className='navbar-toggler-icon'></span>
            </button><br /> */}
            <div className="footer-links text-center">
                <a href='https://github.com/pramodvg' target="_blank"><i className='fa fa-github'></i>Github</a>
                <a href='https://www.linkedin.com/in/pramodv997' target="_blank"><i className='fa fa-linkedin'></i>LinkedIn</a>
            </div>
            {/* <div className='collapse navbar-collapse' id='mynavigation'>
                <ul className='navbar-nav ml-auto'>
                    <ToolbarItem/>
                </ul >

            </div > */}

        </nav >
    )
}
