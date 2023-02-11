import {
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import {
  ExpText,
  HeadingText,
  HighlightText,
  NameText,
  NormalText,
  SmallText,
} from "@/components/Fonts";
import ExpSection from "@/components/ExpSection";
import logoNTU from "@logo/ntu.png";
import logoNCN from "@logo/ncn.png";

const AboutContainer = ({ name }) => {
  const bg_color = useColorModeValue("gray.50", "gray.800");

  const ThreeDot = () => {
    return (
      <Icon
        w={["32px", "48px", "64px"]}
        as={BsThreeDotsVertical}
        color={useColorModeValue("gray.600", "gray.600")}
      />
    );
  };

  return (
    <Flex
      id={name}
      w="100%"
      pt="5vh"
      justifyContent="start"
      alignItems="center"
      flexDirection="column"
    >
      <SectionTitle base="About" sup="🙌" />
      <Flex
        w="100%"
        minH="85vh"
        justifyContent="start"
        alignItems="start"
        flexDirection="column"
        flexWrap="wrap"
      >
        <Flex
          w="100%"
          py={["8", "12"]}
          px={["8", "36"]}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex
            w="100%"
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
          >
            <HStack mb="6" spacing="2">
              <HeadingText text="Hi" />
              <motion.div
                initial={{ originY: 0.8, originX: 0.7 }}
                animate={{ rotateZ: [10, -10, 10] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <Text mr="2" fontSize={["3xl", "4xl", "5xl"]} fontWeight="600">
                  👋
                </Text>
              </motion.div>
              <HeadingText text="I'm" />
              <NameText text="Eric." />
            </HStack>
            <NormalText>
              A proficient
              <HighlightText text=" Taiwanese 🇹🇼 " />
              developer.
            </NormalText>
            <NormalText>
              I am experienced in
              <HighlightText text=" DevOps" />
              ,
              <HighlightText text=" Full Stack Development" />
              , and
              <HighlightText text=" Cyber Security" />.
            </NormalText>
            <NormalText>
              Recently, I've been working on
              <HighlightText text=" C++" />
              ,
              <HighlightText text=" Python " />
              and
              <HighlightText text=" JavaScript" />.
            </NormalText>
            <HStack mt="8" spacing={["8", "16"]}>
              <Link href="/#/resume">
                <HStack spacing="2">
                  <Icon
                    as={FaDownload}
                    boxSize={["4", "6"]}
                    color={useColorModeValue("gray.500", "gray.400")}
                  />
                  <SmallText text="Save my resume" />
                </HStack>
              </Link>
              <Link href="/#/instagram" isExternal>
                <HStack spacing="2">
                  <Icon
                    as={AiFillInstagram}
                    boxSize={["6", "8"]}
                    color={useColorModeValue("gray.500", "gray.400")}
                  />
                  <SmallText text="@5a.0401" />
                </HStack>
              </Link>
            </HStack>
          </Flex>
        </Flex>
        <Flex
          id="experience"
          w="100%"
          pt="16"
          pb="32"
          px={{ base: "8", md: "16", xl: "36" }}
          flexDirection="row"
          justifyContent={{ base: "space-between" }}
          bg={bg_color}
          flexWrap="wrap"
          gap="8"
        >
          <Flex
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
          >
            <ExpText text="Education" />
            {ExpSection(
              "National Taiwan University",
              logoNTU,
              "B.S.E in Department of Computer Science & Information Engineering",
              "Sep. 2021 - Present",
              "GPA: 4.14/4.3 ・ Dean’s List Award ・ Taipei, Taiwan",
            )}
          </Flex>
          <Flex
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
            mr={{ base: "0", md: "16" }}
          >
            <ExpText text="Experience" />
            <VStack justifyContent="start" alignItems="start">
              {ExpSection(
                "System Administration Team of NTU CSIE department",
                logoNTU,
                "Member of Web Group",
                "Sep. 2022 - Present",
                "Teaching Assistant of 18-631 Introduction to Information Security course.",
              )}
              <ThreeDot />

              {ExpSection(
                "National Taiwan University",
                logoNTU,
                "Full Stack Developer",
                "Jun. 2022 - Aug. 2022",
                "Worked on next-gen course planning tool at the Office of Academic Affairs of NTU.",
              )}
              <ThreeDot />

              {ExpSection(
                "NTUCourse Neo Team",
                logoNCN,
                "Co-Founder, Full Stack Developer",
                "Nov. 2021 - Jun. 2022",
                "Developed a course planning service for National Taiwan University, which assisted 10000+ students.",
              )}
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutContainer;
