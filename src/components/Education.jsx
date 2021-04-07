import React from "react";
import './Education.css';
import logo from './henry-logo.jfif';

export default function Education ({queries}) {
    return (
        <div className="wrapper" id='cv'>
            {/* <h1 style={{marginTop: '2%'}}>Education </h1> */}
            <div className="edu-wrapper">
            
                <div className="henry-pic">
                
                <img className="logo" src={logo} alt="Logo" />
                    
                </div>

                <div className="henry-content">

                    <h2 style={{lineHeight:'1'}}>Henry Bootcamp</h2>  
                    {queries.mobile ? <h4 style={{lineHeight:'1'}}>Full Stack Web Developer</h4> : <h3>Full Stack Web Developer</h3>}              
                                   
                    {/* <h4>August 2020 - December 2020</h4> */}

                    <ul className="list">
                        <li><span>HTML5 | CSS3 | JavaScript | Git</span></li>
                        <li><span>NodeJs | Web servers (Express)</span></li>
                        <li><span>AJAX | Webpack | ReactJS | Redux | React-Redux</span></li>
                        <li><span>SQL | Postgres | MySQL | authentication</span></li>
                        <li><span>Data Structures | algorithms | Big O | Functional VS OOP</span></li>
                    </ul>

                </div>


            </div>
        
        </div>
        

    )
    
}