import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP, ScrambleTextPlugin)

function TitleBig({ text, hoverText }) {
    const container = useRef()
    const { contextSafe } = useGSAP({ scope: container })
    const [hovered, setHovered] = useState(false)



    useGSAP(() => {
         gsap.from(".Scramble", {
          opacity:0
        })
        gsap.to(".Scramble", {
                      opacity:1,
            scrambleText: {
                text: text,
                chars: "*{}ABCDEfghijka",
                speed: 2
            },
            duration: 1
        })
    }, {scope:container})


    const handleMouse = contextSafe(() => {

        if (hovered) {

            gsap.to(".Scramble", {
                color:"white",
                scrambleText: {
                    text: text,
                    chars: "*{}ABCDEfghijka",
                    speed: 2
                },
                duration: 1
            })

            setHovered(!hovered)

        } else {
            gsap.to(".Scramble", {
                color:"#ff6266",
                scrambleText: {
                    text: hoverText,
                    chars: "*{}ABCDEfghijka",
                    speed: 2
                },
                duration: 1
            })
            setHovered(!hovered)

        }

    })

    return (
        <div ref={container} onMouseEnter={handleMouse} >
            <p
                className='Scramble font-[Baunk] text-4xl md:text-6xl'
            >
                {text}
            </p>
        </div>
    )
}

export default TitleBig