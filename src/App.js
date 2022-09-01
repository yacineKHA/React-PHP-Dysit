import Navbar from "./components/Header/Navbar";
import React, {useContext, useEffect, useState} from "react";
import ListOfArticles from "./components/Articles/ListOfArticles";
import './App.css'
import AddArticle from "./components/Articles/AddArticle";
import {Routes, Route, Router} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ConnectedContextProvider, {ConnectedContext} from "./contexts/ConnectedContext";
import MyProfile from "./pages/MyProfile";
import ThreePage from "./pages/ThreePage";
import ThreeMyModel from "./pages/ThreeMyModel";
import {Canvas} from "@react-three/fiber";
import Model from "./Test";
import {Environment} from "@react-three/drei";




const App = () => {
    const {user} = useContext(ConnectedContext);
    console.log("app : "+localStorage.getItem('user'))
    useEffect(()=>{
        // localStorage.removeItem('user');

    }, [])
    //
    // const getUser = ()=>{
    //     let user = new User()
    //     if(localStorage.getItem('user')){
    //         const loginUser = JSON.parse(localStorage.getItem('user'));
    //         console.log("Loginuser: " +loginUser[1])
    //     }
    // }

    return (

        <div style={appStyle}>
                <Navbar/>

                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/" element={
                        <section style={sectionStyle}>
                            <ListOfArticles/>
                            <AddArticle/>
                        </section>
                    }/>
                    <Route path="/profile" element = {<MyProfile/>}/>
                    <Route path="/threejs" element ={<ThreePage/>}/>
                    <Route path="/mymodel" element ={
                        <Canvas style={{marginTop:'150px', width:'100%', height:'900px'}}>
                            <ambientLight intensity={0.5} />
                            {/*<spotLight position={[10, 2, 10]} angle={0.15} penumbra={1} />*/}
                            {/*<pointLight position={[-10, -10, -10]} />*/}
                            <Environment preset="sunset"  />
                           <Model/>
                        </Canvas>
                    }/>
                </Routes>
        </div>
    );
}

export default App;


const appStyle = {
    textAlign: 'center',
    backgroundColor: '#151319',
    height: '100%'
}

const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: '0px',
    gridRowGap: '0px'
}


