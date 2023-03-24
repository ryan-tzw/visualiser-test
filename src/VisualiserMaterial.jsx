import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { useControls } from 'leva'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

const VisualiserMaterial = shaderMaterial(
    {
        uTime: 0,
        uNoiseFrequency: 5,
        uNoiseAmplitude: 1,
        uSpeedFactor: 0.1,
    },
    vertexShader,
    fragmentShader
)

extend({ VisualiserMaterial })
export default { VisualiserMaterial }
