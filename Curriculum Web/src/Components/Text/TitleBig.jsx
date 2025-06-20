import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'
import { use } from 'react'
gsap.registerPlugin(useGSAP, ScrambleTextPlugin)

function TitleBig({ text }) {
    const container = useRef()



    useGSAP(() => {
        gsap.to(".Scramble", {
            scrambleText: {
                text:text,
                chars: "*{}ABCDEfghijka",
                speed: 2
            },
            duration: 2
        })

    }, { scope: container })




    return (
        <div ref={container} >
            <p
                className='Scramble font-[Baunk] text-4xl'
            >
                {text}
            </p>
        </div>
    )
}

export default TitleBig