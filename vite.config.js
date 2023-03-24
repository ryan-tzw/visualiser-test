// import glsl from 'vite-plugin-glsl'
import { glslify } from 'vite-plugin-glslify'
import react from '@vitejs/plugin-react-swc'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    plugins: [react(), glslify()],
    root: 'src/',
    publicDir: '../public/',
    base: './',
    server: {
        host: true,
        open: !isCodeSandbox, // Open if it's not a CodeSandbox
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },
}
