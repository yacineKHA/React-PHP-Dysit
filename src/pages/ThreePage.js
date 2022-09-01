import React, {useEffect} from 'react'
import * as THREE from 'three';

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {DoubleSide} from "three";



const ThreePage = () => {
    const scene = new THREE.Scene();
    //camera: 1er arg = FOV, 2eme arg = ratio écran (je recup les dimensions ecran), 3eme arg = VIEW FRUSTUM
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1);

    const geometry = new THREE.PlaneGeometry(20, 20)
    //geometrie et sa texture. Ce type de materiaux n'a pas besoin de source de lumière
    const material = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, visible: false})
    const torus = new THREE.Mesh(geometry, material)
    torus.rotateX(-Math.PI / 2)

    const pointLight = new THREE.PointLight("yellow")

    useEffect(() => {
        createScene()
    }, []);


    const createScene = () => {

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.set(10, 15, -22);


        function animate() {
            const controls = new OrbitControls(camera, renderer.domElement)

            requestAnimationFrame(animate);
            // torus.rotation.x += 0.01;
            // torus.rotation.y += 0.005;
            // torus.rotation.z += 0.01;
            controls.update()
            // renderer.setSize(600, 600)
            renderer.setPixelRatio(devicePixelRatio)

            renderer.render(scene, camera)
        }

        animate();


        pointLight.position.set(20, 20, 20);
        const ambiantLight = new THREE.AmbientLight("white")
        const lightHelper = new THREE.PointLightHelper(pointLight)
        const gridHelper = new THREE.GridHelper(20, 20)
        scene.add(ambiantLight)
        scene.add(pointLight);
        scene.add(lightHelper)
        scene.add(torus)
        scene.add(gridHelper)

        const spaceTexture = new THREE.TextureLoader().load('public/images/cyberpunk-2077.jpg');
        scene.background = spaceTexture;


    }

    const addStars = () => {
        const geometry = new THREE.SphereGeometry(0.10, 24, 24)
        const material = new THREE.MeshStandardMaterial({color: "white"})
        const star = new THREE.Mesh(geometry, material)
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(110));
        star.position.set(x, y, z)
        scene.add(star)
    }
    Array(300).fill().forEach(addStars)

    // const addMyModel = () => {
    //
    //     let myModel = new GLTFLoader();
    //     myModel.load('../models3D/test.gltf', (gltf) => {
    //
    //         const myModelMesh = gltf.scene;
    //         myModelMesh.position.x = 0;
    //         myModelMesh.position.y = 10;
    //         myModelMesh.position.z = 15;
    //         scene.add(myModelMesh);
    //
    //     })
    // }





    return (
        <canvas id='bg' style={canvaStyle}>

        </canvas>
    )


}

export default ThreePage;

const canvaStyle = {
    width: "100%",
    height: "100%",
    display: "block"
}