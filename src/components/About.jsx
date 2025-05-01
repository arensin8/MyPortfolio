import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {styles} from '../styles';
import {fadeIn , textVariant} from '../utils/motion';
import {services} from '../constants';
import { SectionWrapper } from '../hoc';
import resume from '../assets/ArenSinResume.pdf'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right','spring', 0.5 * index , 0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary min-h-[280px] rounded-[20px]
          py-5 px-12 flex flex-col justify-evenly items-center'>
            <img src={icon} alt={title} 
            className='h-16 w-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>  
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-col md:flex-row justify-between items-start'>
        <motion.p 
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I'm a passionate software developer 
          with experience in building web applications and 
          user interfaces using React, Node.js, and Express. 
          I enjoy crafting clean, scalable, and efficient solutions 
          that enhance user experience. With a strong problem-solving 
          mindset and attention to detail, I’m always eager to learn 
          and take on new challenges in web development.
        </motion.p>
        <a
          href={resume}
          download
          className='mr-10 mt-10 bg-tertiary/80 hover:bg-tertiary/60 py-3 px-6 rounded-lg
          outline-none text-white h-[50px] w-full md:w-auto text-[16px] font-semibold 
          shadow-md shadow-primary cursor-pointer text-center transition'
        >
          Download my CV
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service , index ) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");