import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from './Popup';


const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const apiKey = process.env.REACT_APP_EMAILJS_KEY
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY
  const serviceKey =  process.env.REACT_APP_SERVICE_KEY

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( serviceKey, templateKey , form.current, apiKey)
    .then(() => {
      setIsEmailSent(true);
    })
    .catch((error) => {
      console.log(error.text);
    });
};

const closePopup = () => {
  setIsEmailSent(false);
};

  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#DFAF67] text-gray-300'> Get In Touch </p>
            <p className='text-gray-300 py-4'> For more information connect with me below or send me and email - Okikiolaojikutue@gmail.com </p>
        </div>
        <input className='bg-[#ccd6fc] p-2'  type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6fc]' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6fc] p-2'name="message" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#DFAF67] hover:border-[#DFAF67] py-3 px-4 my-8 mx-auto flex items-center popup-trigger '>Let's Connect</button>
      </form>
      {isEmailSent && <Popup onClose={closePopup} />}
    </div>
  )
}

export default Contact
