import React from "react";
import './Nav.css';

export default function Nav () {
    return (
        <>
        <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor: '#363333'}}>
            <div className="nav">
                <span>
                    HOME
                </span>
                <span>
                    ABOUT
                </span>
                <span>
                    CV
                </span>
                <span>
                    CONTACT ME!
                </span>
            </div>            
        </div>
        <div style={{display: 'flex', flexDirection:'row', backgroundColor:'cyan', height:'2px', width:'100%'}}></div>
        </>
        
        

    )
    
}