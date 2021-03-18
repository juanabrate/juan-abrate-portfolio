import React from "react";
import './Home.css';

export default function Home() {
    return (
        <div className='home'>
            <div className='text'>
                <span className="l">H</span><span className="l">e</span><span className="l">l</span>
                <span className="l">l</span><span className="l">o</span>, <span className="l">I'm </span>
                <span className="juan">Juan Abrate</span>.
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