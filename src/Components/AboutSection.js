import React from "react";
import home1 from "../imgs/home1.png";
import Wave from "./Wave";

//Framer Motion
import { motion } from "framer-motion";
//Styled-Component Section
import { About, Description, Image, Hide } from "../styles";
//Styled-Component Section
import {titleAnim,fade,photoAnim} from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="dude with a camera" />
      </Image>
      <Wave/>
    </About>
  );
};

//Styled-Components

//Styled-Components

export default AboutSection;
