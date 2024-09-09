import { useEffect, useRef, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Interests from "./Interests"
import Contact from "./Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import resume from "/resume.pdf"


const Home = () => {
  const [mobile, setMobile] = useState(false)

  const {section} = useParams()

  const handleClick = () => {
    setMobile(!mobile)


  }

  const refs = {
    about: useRef(),
    contact: useRef(),
    interest: useRef(),
    projects: useRef(),
    skills: useRef(),
  };

  useEffect( ()=> {
    if(section && refs[section]) {
      refs[section].current.scrollIntoView({behavior: "smooth"})
    }

  }, [section])


  return (
    <div className="flex justify-between">
      <div>
        <div className=" absolute top-0 left-0 md:hidden z-50" >
          <button className=" float-right p-2 bg-black text-white "onClick ={handleClick}>{mobile? <FontAwesomeIcon icon= {faTimes} className="icon"/>: <FontAwesomeIcon icon={faBars } className="icon"/>}</button>
        </div>
        <nav className={`${
            mobile ? " w-1/2 flex flex-col text-xl font-medium h-screen justify-evenly items-center font-mono fixed bg-zinc-50 :shadow-2xl border-2 border-zinc-100 z-10" : "hidden"
          } md:flex-col md:text-xl md:font-medium md:h-screen md:flex md:w-1/5 md:justify-evenly md:items-center md:font-mono md:fixed md:z-10 md:bg-zinc-50 md:shadow-2xl md: border-zinc-100`}>
          <NavLink to ="/section/about">About</NavLink>
          <NavLink to ="/section/skills">Tech Stack</NavLink>
          <NavLink to ="/section/projects">Projects</NavLink>
          <NavLink to ="/section/interest">Interests</NavLink>
          <NavLink to ="/section/contact">Contact</NavLink>
          
        </nav>
      </div>
      <div className=" w-full md:w-3/4">
      <section ref={refs.about}>
        <About />
      </section>
      <section ref={refs.skills} className="scroll-snap-start" >
        <Skills />
      </section>
      <section ref={refs.projects} >
        <Projects />
      </section>
      <section ref={refs.interest} >
        <Interests />
      </section>
      <section ref={refs.contact} >
        <Contact />
      </section>
      </div>
      
    </div>
  )
}

export default Home