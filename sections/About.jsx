'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About us" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">devloopers</span> is a creative
        agency with an aim to provide best IT services to the users. We aim to develope
        high quality softwares for your business - 
        {' '}
        <span className="font-extrabold text-white">
        web, android & ios.
        </span>{' '}
        <br></br>
        <br></br>
        Having an online presence is something that you need to have to 
        compete in the market.
        {' '}
        <span className="font-extrabold text-white">We </span>are here for that purpose.
        {' '}
        <span className="font-extrabold text-white"> Build</span> your business with 
        us.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
