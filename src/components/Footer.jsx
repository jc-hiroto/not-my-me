import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaCodeBranch, FaEnvelope, FaGithub } from "react-icons/fa";

function Footer() {
  const version = "build 20230216";
  const text_color = useColorModeValue("gray.400", "gray.600");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <Flex
        w="100%"
        py="1"
        px="4"
        justifyContent="end"
        alignItems="center"
        flexDirection="column"
      >
        <Flex
          w="100%"
          my="2"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            spacing={4}
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <HStack mb="0.5">
              <Icon as={FaCodeBranch} boxSize="2" color={text_color} />
              <Text fontSize="8" fontWeight="600" color={text_color}>
                {version}
              </Text>
            </HStack>
            <Text fontSize="10" fontWeight="500" color={text_color}>
              Copyright © {new Date().getFullYear()} Eric Lin.
            </Text>
          </Flex>
          <HStack>
            <IconButton
              icon={<FaEnvelope size="1.5em" />}
              size="sm"
              aria-label="Email"
              variant="ghost"
              color={text_color}
              onClick={() => window.open("mailto:eric.c.w.lin@gmail.com")}
              _focus={{ boxShadow: "none" }}
            />
            <IconButton
              icon={<FaGithub size="1.5em" />}
              size="sm"
              aria-label="GitHub"
              variant="ghost"
              color={text_color}
              onClick={() => window.open("https://github.com/weitude/me")}
              _focus={{ boxShadow: "none" }}
            />
          </HStack>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      w="100%"
      h="5vh"
      px="8"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
    >
      <HStack>
        <Text mr="4" fontSize="lg" fontWeight="600" color="gray.400">
          <Link href=".">weitude.tech</Link>
        </Text>
        <HStack>
          <Icon as={FaCodeBranch} boxSize="3" color={text_color} />
          <Text fontSize="12" fontWeight="500" color={text_color}>
            {version}
          </Text>
        </HStack>
      </HStack>
      <HStack spacing={2}>
        <Text fontSize="sm" fontWeight="500" color={text_color}>
          Copyright © {new Date().getFullYear()} Eric Lin.
        </Text>
        <IconButton
          icon={<FaEnvelope size="1.5em" />}
          size="sm"
          aria-label="Email"
          variant="ghost"
          color={text_color}
          onClick={() => window.open("mailto:eric.c.w.lin@gmail.com")}
          _focus={{ boxShadow: "none" }}
        />
        <IconButton
          icon={<FaGithub size="1.5em" />}
          size="sm"
          aria-label="GitHub"
          variant="ghost"
          color={text_color}
          onClick={() => window.open("https://github.com/weitude/me")}
          _focus={{ boxShadow: "none" }}
        />
      </HStack>
    </Flex>
  );
}

export default Footer;
