import React from "react";
import {hover} from "@testing-library/user-event/dist/hover";



function SortBar(){


    return(
        <>
            <div style={divStyle} >
                <p style={{fontFamily: 'akira', fontSize: '40px',color:'white', marginTop:'150px'}}>Tous les articles</p>
                <p >Trier par :
                    <select style={selectStyle}>
                        <option style={optionStyle}> Les plus récents</option>
                        <option style={optionStyle}> Les plus aimés</option>
                        <option style={optionStyle}> Les plus anciens</option>
                    </select>
                </p>
            </div>
            <div style={divider}></div>
        </>
    )
}

export default SortBar;

const divStyle ={
    color:'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'start',
    alignItems:'start'
}

const divider = {
    backgroundColor: 'white',
    width:'100%',
    height:'0.5px',
    marginBottom: '50px',
}

const selectStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '30px',
    marginLeft: '10px',
    cursor: 'pointer',
    border: '1px solid white',
    padding: '5px'
}

const optionStyle = {
    borderRadius: '30px',
    border: '1px solid white',
    cursor: 'pointer',
    padding: '5px'
}



