import React from 'react'
import '../css/Credits.css'
import {BiRename} from 'react-icons/bi'
import {VscSymbolNamespace} from 'react-icons/vsc'
import {FaReact} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

function Credits() {
    return (
        <>
            <div className='main'>
                <div className='name'>
                    <h2><BiRename className='logo'/> Cristian Giovanni Estrada Ramirez</h2>
                </div>
                <div className='gmail'>
                    <h2><SiGmail className='logo'/> cgiovanniestrada@gmail.com</h2>
                </div>
                <div className='dev'>
                    <h2><VscSymbolNamespace className='logo'/> Web developer Junior</h2>
                </div>
                <div className='framework'>
                    <h2><FaReact className='logo'/> Create with React</h2>
                </div>
            </div>

        </>
    )
}

export default Credits