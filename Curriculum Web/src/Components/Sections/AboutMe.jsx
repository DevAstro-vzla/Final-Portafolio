import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Canvas, useFrame } from '@react-three/fiber'
import SphereRotation from '../3d/SphereRotation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/all'
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)



function AboutMe() {
    const container = useRef()

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".sobremiContainer",
                toggleActions:"play play play play",
                start: "top 40%",
                end: "bottom 100%"
            }
        })

        document.fonts.ready.then(() => {
            const split = SplitText.create(".parrafo", {
                type: "words,lines",
                mask: "lines"
            })

            gsap.from(split.words, {
                opacity: 0,
                y: 50,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".parrafo",
                    start: "clamp(top 80%)",
                    end: "clamp(bottom bottom)",
                    scrub: 1
                }
            })
        })


        timeline.set(".sobremiContainer", {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        })
        timeline.from(".sobremiContainer", {
            opacity: 0,
        })
        timeline.to(".sobremiContainer", {
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
        timeline.to(".itemSobreMi", {
            opacity: 1,
            duration: 0.1,
            repeat: 2
        })
        timeline.to(".itemSobreMi-2", {
            opacity: 1,
            duration: 0.1,
            repeat: 2
        })
        timeline.to(".itemSobreMi-3", {
            opacity: 1,
            duration: 0.1,
            repeat: 2
        })

        const resetAni = ScrollTrigger.create({
            trigger:container.current,
            onLeave:()=>timeline.pause(0)
        })

    }, { scope: container })

    return (
        <div ref={container} className=' shadow-lg/100 drop-shadow w-full flex flex-col mt-15'>
            <div className=' flex md:flex-row flex-col overflow-hidden max-h-[50vh] '>
                <div className=' sobremiContainer bg-red-400 h-[40vh] flex items-center gap-[2px] p-[2px]'>
                    <div className='bg-black itemSobreMi  opacity-0 h-full flex-col items-center min-w-32 flex justify-center'>
                        <div className='w-[70%]'>
                            <Canvas
                            >
                                <ambientLight intensity={1}></ambientLight>
                                <SphereRotation></SphereRotation>
                            </Canvas>
                        </div>
                        <p  >
                            Sobre Mi
                        </p>
                    </div>
                    <div className='itemSobreMi-2  opacity-0 bg-black h-full min-w-60 flex-1 p-2 text-center flex items-center'>
                        Tsu en informática, a quien le gusta la programación / la automatización de procesos / páginas web y diseño. <br></br> Creyente de que la excelencia nace del esfuerzo, pasión y disciplina <br></br> Por lo tanto, a lo largo de mi trayectoria he fallado y he aprendido. <br></br> Será un gusto trabajar y ser de utilidad
                    </div>
                </div>
                <img className='itemSobreMi-3 opacity-0 self-center m-2 w-1/2 object-contain bg-cover' src='/src/assets/code.webp'></img>
            </div>
            <div className='bg-neutral-950 m-10 border border-neutral-800'>
                <div className='w-2/3  justify-self-center overflow-scroll scroll text-5xl self-center m-15'
                    style={{
                        scrollbarWidth: 'none'
                    }}>
                    <p className='parrafo' >
                        A fecha de 26/06/2025 cuento con experiencia de 3 años trabajando en el area publica, reparando impresoras (Epson,Canon), ofreciendo soporte administrativo (tanto en excel como sistema privado), realizando conexiones ethernet privadas, implementando sistemas HikVision Biometricos, y muchas cosas mas
                    </p>
                </div>
            </div>  
        </div>
    )
}

export default AboutMe