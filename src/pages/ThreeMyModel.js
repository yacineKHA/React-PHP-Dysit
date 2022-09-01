import React, {useEffect, useRef, useState} from 'react'
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import axios from "axios";



const ThreeMyModel = (props) => {

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    const [image, setImage] = useState("")
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX

    useEffect(()=>{
        fetch();
    })

    const fetch = ()=>{
        axios.get("https://cataas.com/cat")
            .then((response)=>{
                setImage(response.data);
                console.log("image : " + response.data)
            })
    }

    return (

        <>



        </>

    )


}

export default ThreeMyModel;

const canvaStyle = {
    width: "100%",
    height: "100%",
    display: "block"
}