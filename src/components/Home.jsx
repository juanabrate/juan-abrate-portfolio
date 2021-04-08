import React from 'react'
import Particles from 'react-particles-js'
import './Home.css'
import { Link } from 'react-scroll'

export default function Home() {
  const desktopQ = window.matchMedia('(min-width: 1920px)')
  const laptopQ = window.matchMedia('(min-width: 1280px) and (max-width: 1919px)')
  const portraitQ = window.matchMedia('(min-width: 768px) and (max-width: 1279px)')
  const mobileQ = window.matchMedia('(min-width: 320px) and (max-width: 767px)')

  let desktop = desktopQ.matches
  let laptop = laptopQ.matches
  let portrait = portraitQ.matches
  let mobile = mobileQ.matches


  // console.log(desktop, laptop, portrait, mobile)
  // console.log(window.innerWidth)

  return (
    <div className="home" id="home">
      <Particles
        className="particles"
        width="95vw"
        height="30vh"
        params={{
          particles: {
            number: {
              value: desktop
                ? 70
                : laptop
                ? 35
                : portrait
                ? 30
                : mobile
                ? 15
                : null,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'slow',
              },
            },
            modes: {
              attract: {
                speed: 2,
                distance: 500,
                duration: 2,
              },
              grab: {
                distance: 350,
                links: {
                  blink: false,
                  consent: true,
                  opacity: 2,
                },
              },
              light: {
                area: {
                  radius: 400,
                  gradient: {
                    start: {
                      value: 'white',
                    },
                    stop: {
                      value: 'black',
                    },
                  },
                },
              },
              slow: {
                radius: 200,
                factor: 3,
              },
            },
          },
        }}
      />

      <div className="title-wrapper">
        <div className="mid">
          <Particles
            width="27vw"
            height="35vh"
            params={{
              particles: {
                number: {
                  value: desktop
                    ? 25
                    : laptop
                    ? 10
                    : portrait
                    ? 15
                    : mobile
                    ? 10
                    : null,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: 'attract',
                  },
                },
                modes: {
                  attract: {
                    speed: 2,
                    distance: 500,
                    duration: 2,
                  },
                },
              },
            }}
          />
        </div>

        <div className="title">
          <div className="text">
            <span className="l">
              Hey, I'm <span className="juan">Juan Abrate</span>
            </span>
            .
            <br />
            I'm a full-stack web developer
          </div>

          <div className="button-text">
            <Link className="link1" to="nav" smooth={true} duration={400}>
              <span
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  textJustify: 'center',
                  justifyContent: 'center',
                }}
              >
                My Skills &nbsp; <span className="arrow">➤</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="mid2">
          <Particles
            width="27vw"
            height="35vh"
            params={{
              particles: {
                number: {
                  value: desktop
                    ? 25
                    : laptop
                    ? 10
                    : portrait
                    ? 15
                    : mobile
                    ? 10
                    : null,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: 'attract',
                  },
                },
                modes: {
                  attract: {
                    speed: 2,
                    distance: 500,
                    duration: 2,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <Particles
        className="particles4"
        width="95vw"
        height="30vh"
        params={{
          particles: {
            number: {
              value: desktop
                ? 70
                : laptop
                ? 35
                : portrait
                ? 30
                : mobile
                ? 15
                : null,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'slow',
              },
            },
            modes: {
              attract: {
                speed: 2.5,
                distance: 500,
                duration: 2,
              },
            },
          },
        }}
      />
    </div>
  )
}
