import React from "react";
import Particles from "react-particles-js";
import './Home.css';

export default function Home() {
    return (
        <div className='home'>
            <Particles className='particles' width='100vw' height='100vh' 
                params={{
                    particles: {
                        number: {
                            value: 90
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
                                speed: 2.5,
                                distance: 500,
                                duration: 2
                            }
                        }
                    }
                }}/>
            <div className='text'>
                <span className="l">H</span><span className="l">e</span><span className="l">l</span>
                <span className="l">l</span><span className="l">o</span>, <span className="l">I'm </span>
                <span className="juan">Juan Abrate</span>.
                <br/>
                I'm a full-stack web developer.
            </div>
            <div className="button">
                <span className="button-text">
                    My Skills
                </span>
            </div>
        </div>
    )
}