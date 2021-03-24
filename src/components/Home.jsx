import React from "react";
import Particles from "react-particles-js";
import './Home.css';
import {Link} from 'react-scroll';

export default function Home() {
    return (
        <div className='home' id='home'>     

                <Particles className='particles' width='95vw' height='30vh' 
                params={{
                    particles: {
                        number: {
                            value: 70
                        }},
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'slow'
                            }                        
                        },
                        modes: {
                            attract: {
                                speed: 2,
                                distance: 500,
                                duration: 2
                            },
                            grab: {
                                distance: 350,
                                links: {
                                    blink: false,
                                    consent: true,
                                    opacity: 2
                                }
                            },
                            light: {
                                area: {
                                    radius: 400,
                                    gradient: {
                                        start: {
                                            value: 'white'
                                        },
                                        stop: {
                                            value: 'black'
                                        }
                                    }
                                }
                            },
                            slow: {
                                radius: 200,
                                factor: 3
                            }
                        }
                    }
                }}/>

            <div className='title-wrapper'>
                <div className='mid'>
                    <Particles width='27vw' height='35vh' 
                        params={{
                            particles: {
                                number: {
                                    value: 25
                                }},
                            interactivity: {
                                events: {
                                    onHover: {
                                        enable: true,
                                        mode: 'attract'
                                    }                        
                                },
                                modes: {
                                    attract: {
                                        speed: 2,
                                        distance: 500,
                                        duration: 2
                                    }
                                }
                            }
                        }}/>
                </div>
                
                    <div className='title'>
                        <div className='text'>
                            <span className="l">Hello, I'm <span className="juan">Juan Abrate</span></span>.
                            <br/>
                            I'm a full-stack web developer
                        </div>
                        
                        
                        <div className="button-text">
                        <Link className="link1" to="nav" smooth={true} duration={400}>
                            <span style={{display:'flex',textAlign:'center', textJustify: 'center', justifyContent:'center'}}>
                                My Skills &nbsp; <span className="arrow">➤</span>
                            </span>  
                        </Link>                   
                         </div>                        
                        
                        
                                     
                    </div>

                <div className='mid2'>
                    <Particles width='27vw' height='35vh' 
                    params={{
                        particles: {
                            number: {
                                value: 25
                            }},
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: 'attract'
                                }                        
                            },
                            modes: {
                                attract: {
                                    speed: 2,
                                    distance: 500,
                                    duration: 2
                                }
                            }
                        }
                    }}/>
                </div>
            </div>

            <Particles className='particles4' width='95vw' height='30vh' 
                params={{
                    particles: {
                        number: {
                            value: 70
                        }},
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'slow'
                            }                        
                        },
                        modes: {
                            attract: {
                                speed: 2.5,
                                distance: 500,
                                duration: 2
                            }
                        }
                    }
                }}/> 


        </div>
    )
}