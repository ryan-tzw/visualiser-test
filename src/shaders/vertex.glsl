#pragma glslify: perlin3d = require(glsl-noise/classic/3d)
#pragma glslify: perlin4d = require(glsl-noise/classic/4d)

uniform float uTime;
uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;
uniform float uSpeedFactor;

varying vec3 vNormal;
varying float vNoiseStrength;

void main() {
    // vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vec3 newPosition = position;

    // Displacement
    vec3 displacedPosition = position;
    displacedPosition += perlin4d(vec4(displacedPosition * uNoiseFrequency, uTime * uSpeedFactor));

    float noiseStrength = perlin4d(vec4(displacedPosition * uNoiseFrequency, uTime * uSpeedFactor * 1.0));
    noiseStrength = pow(noiseStrength, 2.0);

    // float stepFactor = 1.0 - step(0.2, noiseStrength);
    // noiseStrength -= stepFactor;
    noiseStrength = clamp(0.0, noiseStrength, 1.0);
    newPosition += normal * noiseStrength * uNoiseAmplitude;

    // newPosition = step(0.5, noiseStrength);

    // Ignore
    vec4 viewPosition = viewMatrix * vec4(newPosition, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    // Varyings
    vNormal = normal;
    vNoiseStrength = noiseStrength;
}