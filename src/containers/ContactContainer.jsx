import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";
import SeekingBanner from "@/components/SeekingBanner";
import SectionTitle from "@/components/SectionTitle";
import memojiContact from "@memoji/contact.png";

const ContactContainer = ({ name }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  console.log(isMobile);
  return (
    <Flex
      id={name}
      w="100%"
      pt="5vh"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
    >
      <SeekingBanner />
      <Flex
        w="100%"
        pl={["8vw"]}
        justifyContent="start"
        alignItems="center"
        flexDirection="row"
      >
        <SectionTitle base="Contact" sup="💬" />
      </Flex>
      <Flex justifyContent="center" alignItems="end" flexDirection="column">
        <Parallax translateY={isMobile ? [100, -50] : [100, -80]}>
          <Image
            src={memojiContact}
            alt="memoji call me"
            boxSize={["128px", "128px", "200px"]}
          />
        </Parallax>
        <Flex
          p="8"
          mb={isMobile ? "20" : "40"}
          w={["85vw", "85vw", "60vw"]}
          justifyContent="center"
          alignItems="start"
          flexDirection="column"
          bg={useColorModeValue("gray.50", "gray.800")}
          borderRadius="lg"
          boxShadow="xl"
          zIndex="100"
        >
          <Flex
            w="100%"
            my="2"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="2"
          >
            <Text
              fontSize={["lg", "3xl"]}
              fontWeight="600"
              color={useColorModeValue("gray.700", "gray.300")}
            >
              💻 For my coding works...
            </Text>
            <Button
              mt={isMobile ? "2" : "0"}
              size={isMobile ? "md" : "lg"}
              leftIcon={<FaGithub />}
              color="white"
              bg="gray.700"
              _hover={{ bg: "gray.200", color: "gray.600" }}
              onClick={() => window.open("github", "_blank")}
            >
              GitHub
            </Button>
          </Flex>
          <Divider
            my="8"
            borderColor={useColorModeValue("gray.300", "gray.700")}
          />
          <Flex
            w="100%"
            my="2"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="2"
          >
            <Text
              fontSize={["lg", "3xl"]}
              fontWeight="600"
              color={useColorModeValue("gray.700", "gray.300")}
            >
              💼 For career opportunities...
            </Text>
            <Button
              mt={isMobile ? "2" : "0"}
              size={isMobile ? "md" : "lg"}
              leftIcon={<FaLinkedin />}
              color="white"
              bg="blue.600"
              _hover={{ bg: "gray.200", color: "gray.600" }}
              onClick={() => window.open("linkedin", "_blank")}
            >
              LinkedIn
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactContainer;
