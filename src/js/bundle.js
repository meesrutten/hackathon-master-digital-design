(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const app = {
    scene: null,
    camera: null,
    renderer: null,
    width: window.innerWidth,
    height: window.innerHeight,
    particleCount: 1800,
    mouse: {
        x: null,
        y: null
    },
    init() {
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.1, 10000);
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();

        this.geometry = new THREE.Geometry();
        this.material = new THREE.PointsMaterial({
            color: 0xffffff,
        });

        for (let i = 0; i < this.particleCount; i++) {

            let pX = Math.random() * 100 - 50,
                pY = Math.random() * 100 - 50,
                pZ = Math.random() * 100 - 250,
                particle = new THREE.Vector3(pX, pY, pZ);

            this.geometry.vertices.push(particle);
        }


        const particleSystem = new THREE.Points(
            this.geometry,
           this.material);

        this.scene.add(particleSystem);

        this.renderer = new THREE.WebGLRenderer({antialias: true});

        this.renderer.setSize(this.width, this.height);
        document.body.appendChild(this.renderer.domElement);

        this.animate();

        window.addEventListener('resize', () => this.resize());
    },

    animate() {
        requestAnimationFrame(() => this.animate());
        let pCount = this.particleCount;
        while(pCount--) {
            const particle = this.geometry.vertices[pCount];
            if(particle.y < -200) {
                particle.y = 200;
                particle.y = 0;
            }

            let num = Math.random() * 0.5;
            num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;


            particle.y -= num;
            particle.x -= num;
            particle.z -= num;
        }
        this.geometry.verticesNeedUpdate = true;
        this.renderer.render(this.scene, this.camera);
    },

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.width, this.height);
    }
}

app.init();

},{}]},{},[1,2]);
