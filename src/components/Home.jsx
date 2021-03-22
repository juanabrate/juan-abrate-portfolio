import React from "react";
import Particles from "react-particles-js";
import './Home.css';

export default function Home() {
    return (
        <div className='home'>     

                <Particles className='particles' width='95vw' height='30vh' 
                params={{
                    particles: {
                        number: {
                            value: 40
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
                <Particles className='particles8' width='27vw' height='35vh' 
                    params={{
                        particles: {
                            number: {
                                value: 20
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
                    <div className='title'>
                        <div className='text'>
                            <span className="l">Hello, I'm <span className="juan">Juan Abrate</span></span>.
                            <br/>
                            I'm a full-stack web developer
                        </div>
                        <div className="button">
                            <span className="button-text">
                                My Skills
                            </span>
                        </div>                
                    </div>
                    <Particles className='particles8' width='27vw' height='35vh' 
                    params={{
                        particles: {
                            number: {
                                value: 20
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

            <Particles className='particles4' width='95vw' height='30vh' 
                params={{
                    particles: {
                        number: {
                            value: 40
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