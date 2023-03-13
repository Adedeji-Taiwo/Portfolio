import React, { FC } from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/Motion';
import { SectionWrapper } from '../hoc';



// create a new interface that extends the HTMLAttributes<HTMLDivElement> interface and includes the options prop. since option isn't a valid HTML attribute
interface AnimatedDivProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: {
    max?: number;
    scale?: number;
    speed?: number;
  };
  children: React.ReactNode;
}



const AnimatedDiv: FC<AnimatedDivProps> = ({ children, options }) => {
  return (
    <div
      {...options}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
    {children}
    </div>
  )
}


const ServiceCard = ({ index, title, icon }: { index: number, title: string, icon: string }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <AnimatedDiv
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          children={
            <>
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </>
          }
        />
      </motion.div>
    </Tilt>
  )
}



const AboutSection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TyepScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real world problems. Let's work together to bring your ideas to life.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

const About = () => <SectionWrapper Component={AboutSection} idName="about" />


export default About