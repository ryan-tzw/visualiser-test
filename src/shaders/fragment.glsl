varying float vNoiseStrength;

void main() {
    float noiseStrength = vNoiseStrength;

    gl_FragColor = vec4(vec3(noiseStrength), 1.0);
}