import { projectData } from "../projectsData";



const Projects = () => {
 const projectList = projectData.map( (project) => {

  const{image, name, description, netlify, github} =project
  return (
  <div className="w-full shadow-xl rounded-lg p-4 mx-auto h-auto border-2 border-slate-100  hover:border-red-100 hover:shadow-2xl hover:animate-pulse active:border-red-100 active:shadow-2xl active:animate-pulse">
    <div className="w-4/4">
    <img src={image} alt={name} className=" border-2 border-black w-full mx-auto aspect-square rounded-lg max-w-full lg:h-60 hover:grayscale"/>
    </div>
    <p className="text-xl tracking-wide leading-loose font-bold w-full mt-4">{name}</p>
    <p className="text-base tracking-wide leading-loose w-full ">{description}</p>
    <div className="flex items-center gap-2 font-bold w-full">
    <a href={netlify}>
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"  height="24" ><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" fill="#4D5156"></path></svg>
    </a>
    <a href={github}>
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github feed-filter-item-icon color-fg-muted mx-2">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" fill="#59636E"></path>
    </svg>
    </a>
    </div>
  </div>)
 })




  return (
    <div className="mx-2 h-auto my-14 min-h-screen" >
       <p className="text-xl font-bold font-mono text-center my-8 ">PROJECTS</p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4" >
     
      {projectList}
    </div>
    </div>
    
  );
};

export default Projects;
