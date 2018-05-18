(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// const THREE = require('three');
//
// const app = {
//     scene: null,
//     camera: null,
//     renderer: null,
//     width: window.innerWidth,
//     height: window.innerHeight,
//     mouse: {
//         x: null,
//         y: null
//     },
//     materialShader: {
//         uniforms: {
//             time: {value: 1.0},
//             resolution: {value: new THREE.Vector2()}
//         },
//         vertexShader: document.getElementById('vertexShader').textContent,
//         fragmentShader: document.getElementById('fragmentShader').textContent
//     },
//     init() {
//         this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 10);
//         this.camera.position.z = 1;
//         this.scene = new THREE.Scene();
//
//         this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
//         this.material = new THREE.MeshNormalMaterial();
//
//         this.mesh = new THREE.Mesh(this.geometry, this.material);
//         this.scene.add(this.mesh);
//
//         this.renderer = new THREE.WebGLRenderer({antialias: true});
//
//         this.renderer.setSize(this.width, this.height);
//         document.body.appendChild(this.renderer.domElement);
//
//         this.animate();
//
//         window.addEventListener('resize', () => this.resize());
//     },
//
//     animate() {
//         requestAnimationFrame(() => this.animate());
//         this.mesh.rotation.x += 0.01;
//         this.mesh.rotation.y += 0.02;
//
//         this.renderer.render(this.scene, this.camera);
//     },
//
//     resize() {
//         this.width = window.innerWidth;
//         this.height = window.innerHeight;
//
//         this.camera.aspect = this.width / this.height;
//         this.camera.updateProjectionMatrix();
//
//         this.renderer.setSize(this.width, this.height);
//     }
// }
//
// app.init();

},{}]},{},[1,2]);
