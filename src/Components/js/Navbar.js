import React, { useEffect } from 'react'
import '../css/Navbar.css'

function Navbar() {

    function background() {

        const nav = document.querySelector('.nav');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        })
    }

    useEffect(() => {
        background();
    }, [])
    
    return (
        <>
            <div className="nav">
                <img
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                />
            </div>
        </>
    )
}

export default Navbar