import { chakra, Text, useColorModeValue } from "@chakra-ui/react";

const HeadingText = ({ text }) => {
  return (
    <Text
      fontSize={["3xl", "4xl", "5xl"]}
      fontWeight="600"
      color={useColorModeValue("gray.600", "gray.400")}
    >
      {text}
    </Text>
  );
};

const NameText = ({ text }) => {
  return (
    <Text
      fontSize={["3xl", "4xl", "5xl"]}
      fontWeight="700"
      color={useColorModeValue("gray.800", "gray.300")}
    >
      {text}
    </Text>
  );
};

const NormalText = (props) => {
  return (
    <Text
      mb="4"
      fontSize={["3xl", "4xl", "5xl"]}
      fontWeight="600"
      color={useColorModeValue("gray.500", "gray.500")}
      lineHeight="shorter"
      {...props}
    />
  );
};

const HighlightText = ({ text }) => {
  return (
    <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
      {text}
    </chakra.span>
  );
};

const SmallText = ({ text }) => {
  return (
    <Text
      fontSize={["md", "xl", "3xl"]}
      fontWeight="600"
      color={useColorModeValue("gray.500", "gray.400")}
    >
      {text}
    </Text>
  );
};

const ExpText = ({ text }) => {
  return (
    <Text
      mb="4"
      fontSize="4xl"
      fontWeight="700"
      color={useColorModeValue("gray.800", "gray.200")}
    >
      {text}
    </Text>
  );
};

export { HeadingText, NameText, NormalText, HighlightText, SmallText, ExpText };
