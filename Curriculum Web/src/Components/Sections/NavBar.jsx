import React, { useRef } from 'react'
import TextNormal from '../Text/TextNormal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(useGSAP)

function NavBar() {
    const container = useRef()

/* 
    useGSAP(() => {
        gsap.to(container.current, {
            top: "16px"
        })

        gsap.to(".anima", {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            duration: 0.2
        })

    }, { scope: container }) */

    return (
        <nav ref={container} className='fixed top-1 flex justify-center w-full z-30  '>
            <ul className='anima flex justify-around w-1/2 p-2 text-red-400 backdrop-blur-lg '
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%)"
                }}>
                <li>Inicio</li>
                <li>Sobre Mi</li>
                <li>Contacto</li>

            </ul>
        </nav>
    )
}

export default NavBar