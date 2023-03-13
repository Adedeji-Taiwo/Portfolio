import React, {useState, useRef, RefObject} from 'react'
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/Motion';
import EarthCanvas from './canvas/Earth';

type FormValues = {
  name: string;
  email: string;
  message: string;
}




const ContactSection = () => {
  const formRef: RefObject<HTMLFormElement> | null = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(''); 
  const [form, setForm] = useState<FormValues>({
      name: "",
      email: "",
      message: ""
  })

    //notification
    const successNotify = () => toast.success("Thank you. I will get back to you as soon as possible!");
    const errorNotify = () => toast.error("Message not delivered!");
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);


    if (form.name === "" || form.email === "" || form.message === "") {
      setTimeout(() => { setLoading(false), 2000});
      return;
    }

    

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID, 
      {
        from_name: form.name,
        to_name: "Adedeji",
        from_email: form.email,
        to_email: "dtaiwo45@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        setLoading(false);
        !loading && setMessage("success")
        setForm({name: '', email: '', message: ''});
    }, (error) => {
          setMessage("error")
    });

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea 
              rows={7}
              name="message" 
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button 
            type='submit'
            onClick={message === 'success' ? successNotify :  errorNotify} 
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>

      <motion.div
         variants={slideIn("right", "tween", 0.2, 1)}
         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}


const Contact = () => <SectionWrapper Component={ContactSection} idName="contact"/> 

export default Contact;