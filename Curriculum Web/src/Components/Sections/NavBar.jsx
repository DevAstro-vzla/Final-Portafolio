import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(useGSAP)




function NavBar() {

    const [showTinyMenu, setShowTinyMenu] = useState(false)
    const navRef = useRef()
    const animation = useRef()
    const [animationState, setAnimationState] = useState(false)

    useGSAP(() => {
        animation.current = gsap.timeline({ paused: true }).from(".tinyMenu", {
            display: "none",
            y: 50,
            opacity: 0,
            duration: 0.3
        }).to(".tinyMenu", {
            display: "flex",
            y: 0,
            opacity: 1,
            duration: 0.3
        })

    }, { scope: navRef })

    const reverseAnimation = () => {
        animation.current.resume()
        if (animationState) {
            animation.current.reversed(!animation.current.reversed())
            return
        }
        setAnimationState(!animationState)
    }

    return (
        <nav ref={navRef} className='fixed top-1 flex flex-col items-center justify-center w-full z-30  '>
            <ul className=' hidden md:flex justify-around w-1/2 p-2 text-red-400 backdrop-blur-lg '
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%)"
                }}>
                <li><a href="#inicio"> Inicio </a> </li>
                <li> <a href="#sobreMi">Sobre Mi</a></li>
                <li> <a href="#contacto">Contacto</a></li>
            </ul>
            <button onClick={reverseAnimation} className='cursor-pointer w-10 self-center flex md:hidden p-2 fill-red-400 border-red-400  backdrop-blur-lg border'>
                <svg viewBox='0,0,64,64'>
                    <path
                        d="M58.67,48c2.95,0,5.33,2.39,5.33,5.33s-2.39,5.33-5.33,5.33H5.33C2.39,58.67,0,56.28,0,53.33s2.39-5.33,5.33-5.33h53.33ZM58.67,26.67c2.95,0,5.33,2.39,5.33,5.33s-2.39,5.33-5.33,5.33H5.33C2.39,37.33,0,34.95,0,32s2.39-5.33,5.33-5.33h53.33ZM58.67,5.33c2.95,0,5.33,2.39,5.33,5.33s-2.39,5.33-5.33,5.33H5.33C2.39,16,0,13.61,0,10.67s2.39-5.33,5.33-5.33h53.33Z"
                    ></path>
                </svg>
            </button>
            <ul className=' tinyMenu text-red-400 backdrop-blur-lg p-5 items-center rounded-2xl border flex flex-col gap-10 m-5'>
                <li className='cursor-pointer'><a href="#inicio"> Inicio</a></li>
                <li className='cursor-pointer'><a href="#sobreMi">Sobre Mi</a></li>
                <li className='cursor-pointer'><a href="#contacto">Contacto</a></li>
                <li onClick={reverseAnimation} className='cursor-pointer'>X</li>
            </ul>
        </nav>
    )
}

export default NavBar