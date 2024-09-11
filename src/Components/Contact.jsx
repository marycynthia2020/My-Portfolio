import {useFormik} from "formik"
import { useForm} from '@formspree/react';


const Contact = () => {

  const [ handleSubmit] = useForm("mwpezgqr") /* submission to formspree*/
 

  // handling validation with formik
  
const validate = values => {
    const errors = {};
  
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Must be 3 characters or more';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length < 3) {
      errors.message = 'Must be 3 characters or more';
    }
  
    return errors;
  };
  
  /*utilizing the useFormik and calling Validate*/
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validate, 
  })


  return (
   
    <div className="mx-2 h-auto my-28 min-h-screen" >
      <p  className="text-xl font-bold font-mono text-center my-8 ">CONTACT</p>
      <p className="contact"> CURRENTLY AVAILABLE FOR INTERNSHIPS AND JUNIOR DEVELOPER ROLES,</p>
      <p className="contact">AND WOULD LOVE TO HEAR FROM YOU</p>

      <form className="form" onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mwpezgqr"  >
        <div className="label-container">
          <label htmlFor="name" className='label'>Name</label>
          <input placeholder="Enter Your Name" 
          required
          type="t<ext" 
          id="name" 
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className='input'/>
          {formik.touched.name && formik.errors.name ? (
         <div className="text-red-600">{formik.errors.name}</div>
       ) : null}
        </div>

        <div className="label-container">
          <label htmlFor="email"  className='label'>Email</label>
          <input 
          required
          placeholder="Enter Your Email" 
          type="email"
          id="email" 
          name="email" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} 
          className='input'/>
           {formik.touched.email && formik.errors.email ? (
         <div className="text-red-600">{formik.errors.email}</div>
       ) : null}
        </div>

        <div className="label-container" >
          <label htmlFor="message"  className='label'>Message</label>
          <textarea 
          required
          placeholder="Message....." 
          name="message" 
          id="message" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className='input overflow-hidden resize-none'>Message</textarea>
           {formik.touched.message && formik.errors.message ? (
         <div className="text-red-600">{formik.errors.message}</div>
       ) : null}
        </div>

        <button type="submit" className="button">Submit</button>
      </form>
     
      <p className="contact">chinemeremugbaja97@gmail.com</p>
      <p className="contact">Abuja, Nigeria</p>
      <a href="https://www.linkedin.com/in/chinemerem-ugbaja-439b891a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="contact block text-blue-700">LinkedIn</a>
      
    </div>
  )
}

export default Contact



