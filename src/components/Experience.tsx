import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles';
import {experiences}  from '../constants';
import { textVariant } from '../utils/Motion';
import { SectionWrapper } from '../hoc';



const ExperienceCard = ({ title, company_name, icon, iconBg, date, points } : {
  title: string,
  company_name: string,
  icon: string,
  iconBg: string,
  date: string,
  points: string[],
}) => {
  return (
    <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: "7px solid #232531"}}
    date={date}
    iconStyle={{background: iconBg}}
    icon={<div className='flex justify-center items-center w-full h-full'><img src={icon} alt={company_name} className="w-3/5 h-3/5 object-contain" /></div>}
  >
   <div>
    <h3 className='text-white text-2xl font-bold'>{title}</h3>
    <p className='text-secondary text-base font-semibold m-0'>{company_name}</p>
   </div>

   <ul className='mt-5 list-disc ml-5 space-y-2'>
    {points.map((point:string, index:number) => (
      <li
        key={index}
        className="text-white-100 text-sm pl-1 tracking-wider"
      >
        {point}
      </li>
    ))}
   </ul>
  </VerticalTimelineElement>
  )
}

const ExperienceSection = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.heroHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index}
              title={experience.title}
              company_name={experience.company_name}
              icon={experience.icon}
              iconBg={experience.iconBg}
              date={experience.date}
              points={experience.points}
             />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}


const Experience = () => <SectionWrapper  Component={ExperienceSection} idName="experience" />
  

export default Experience;