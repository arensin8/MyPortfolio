import {useState,useRef} from 'react';
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {

  const formRef = useRef();
  const [form , setForm] = useState({
    name : '',
    email: '',
    message : ''
  })

  const [loading , setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {}



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden'>
      Contact
    </div>
  );
};

export default SectionWrapper(Contact , 'contact');