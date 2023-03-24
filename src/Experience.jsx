import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import { useControls } from 'leva'

import VisualiserMaterial from './VisualiserMaterial.jsx'

export default function Experience() {
    // Debug panel
    const debug = useControls({
        timeFreeze: false,
        uNoiseFrequency: { value: 3, min: 0, max: 10, step: 0.01 },
        uNoiseAmplitude: { value: 0.5, min: 0, max: 1, step: 0.01 },
        uSpeedFactor: { value: 0.2, min: 0, max: 1, step: 0.001 },
    })

    // Reference
    const matRef = useRef()
    useFrame((_, delta) => {
        if (debug.timeFreeze == false) {
            matRef.current.uTime += delta
        }
    })

    return (
        <>
            <OrbitControls makeDefault />

            <mesh rotation-x={-Math.PI * 0.5}>
                {/* <planeGeometry args={[1, 1, 128, 128]} /> */}
                <sphereGeometry args={[1, 512, 512]} />
                <visualiserMaterial
                    ref={matRef}
                    key={VisualiserMaterial.key}
                    uNoiseFrequency={debug.uNoiseFrequency}
                    uNoiseAmplitude={debug.uNoiseAmplitude}
                    uSpeedFactor={debug.uSpeedFactor}
                />
            </mesh>
        </>
    )
}
