import {useState,useRef} from 'react';
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

  const formRef = useRef();
  const [loading , setLoading] = useState(false);
  const [form , setForm] = useState({
    name : '',
    email: '',
    message : ''
  })



  const handleChange = (e) => {
    const {name , value} = e.target;

    setForm({...form, [name] : value})
  };

  
  const isValidEmail = (email) => {
    // Basic email format check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }
  
    if (!isValidEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    setLoading(true);
  
    emailjs.send(
      'service_xqijdc9',
      'template_9j8wlds',
      {
        from_name : form.name,
        from_email : form.email,
        to_email : 'arensinani1@gmail.com',
        message : form.message
      },
      'tgX1SRIMQ-YeBM9hx'
      )
      .then(() => {
        setLoading(false);
        toast.success('Thank You.😊 I will get back to you as soon as possible.');
  
        setForm({
          name : '',
          email : '',
          message : ''
        })
      } , (error) => {
        setLoading(false);
        console.log(error.message);
  
        toast.error('Something went wrong! 😔');
      })
  };



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left","tween", 0.2 , 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input 
              type="text"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea 
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right" , "tween", 0.2 , 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
      </motion.div>

      
      <ToastContainer
        position="top-right"
        style={{ marginTop: '80px' }}
      />
    </div>
  );
};

export default SectionWrapper(Contact , 'contact');