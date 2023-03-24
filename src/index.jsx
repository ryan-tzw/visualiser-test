import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [1, 1, 3],
            }}
        >
            <Experience />
        </Canvas>
    </React.StrictMode>
)
