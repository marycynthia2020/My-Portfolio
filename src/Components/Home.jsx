import { useEffect, useRef, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"


const Home = () => {
  const [mobile, setMobile] = useState(false)

  const {section} = useParams()

  const handleClick = () => {
    setMobile(!mobile)
  }

  const handleTouch = () => {
    setMobile(false) 
  }

  const refs = {
    about: useRef(),
    contact: useRef(),
    projects: useRef(),
    skills: useRef(),
  };

  useEffect( ()=> {
    if(section && refs[section]) {
      refs[section].current.scrollIntoView({behavior: "smooth"})
    }

  }, [section])


  return (
    <div className="flex justify-between bg-white" >
      <div>
        <div className=" absolute top-0 left-0 md:hidden z-50" >
          <button className=" float-right  fixed p-2 bg-black text-white "onClick ={handleClick}>{mobile? <FontAwesomeIcon icon= {faTimes} className="icon"/>: <FontAwesomeIcon icon={faBars } className="icon"/>}</button>
        </div>
        <nav className={`${
            mobile ? " w-1/2 flex flex-col text-xl font-medium h-screen justify-evenly items-center font-mono fixed bg-zinc-50 :shadow-2xl border-2 border-zinc-100 z-10" : "hidden"
          } md:flex-col md:text-xl md:font-medium md:h-screen md:flex md:w-1/5 md:justify-evenly md:items-center md:font-mono md:fixed md:z-10 md:bg-zinc-50 md:shadow-2xl md: border-zinc-100`}>
          
          <div className="flex justify-center flex-col items-center hover:text-red-600">
            <NavLink to ="/section/about">ABOUT
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="menu__icon" xmlns="http://www.w3.org/2000/svg" width="120" height="15" viewBox="-52.5 0 120 15"><path d="M13.79 5.677c.763-.763.996-1.854.703-2.818l-1.515 1.513-1.478-.396-.396-1.477L12.62.984c-.965-.293-2.055-.06-2.818.704-.764.764-.877 1.735-.507 2.626L7.718 5.888c-.023-.06-.057-.117-.106-.165L7.19 5.3c-.182-.18-.474-.18-.655 0l-.36.373-2.358-2.36-.128-.457h-.002c-.013-.095-.056-.187-.13-.26L1.493 1.092C1.313.913 1.075.857.963.97l-.52.52c-.112.112-.057.35.123.53l1.502 2.064c.074.073.167.117.262.13l.452.082L5.16 6.674l-.385.388c-.18.18-.18.474 0 .653l.422.424c.048.048.105.08.164.102l-3.586 3.583-.016.02c-.52.522-.52 1.364 0 1.886.52.52 1.358.52 1.878.005l.028-.02 3.25-3.264 3.35 3.355c.448.445 1.172.445 1.62-.002l1.384-1.383c.445-.447.445-1.173 0-1.62L9.91 7.444l1.254-1.26c.89.37 1.86.258 2.626-.506zM2.792 13.3c-.227.087-.48-.028-.564-.258-.085-.226.03-.48.256-.563.227-.087.48.027.564.255.086.226-.028.48-.256.565zm2.883-7.383c-.085.084-.224.084-.31 0L1.05 1.597l.14-.14c.056-.06.178-.03.272.063l1.814 1.525c.038.04.06.085.067.135.008.063.034.122.076.173l2.253 2.253c.087.087.087.226.002.31zm1.512.437l-.716.716-.443-.446.715-.715c.105-.106.274-.106.38 0l.065.064c.105.105.105.275 0 .38zm5.68 4.916c.203.205.203.54 0 .744l-.7.7L7.29 7.84c.218-.245.606-.224.856.03l2.863 2.86c.064.065.17.065.237 0 .064-.064.064-.172 0-.236l-2.86-2.86c-.256-.258-.278-.653-.024-.868l4.504 4.504z"></path>
            <line fill="none" stroke="#000000" x1="-42.5" y1="7.25" x2="-4.5" y2="7.25"></line>
            <line fill="none" stroke="#000000" x1="19.5" y1="7.25" x2="57.5" y2="7.25"></line>
            </svg>
            <p className="text-sm font-thin  hover:text-red-600">Read bio</p>
            </NavLink>
            
            </div>

          <div className="flex justify-center flex-col items-center">
            <NavLink to ="/section/skills">TECH STACK</NavLink>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="menu__icon" xmlns="http://www.w3.org/2000/svg" width="120" height="15" viewBox="-52.5 0 120 15"><path d="M13.79 5.677c.763-.763.996-1.854.703-2.818l-1.515 1.513-1.478-.396-.396-1.477L12.62.984c-.965-.293-2.055-.06-2.818.704-.764.764-.877 1.735-.507 2.626L7.718 5.888c-.023-.06-.057-.117-.106-.165L7.19 5.3c-.182-.18-.474-.18-.655 0l-.36.373-2.358-2.36-.128-.457h-.002c-.013-.095-.056-.187-.13-.26L1.493 1.092C1.313.913 1.075.857.963.97l-.52.52c-.112.112-.057.35.123.53l1.502 2.064c.074.073.167.117.262.13l.452.082L5.16 6.674l-.385.388c-.18.18-.18.474 0 .653l.422.424c.048.048.105.08.164.102l-3.586 3.583-.016.02c-.52.522-.52 1.364 0 1.886.52.52 1.358.52 1.878.005l.028-.02 3.25-3.264 3.35 3.355c.448.445 1.172.445 1.62-.002l1.384-1.383c.445-.447.445-1.173 0-1.62L9.91 7.444l1.254-1.26c.89.37 1.86.258 2.626-.506zM2.792 13.3c-.227.087-.48-.028-.564-.258-.085-.226.03-.48.256-.563.227-.087.48.027.564.255.086.226-.028.48-.256.565zm2.883-7.383c-.085.084-.224.084-.31 0L1.05 1.597l.14-.14c.056-.06.178-.03.272.063l1.814 1.525c.038.04.06.085.067.135.008.063.034.122.076.173l2.253 2.253c.087.087.087.226.002.31zm1.512.437l-.716.716-.443-.446.715-.715c.105-.106.274-.106.38 0l.065.064c.105.105.105.275 0 .38zm5.68 4.916c.203.205.203.54 0 .744l-.7.7L7.29 7.84c.218-.245.606-.224.856.03l2.863 2.86c.064.065.17.065.237 0 .064-.064.064-.172 0-.236l-2.86-2.86c-.256-.258-.278-.653-.024-.868l4.504 4.504z"></path>
            <line fill="none" stroke="#000000" x1="-42.5" y1="7.25" x2="-4.5" y2="7.25"></line>
            <line fill="none" stroke="#000000" x1="19.5" y1="7.25" x2="57.5" y2="7.25"></line>
            </svg>
            <p  className="text-sm font-thin">Skills</p>
          </div>

          <div className="flex justify-center flex-col items-center">
            <NavLink to ="/section/projects">PROJECTS</NavLink>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="menu__icon" xmlns="http://www.w3.org/2000/svg" width="120" height="15" viewBox="-52.5 0 120 15"><path d="M4.182 13.166v.438h6.636v-.694H4.182M13.56 1.396H1.515c-.45 0-.816.326-.816.776v8.777c0 .448.366.917.816.917h3.61c.246.14.413.402.413.705l-.002.01h4l-.002-.01c0-.303.167-.565.413-.705h3.608c.45 0 .742-.47.742-.918V2.17c0-.45-.292-.776-.74-.776zm-.308 9.112h-.514c-.17 0-.31-.102-.31-.272 0-.17.14-.27.31-.27h.514c.17 0 .308.1.308.27s-.138.272-.308.272zM1.38 9.01V2.076h12.178V9.01H1.38z"></path>
            <line fill="none" stroke="#000000" x1="-42.5" y1="7.25" x2="-4.5" y2="7.25"></line>
            <line fill="none" stroke="#000000" x1="19.5" y1="7.25" x2="57.5" y2="7.25"></line>
            </svg>
            <p className="text-sm font-thin">View my works</p>
          </div>

          <div className="flex justify-center flex-col items-center">
            <NavLink to ="/section/contact">CONTACT</NavLink>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="menu__icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="120" height="15" viewBox="-52.5 0 120 15" enable-background="new -52.5 0 120 15" xml:space="preserve">
            <path d="M1.758,2.944c0.002,0,3.081-0.771,5.741-0.771c2.659,0,5.74,0.771,5.743,0.771c1.134,0.261,1.84,1.392,1.578,2.525
            C14.629,6.3,13.972,6.9,13.188,7.06l-2.494-1.704c-0.048-0.269-0.042-0.551,0.023-0.834c0.038-0.165,0.095-0.321,0.167-0.467
            C9.944,3.955,8.741,3.862,7.5,3.862c-1.24,0-2.443,0.092-3.383,0.193c0.072,0.146,0.13,0.302,0.168,0.467
            c0.065,0.283,0.07,0.565,0.023,0.834L0.524,6.229c-0.16-0.221-0.279-0.477-0.344-0.76C-0.082,4.336,0.625,3.206,1.758,2.944z
            M10.031,4.206c0.523,2.1,1.761,3.917,3.44,5.177v3.444H1.529V9.383c1.679-1.261,2.916-3.078,3.439-5.177
            c0.271-0.023,0.554-0.043,0.847-0.061v0.877h3.37V4.146C9.478,4.162,9.761,4.183,10.031,4.206z M10.102,8.49
            c0-1.436-1.164-2.601-2.602-2.601c-1.437,0-2.601,1.166-2.601,2.601c0,1.437,1.164,2.603,2.601,2.603
            C8.938,11.093,10.102,9.927,10.102,8.49z M9.185,8.49c0,0.931-0.754,1.686-1.685,1.686c-0.93,0-1.685-0.755-1.685-1.686
            c0-0.93,0.754-1.685,1.685-1.685C8.431,6.806,9.185,7.561,9.185,8.49z"></path>
            <line fill="none" stroke="#000000" x1="-42.5" y1="7.25" x2="-4.5" y2="7.25"></line>
            <line fill="none" stroke="#000000" x1="19.5" y1="7.25" x2="57.5" y2="7.25"></line>
            </svg>
            <p className="text-sm font-thin">Get in touch</p>
          </div>
        </nav>

      </div>
      <div className="w-full md:w-3/4" onTouchStart={handleTouch}>
      <section ref={refs.about}>
        <About />
      </section>
      <section ref={refs.skills} className="scroll-snap-start" >
        <Skills />
      </section>
      <section ref={refs.projects} >
        <Projects />
      </section>
      <section ref={refs.contact} >
        <Contact />
      </section>
      </div>
      
    </div>
  )
}

export default Home