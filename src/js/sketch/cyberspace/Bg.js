const THREE = require('three');
const MathEx = require('js-util/MathEx');

export default class Bg {
  constructor() {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
    };
    this.isShown = false;
    this.obj;
  }
  createObj() {
    // Define Geometry
    const geometry = new THREE.SphereBufferGeometry(10000, 32, 32);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: require('./glsl/bg.vs').default,
      fragmentShader: require('./glsl/bg.fs').default,
      side: THREE.BackSide,
    });

    // Create Object3D
    this.obj = new THREE.Mesh(geometry, material);
  }
  render(time) {
    this.uniforms.time.value += time;
  }
}
