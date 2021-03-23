import React from "react";
import './Skills.css';
import JSLogo from './javascript-seeklogo.com.svg';
import classNames from 'classnames';
import Reactlogo from '../logo.svg';
import ReduxLogo from './redux-logo-9CA6836C12-seeklogo.com.png'

const js = classNames('left', 'js');

export default function Skills () {
    return (
        <div className="skill-section">
            <h1 style={{paddingTop: '5%', color: 'white', fontFamily: 'Ubuntu'}}>SKILLS</h1>
            <div className="skills-wrapper">
            
                <div className="about">
                    <span className="text-about">
                    I'm a passionate software developer with experience of building Web applications with JavaScript / Reactjs / Nodejs among other technologies. I have a serious passion for UX/UI design, creating intuitive and dynamic user experiences. 
                    <br/>
                    <br/>
                    <a style={{paddingLeft:'0.2%'}}>Contact me!</a>                  
                    </span>
                    
                </div>  

                <div className="skills-box2">
                    <div className="left">
                        <img src={JSLogo} className="s-logo" style={{maxWidth: '30%'}}/> 
                        
                        Javascript                                      
                    </div>
                    <div className='right'>                        
                        <img src={Reactlogo} className="App-logo" alt="logo" />
                        React
                    </div>
                    <div className='left'>
                        <img src={ReduxLogo} className="s-logo" />
                        Redux
                    </div>
                    <div className='right'>
                        CSS
                    </div>
                    <div className='left'>
                        HTML
                    </div>
                    <div className='right'>
                        Express
                    </div>
                    <div className='left'>
                        Postgres
                    </div>
                    <div className='right'>
                        Sequelize
                    </div>
                    <div className='left'>
                        GraphQL
                    </div>
                </div>

                {/* <div className="skills-box">

                    <div className="skill">
                        <div className="box1">
                            <span>
                                Javascript
                            </span>
                        </div>
                            
                        <div className="box3">
                            <span style={{color:'rgba(100, 11, 88, 0.924)'}}>
                                .
                            </span>
                        </div>  

                        <span style={{color:'white', marginRight: '3%'}}>
                                60%
                            </span>               
                    </div>

                    <div className="skill">
                        <div className="box1">
                            <span>
                                React
                            </span>
                        </div>
                            
                        <div className="box3">
                            <span style={{color:'rgba(100, 11, 88, 0.924)'}}>
                                .
                            </span>
                        </div>  

                        <span style={{color:'white', marginRight: '3%'}}>
                                60%
                            </span>               
                    </div>

                    <div className="skill">
                        <div className="box1">
                            <span>
                                CSS
                            </span>
                        </div>
                            
                        <div className="box3">
                            <span style={{color:'rgba(100, 11, 88, 0.924)'}}>
                                .
                            </span>
                        </div>  

                        <span style={{color:'white', marginRight: '3%'}}>
                                60%
                            </span>               
                    </div>

                    <div className="skill">
                        <div className="box1">
                            <span>
                                Express
                            </span>
                        </div>
                            
                        <div className="box3">
                            <span style={{color:'rgba(100, 11, 88, 0.924)'}}>
                                .
                            </span>
                        </div>  

                        <span style={{color:'white', marginRight: '3%'}}>
                                60%
                            </span>               
                    </div>

                    <div className="skill">
                        <div className="box1">
                            <span>
                                Postgres
                            </span>
                        </div>
                            
                        <div className="box3">
                            <span style={{color:'rgba(100, 11, 88, 0.924)'}}>
                                .
                            </span>
                        </div>  

                        <span style={{color:'white', marginRight: '3%'}}>
                                60%
                            </span>               
                    </div>

                    <div className="skill">
                        <div className="box1">
                            <span>
                                Sequelize
                            </span>
                        </div>
                            
                        <div className="box3">
                            <span style={{color:'rgba(100, 11, 88, 0.924)'}}>
                                .
                            </span>
                        </div>  

                        <span style={{color:'white', marginRight: '3%'}}>
                                60%
                            </span>               
                    </div>

                    <div className="skill">
                        <div className="box1">
                            <span>
                                GraphQL
                            </span>
                        </div>
                            
                        <div className="box3">
                            <span style={{color:'rgba(100, 11, 88, 0.924)'}}>
                                .
                            </span>
                        </div>  

                        <span style={{color:'white', marginRight: '3%'}}>
                                60%
                            </span>               
                    </div>
                    

                </div> */}


            </div>
        
        </div>
        

    )
    
}