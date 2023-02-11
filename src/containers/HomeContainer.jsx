import { useEffect, useState } from "react";
import { Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { FaArrowDown } from "react-icons/fa";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Footer from "@/components/Footer";
import HeaderBar from "@/components/HeaderBar";
import WelcomeContainer from "@/containers/WelcomeContainer";
import AboutContainer from "@/containers/AboutContainer";
import ContactContainer from "@/containers/ContactContainer";
import DevContainer from "@/containers/DevContainer";

function HomeContainer() {
  const [isAtPageTop, setIsAtPageTop] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsAtPageTop(currPos.y === 0);
  });

  useEffect(() => {
    window.location.href = "/#/";
  }, []);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      bg={useColorModeValue("white", "gray.900")}
    >
      <HeaderBar isAtPageTop={isAtPageTop} />
      <WelcomeContainer />
      <motion.div
        animate={{ y: [-20, 0, -20], scale: [1.1, 1, 1.1] }}
        transition={{
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          repeatDelay: 1,
        }}
      >
        <HashLink to="/#about" smooth>
          <IconButton
            mt="4"
            mb="10vh"
            icon={<FaArrowDown size="1.5em" />}
            aria-label="GitHub"
            variant="ghost"
            color="gray.500"
            _focus={{ boxShadow: "none" }}
          />
        </HashLink>
      </motion.div>
      <AboutContainer name="about" />
      <DevContainer name="projects" />
      <ContactContainer name="contact" />
      <Footer />
    </Flex>
  );
}

export default HomeContainer;
