import React from "react";
import './Nav.css';

export default function Nav () {
    return (
        <>
        <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor: '#282828'}}>
            <div className="nav">
                <span className='buttons'>
                    HOME
                </span>
                <span className='buttons'>
                    ABOUT
                </span >
                <span className='buttons'>
                    CV
                </span>
                <span className='buttons'>
                    CONTACT ME!
                </span>
            </div>            
        </div>
        <div style={{display: 'flex', flexDirection:'row', backgroundColor:'cyan', height:'2px', width:'100%'}}></div>
        </>
    )
}