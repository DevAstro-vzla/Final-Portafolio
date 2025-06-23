import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrambleTextPlugin)

function TextNormal({ text }) {
    const container = useRef()
    const { contextSafe } = useGSAP({ scope: container })


    useGSAP(() => {

        gsap.from(".Scramble", {
            opacity: 0
        })

        gsap.to(".Scramble", {
            opacity: 1,
            scrambleText: {
                text: text,
                chars: "*{}ABCDEfghijka",
                speed: 2
            },
            duration: 1
        })
    }, { scope: container })


    return (
        <div ref={container}>
            <p className='Scramble text-white'>
                {text}
            </p>
        </div>
    )
}

export default TextNormal