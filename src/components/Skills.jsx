import React from 'react'
import './Skills.css'
import { Link } from 'react-scroll'
import JSLogo from './javascript-seeklogo.com.svg'
import classNames from 'classnames'
import Reactlogo from '../logo.svg'
import ReduxLogo from './redux-logo-9CA6836C12-seeklogo.com.png'
import HtmlLogo from './html-logo.png'
import CssLogo from './css-logo.png'
import ExpressLogo from './express-logo.png'
import NodeJs from './node-js.png'
import SequelizeLogo from './sequelize-logo.png'
import PostgresLogo from './postgres-logo.png'
import GraphLogo from './graph-logo.png'

const js = classNames('left', 'js')

export default function Skills({queries}) {
  return (
    <div className="skill-section" id="skills">
      <h1
        style={{
          paddingTop: queries.portrait ? '0%' : queries.mobile ? '0%' : '3%',
          color: 'white',
          fontFamily: 'Ubuntu',
          letterSpacing: '1px',
        }}
      ></h1>
      <div className="skills-wrapper">
        <div className="about">
          <span className="text-about">
            I'm a passionate web developer with experience of building Web
            applications with JavaScript / Reactjs / Nodejs among other
            technologies. I have a serious passion for UX/UI design, creating
            intuitive and dynamic user experiences.
            <br />
            <br />
            <Link to="reach" smooth={true} duration={400}>
              <div className="s-contact">
                <span style={{ paddingLeft: '0.2%' }}>Contact&nbsp;me!</span>
              </div>
            </Link>
          </span>
        </div>

        <div className="skills-box2">
          <div className="left">
            <div className="react">
              <img src={Reactlogo} className="App-logo" alt="logo" />
              {/* React */}
            </div>

            <div className="redux">
              <img src={ReduxLogo} className="redux-logo" />
              {/* Redux */}
            </div>
            <div className="css">
              <img src={CssLogo} className="css-logo" />
              {/* CSS */}
            </div>
            <div className="postgres">
              <img src={PostgresLogo} className="postgres-logo" />
              {/* PostgreSQL */}
            </div>
          </div>
          <div className="right">
            <div className="js">
              <img src={JSLogo} className="js-logo" />
              {/* Javascript                                       */}
            </div>
            {/* <div className='css'>
                            CSS
                        </div> */}
            <div className="nodeJs">
              <img src={NodeJs} className="nodeJs-logo" />
              {/* NodeJS */}
            </div>

            <div className="sequelize">
              <img src={SequelizeLogo} className="sequelize-logo" />
              {/* SequelizeORM */}
            </div>
            <div className="graph">
              <img src={GraphLogo} className="graph-logo" />
            </div>
            {/* <div className='express'>
                            <img src={ExpressLogo} className='express-logo'/>
                            Express
                        </div> */}
          </div>
        </div>

       
      </div>
    </div>
  )
}
