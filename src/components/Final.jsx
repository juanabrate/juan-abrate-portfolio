import React from 'react';
import Particles from 'react-particles-js';

export default function Final() {
    return (
        <div className='final' style={{backgroundColor:'#101010'}}>
            <Particles width='100vw' height='100vh' 
                params={{
                    particles: {
                        number: {
                            value: 20
                        }},
                    backgroundMask: {
                        composite: 
                            "destination-out"
                        
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'light'
                            }                        
                        },
                        modes: { 
                                                       
                            light: {
                                shadow: {
                                    color: {
                                        value: '#ffffff'
                                    },
                                    length: 2000
                                },
                                area: {
                                    radius: 2000,
                                    gradient: {
                                        start: {
                                            value: '#ffe6f0'
                                        },
                                        stop: {
                                            value: '#000000'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }}/>
        </div>
    )
}