import React from "react";
import {
  Image, useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import m1 from "@memoji/m1.png";
import m2 from "@memoji/m2.png";
import m3 from "@memoji/m3.png";
import m4 from "@memoji/m4.png";
import m5 from "@memoji/m5.png";
import m6 from "@memoji/m6.png";
import m7 from "@memoji/m7.png";
import m8 from "@memoji/m8.png";
import m9 from "@memoji/m9.png";

function RandomMemoji({size}) {
  const [image, setImage] = React.useState(m1);
  const memojis = [ m1, m2,m3, m4,m5,m6,m7,m8,m9 ];
  const handleRandomMemoji = () => {
    const random = Math.floor(Math.random() * 8);
    setImage(memojis[random]);
  };
  return(
    <motion.div whileTap={{scale: 0.8, opacity:0.5}}>
      <Image  mb={-8}  src={image} alt='memoji' boxSize={size} cursor="pointer" onClick={() => handleRandomMemoji()}/>
    </motion.div>
  );
}

export default RandomMemoji;