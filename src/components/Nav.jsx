import React from "react";
import './Nav.css';
import {Link} from 'react-scroll';

export default function Nav () {
    return (
        <>
        <div id='nav' style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor: '#282828'}}>
            <div className="nav">
                <Link to='home' smooth={true} duration={400}>
                    <span className='buttons'>
                        HOME
                    </span>
                </Link>
                <Link to="skills" smooth={true} duration={400}>
                    <span className='buttons'>
                        ABOUT
                    </span >
                </Link>
                <Link to="cv" smooth={true} duration={400}>
                    <span className='buttons'>
                        CV
                    </span>
                </Link>
                <Link to="reach" smooth={true} duration={400}>
                    <span className='buttons'>
                        CONTACT ME
                    </span> 
                </Link>              
            </div>            
        </div>
        <div style={{display: 'flex', flexDirection:'row', backgroundColor:'cyan', height:'2px', width:'100%'}}></div>
        </>
    )
}