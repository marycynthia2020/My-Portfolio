
const Contact = () => {
  return (
    <div className="mx-2 h-auto my-14 min-h-screen" >
      <p  className="text-xl font-bold font-mono text-center my-8 ">CONTACT</p>
      <p className=" text-center font-sans text-xs m-auto leading-relaxed tracking-wide"> CURRENTLY AVAILABLE FOR INTERNSHIPS AND JUNIOR DEVELOPER ROLES,</p>
      <p className=" text-center font-sans text-xs m-auto leading-relaxed tracking-wide">AND WOULD LOVE TO HEAR FROM YOUR</p>
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
    </div>
  )
}

export default Contact



