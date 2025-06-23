import React from 'react'
import TitleBig from '../Text/TitleBig'
import TextNormal from '../Text/TextNormal'
import LinesSvg from '../Svg/Lines'
import Corners from '../Svg/Corners'
import Xsvg from '../Svg/X'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

function Hero() {
    const containerMain = useRef()
    const timeline = gsap.timeline()
    const { contextSafe } = useGSAP({ scope: containerMain })

    useGSAP(() => {
        timeline.from(".initContainer", {
            y: 100,
            opacity: 0,
            ease: "power1.inOut",
            duration: 1
        })
        timeline.from(".Xsvg", {
            opacity: 0,
            stagger: {
                from: "random",
                amount: 0.5
            },
            ease: "power1.out",

        })
        timeline.from(".Corners",{
            opacity:0,
            y:50
        },"<")
        timeline.from(".LinesSvg",{
            opacity:0,
            y:50
        },"<")
        timeline.to(".Xsvg", {
            opacity: 1,
            ease: "power1.out",
        })
        timeline.from(".Xsvg", {
            opacity: 0,
            stagger: {
                from: "random",
                amount: 0.5
            },
            ease: "power1.out",
            duration: 0.2

        })
        timeline.to(".Xsvg", {
            opacity: 1,
            ease: "power1.out",
        })
    })


    return (
        <>
            <div ref={containerMain} className='overflow-hidden w-lvw h-lvh relative'>
                <div className='initContainer absolute top-0 bg-neutral-800 w-full h-full z-0'
                    style={{
                        clipPath: "polygon(2% 2%, 2% 85%, 13% 85%, 17% 90%, 17% 98%, 98% 98%, 98% 15%, 80% 15%, 70% 6%, 70% 2%)"
                    }}
                ></div>
                <div className='initContainer absolute top-0 bg-neutral-950 w-full h-full z-1'
                    style={{
                        clipPath: "polygon( calc(2% + 2px) calc(2% + 2px), calc(2% + 2px) calc(85% - 2px), calc(13% + 2px) calc(85% - 2px), calc(17% + 2px) calc(90% - 2px), calc(17% + 2px) calc(98% - 2px), calc(98% - 2px) calc(98% - 2px), calc(98% - 2px) calc(15% + 2px), calc(80% - 2px) calc(15% + 2px), calc(70% - 2px) calc(6% + 2px), calc(70% - 2px) calc(2% + 2px))"
                    }}
                >
                    <div className='LinesSvg absolute top-[20%] right-[3%] w-7 fill-amber-50'>
                        <LinesSvg />
                    </div>
                    <div className='Corners absolute bottom-[4%] right-[3%] w-7 fill-amber-50'>
                        <Corners />
                    </div>
                    <div className='Corners absolute top-[4%] left-[3%] rotate-180 w-7 fill-amber-50'>
                        <Corners />
                    </div>
                    <div className='absolute bottom-[4%] flex left-[20%] rotate-180 h-7 gap-1 fill-amber-50'>
                        <svg className="Xsvg" viewBox="0 0 72.44 71.97">
                            <polygon
                                points='72.44 18.13 54.92 .61 36.86 18.67 18.81 .61 1.29 18.13 19.35 36.19 1.29 54.24 18.81 71.76 36.86 53.7 54.92 71.76 72.44 54.24 54.38 36.19 72.44 18.13'
                            ></polygon>
                        </svg>
                        <svg className="Xsvg" viewBox="0 0 72.44 71.97">
                            <polygon
                                points='72.44 18.13 54.92 .61 36.86 18.67 18.81 .61 1.29 18.13 19.35 36.19 1.29 54.24 18.81 71.76 36.86 53.7 54.92 71.76 72.44 54.24 54.38 36.19 72.44 18.13'
                            ></polygon>
                        </svg>
                        <svg className="Xsvg" viewBox="0 0 72.44 71.97">
                            <polygon
                                points='72.44 18.13 54.92 .61 36.86 18.67 18.81 .61 1.29 18.13 19.35 36.19 1.29 54.24 18.81 71.76 36.86 53.7 54.92 71.76 72.44 54.24 54.38 36.19 72.44 18.13'
                            ></polygon>
                        </svg>
                        <svg className="Xsvg" viewBox="0 0 72.44 71.97">
                            <polygon
                                points='72.44 18.13 54.92 .61 36.86 18.67 18.81 .61 1.29 18.13 19.35 36.19 1.29 54.24 18.81 71.76 36.86 53.7 54.92 71.76 72.44 54.24 54.38 36.19 72.44 18.13'
                            ></polygon>
                        </svg>
                        <svg className="Xsvg" viewBox="0 0 72.44 71.97">
                            <polygon
                                points='72.44 18.13 54.92 .61 36.86 18.67 18.81 .61 1.29 18.13 19.35 36.19 1.29 54.24 18.81 71.76 36.86 53.7 54.92 71.76 72.44 54.24 54.38 36.19 72.44 18.13'
                            ></polygon>
                        </svg>
                    </div>
                </div>
                <div className=' absolute top-[50%] left-[50%]  translate-[-50%] z-3 '>
                    <TitleBig text={"Andrew Rey"} hoverText={"Programador"}></TitleBig>
                    <TextNormal text={"Portafolio -- 2025"} />
                </div>
            </div >
        </>
    )
}

export default Hero