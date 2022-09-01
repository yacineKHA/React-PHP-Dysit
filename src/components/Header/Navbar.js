import React, {useContext, useEffect, useState} from "react";
import '../Menus/CSS/NavBar.css'
import AccountMenu from "../Menus/AccountMenu";
import {Link} from "react-router-dom";
import {ConnectedContext} from "../../contexts/ConnectedContext";

function NavBar() {
    const {user} = useContext(ConnectedContext);
    const [connected, setConnected] = useState({});


    useEffect(() => {
        console.log("header:"+user.id)
        setConnected(localStorage.getItem('user'))
    }, []);


    //changer la couleur navbar au scroll
    const [color, setColor] = useState(false);
    const changeColor = ()=>{
        if (window.scrollY >= 110){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    let content;

    if (connected) {

        content =
            <>
                <AccountMenu/>
            </>
    } else {
        content =
            <>
                <div className='rightNavbar'>
                    <Link className="linkNav1 linkNav" to="/login">Se connecter</Link>
                    <Link className="linkNav2 linkNav" to="/register">S'inscrire</Link>
                </div>
            </>
    }

    return (

        <header className={color ? 'header header-bg' : 'header'}>
            <section>
                <div className="text-white div-header" style={{fontFamily: 'Akira'}}>
                    <p>Did you see it?</p>
                    <h4>
                        <a href="/" className="text-decoration-none">Dysit</a>
                    </h4>
                </div>
                <Link className="threeNav" to="/threejs">ThreeJS</Link>
                <Link className="threeNav" to="/mymodel">My model</Link>
                {content}
            </section>
        </header>

    )
}

export default NavBar;


