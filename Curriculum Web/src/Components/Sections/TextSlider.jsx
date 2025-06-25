import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextNormal from '../Text/TextNormal'
import GreekSvg from '../Svg/GreekSvg'

function TextSlider() {
    const container = useRef()
    const timeline = gsap.timeline({ repeat: -1, })

    useGSAP(() => {


    }, { scope: container })

    return (
        <div className=' h-lvh w-full flex flex-col'>
            <div className=' flex gap-[2px] h-[30vh] overflow-hidden p-[2px]'>
                <div className='  bg-red-400 flex items-center gap-[2px] p-[2px]'>
                    <div className='bg-black h-full flex-none min-w-32 flex justify-center'>
                        title
                    </div>
                    <div className='bg-black h-full w-full flex-1 p-2 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis omnis praesentium, et atque vero molestiae, natus dicta ad ipsum sed nostrum rerum ex assumenda quasi quaerat est officia minima.
                    </div>
                </div>
                <div className='fill-white w-full'>
                <GreekSvg></GreekSvg>
                </div>
            </div>

        </div>
    )
}

export default TextSlider