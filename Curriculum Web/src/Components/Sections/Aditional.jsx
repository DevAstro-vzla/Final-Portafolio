import React, { Suspense, useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useControls } from 'leva'

gsap.registerPlugin(ScrollSmoother, SplitText,)






function Aditional() {
    const container = useRef()

    const hand = useLoader(GLTFLoader, '/src/assets/3D/hand_sculpture.glb', (loader) => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
        dracoLoader.setDecoderConfig({ type: 'js' })
        loader.setDRACOLoader(dracoLoader)
    })
    const flower = useLoader(GLTFLoader, '/src/assets/3D/flower.glb', (loader) => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
        dracoLoader.setDecoderConfig({ type: 'js' })
        loader.setDRACOLoader(dracoLoader)
    })

    const { x, y, z } = useControls({
        x: {
            value: 0,
            step: 0.01
        },
        y: {
            value: 0,
            step: 0.01
        },
        z: {
            value: 0,
            step: 0.01
        }
    })

    hand.scene.scale.set(10, 10, 10)
    hand.scene.position.set(x,y,z)

    useGSAP((() => {


        const tl3DObject = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                markers: true,
                end: "clamp(bottom bottom)",
                scrub: 1

            }
        })
        tl3DObject.from(".aditional3d", {
            opacity: 0
        })
        tl3DObject.to(".aditional3d", {
            opacity: 1
        })
        tl3DObject.from(hand.scene.rotation, {
            x: 0.5
        })
        tl3DObject.to(hand.scene.rotation, {
            x: 0
        })

        document.fonts.ready.then(() => {

            SplitText.create(".tittleAditional", {
                type: "chars",
                onSplit: (self) => {
                    return gsap.from(self.chars, {
                        y: 100,
                        opacity: 0,
                        rotate: gsap.utils.random(0, 20),
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top bottom",
                            end: "clamp(bottom bottom)",
                            scrub: 1
                        },
                        stagger: {
                            from: "random",
                            amount: 1
                        }
                    }
                    )
                }

            })


            const divs = gsap.utils.toArray(".aditionalSegment")


            divs.forEach((div, i) => {
                const tlImg = gsap.timeline({
                    scrollTrigger: {
                        trigger: div,
                        start: "top 50%",
                        end: "top 50%",
                        scrub: 1
                    }
                })
                if (i != 1) {
                    tlImg.from(div.children[0], {
                        opacity: 0,
                        repeat: 2,
                        duration: 0.2,
                    })
                    tlImg.to(div.children[0], {
                        opacity: 1,
                        repeat: 2,
                        duration: 0.2
                    })

                    SplitText.create(div.children[1], {
                        type: "chars",
                        onSplit: (self) => {
                            return gsap.from(self.chars, {
                                y: 100,
                                opacity: 0,
                                rotate: gsap.utils.random(0, 20),
                                scrollTrigger: {
                                    trigger: div,
                                    start: "top bottom",
                                    end: "clamp(bottom bottom)",
                                    scrub: 1
                                },
                                stagger: {
                                    from: "random",
                                    amount: 1
                                }
                            }
                            )
                        }

                    })

                } else {
                    tlImg.from(div.children[1], {
                        opacity: 0,
                        repeat: 2,
                        duration: 0.2
                    })
                    tlImg.to(div.children[1], {
                        opacity: 1,
                        repeat: 2,
                        duration: 0.2
                    })

                    SplitText.create(div.children[0], {
                        type: "chars",
                        onSplit: (self) => {
                            return gsap.from(self.chars, {
                                y: 100,
                                opacity: 0,
                                rotate: gsap.utils.random(0, 20),
                                scrollTrigger: {
                                    trigger: div,
                                    start: "top bottom",
                                    end: "clamp(bottom bottom)",
                                    scrub: 1
                                },
                                stagger: {
                                    from: "random",
                                    amount: 1
                                }
                            }
                            )
                        }

                    })
                }
            })
        })




    }), { scope: container })

    return (
        <>
            <div ref={container} className='w-full sm:h-[420vh] h-[250vh] bg-white flex flex-col justify-between'>
                <p className=' z-3 sticky top-10 mix-blend-exclusion font-[Nippo-Bold] text-[6.5vw] text-nowrap tittleAditional'>Esfuerzo, Dedicación y Pasión</p>
                <div className='aditional3d fixed w-[100vw] h-[100vh] opacity-100 z-0 top-0'>
                    <Canvas >
                        <ambientLight intensity={1}></ambientLight>
                        <primitive object={hand.scene} size={[1, 1, 1]}></primitive>
                    </Canvas>
                </div>
                <div className='aditionalSegment flex flex-col gap-10 md:gap-5 md:flex-row justify-around w-full items-center '>
                    <img className=' drop-shadow-2xl shadow-lg/50 md:w-1/3 w-1/2 rounded-xl -rotate-6' src='/src/assets/carriza-maiquez-sUIdCvblysI-unsplash.webp'></img>
                    <p className=' text-black text-center text-4xl' >Dispuesto a crear paginas <br /> webs de alto impacto</p>
                </div>
                <div className='flex aditionalSegment flex-col gap-10 md:gap-5 md:flex-row justify-around w-full items-center '>
                    <p className=' text-black text-4xl text-center' >Impulsar su negocio <br /> con soluciones tecnologicas</p>
                    <img className=' drop-shadow-2xl shadow-lg/50 md:w-1/3 w-1/2 text-center rounded-xl rotate-6' src='/src/assets/scott-graham-5fNmWej4tAA-unsplash.webp'></img>
                </div>
                <div className='flex aditionalSegment flex-col gap-10 md:gap-5  md:flex-row justify-around w-full items-center'>
                    <img className='  drop-shadow-2xl shadow-lg/50 md:w-1/3 rounded-xl w-1/2 -rotate-6' src='/src/assets/priscilla-du-preez-XkKCui44iM0-unsplash.webp'></img>
                    <p className=' text-black text-center text-4xl' >Formar parte de un <br /> equipo de trabajo proactivo</p>
                </div>
                <div className='flex gap-10 md:gap-5 flex-col justify-around w-full items-center'>
                    <img className=' aditionalImg0 w-[60%]  object-cover rounded-xl drop-shadow-2xl shadow-lg/50 ' src='/src/assets/ismail-korkmaz-elT08YCdBy8-unsplash.webp'></img>
                    <p className=' ultiText text-black mb-10 justify-self-center self-center text-2xl' >Es lo que define la excelencia</p>
                </div>
            </div>
        </>

    )
}

export default Aditional