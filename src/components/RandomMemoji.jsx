import { useState } from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import m1 from "@memoji/m1.webp";
import m2 from "@memoji/m2.webp";
import m3 from "@memoji/m3.webp";
import m4 from "@memoji/m4.webp";
import m5 from "@memoji/m5.webp";
import m6 from "@memoji/m6.webp";
import m7 from "@memoji/m7.webp";

function RandomMemoji({ size }) {
  const [image, setImage] = useState(m1);
  const [index, setIndex] = useState(1);
  const memojis = [m1, m2, m3, m4, m5, m6, m7];
  const handleRandomMemoji = () => {
    setIndex((index + 1) % 7);
    setImage(memojis[index]);
  };

  return (
    <motion.div whileTap={{ scale: 0.8, opacity: 0.5 }}>
      <Image
        mb={-8}
        src={image}
        alt="memoji"
        boxSize={size}
        cursor="pointer"
        onClick={() => handleRandomMemoji()}
      />
    </motion.div>
  );
}

export default RandomMemoji;
