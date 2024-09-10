
const Contact = () => {
  return (
    <div className="mx-2 h-auto my-14 min-h-screen" >
      <p  className="text-xl font-bold font-mono text-center my-8 ">CONTACT</p>
      <p className="contact"> CURRENTLY AVAILABLE FOR INTERNSHIPS AND JUNIOR DEVELOPER ROLES,</p>
      <p className="contact">AND WOULD LOVE TO HEAR FROM YOUR</p>
      <form className="form">
        <div className="label-container">
          <label htmlFor="name" className='label'>Name</label>
          <input placeholder="Enter Your Name" type="text" id="name" name="Name"   className='input'/>
        </div>
        <div className="label-container">
          <label htmlFor="email"  className='label'>Email</label>
          <input placeholder="Enter Your Email" type="email" id="email" name="Email"  className='input'/>
        </div>
        <div className="label-container" >
          <label htmlFor="message"  className='label'>Message</label>
          <textarea placeholder="Message..." name="Message" id="message" className='input overflow-hidden resize-none'>Message</textarea>
        </div>
        <button type="submit" className="button" >Submit</button>
      </form>
      <p className="contact">chinemeremugbaja97@gmail.com</p>
      <p className="contact">Abuja, Nigeria</p>
      <a href="https://www.linkedin.com/in/chinemerem-ugbaja-439b891a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="contact block text-blue-700">LinkedIn</a>
      
    </div>
  )
}

export default Contact



