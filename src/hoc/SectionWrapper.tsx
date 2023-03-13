import React, {FC} from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/Motion';

type SectionWrapperPropTypes = {
    Component: FC;
    idName: string
}


  const SectionWrapper: FC<SectionWrapperPropTypes> = ({ Component, idName }) => {
    const HOC: FC = () => {
      return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount: 0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            id={idName}
        >
            <span className='hash-span'>&nbsp;</span>
          <Component />
        </motion.section>
      );
    };
  
    return <HOC />;
  };

export default SectionWrapper