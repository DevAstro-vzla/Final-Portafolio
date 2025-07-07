import React from 'react'
import {  useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function SphereRotation() {

    const sphereRef = useRef()

    useFrame((state, delta, xrFrame) => {
        sphereRef.current.rotation.x += (delta/2)
        sphereRef.current.rotation.y += (delta/2)
    })

    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[2, 11, 11]} >
            </sphereGeometry>
            <meshStandardMaterial wireframe={true} color={"#ff6266"}></meshStandardMaterial>
        </mesh>
    )
}

export default SphereRotation