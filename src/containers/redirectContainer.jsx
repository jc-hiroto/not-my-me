import {
  Flex,
  Image,
  Link,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import memojiWaiting from "@memoji/waiting.webp";

function RedirectContainer({ url, title }) {
  window.location.href = url;
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      bg={useColorModeValue("white", "gray.900")}
    >
      <Flex
        w="100%"
        h="95vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image
          src={memojiWaiting}
          alt="JC waiting memoji"
          boxSize={["128px", "150px"]}
        />
        <Text
          fontSize={["3xl", "6xl"]}
          fontWeight="500"
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Redirecting to {title}...
        </Text>
        <Text
          fontSize={["sm", "lg"]}
          fontWeight="500"
          color={useColorModeValue("gray.500", "gray.500")}
        >
          If the webpage doesn't redirect,
          <Link
            href={url}
            color={useColorModeValue("blue.500", "blue.300")}
            fontWeight="500"
            ml="1"
          >
            click here.
          </Link>
        </Text>
        <Spinner mt="8" />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default RedirectContainer;
