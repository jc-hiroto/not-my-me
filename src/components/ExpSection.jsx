import {
  Avatar,
  Flex,
  HStack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ExpSection = (name, logo, position, time, desc) => {
  return (
    <HStack spacing={4}>
      <Avatar
        src={logo}
        alt={"logo of" + name}
        name={name}
        boxSize={["32px", "48px", "64px"]}
      />
      <Flex flexDirection="column" justifyContent="start" alignItems="start">
        <Text
          fontSize={["xl", "xl", "2xl"]}
          fontWeight="700"
          color={useColorModeValue("gray.800", "gray.200")}
        >
          {name}
        </Text>
        <Flex
          w="100%"
          flexWrap="wrap"
          alignItems="center"
          css={{ gap: "0.5em" }}
        >
          <Text
            mr="2"
            fontSize={["sm", "md"]}
            fontWeight="500"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {position}
          </Text>
          <Tag
            color={useColorModeValue("gray.800", "gray.300")}
            size="sm"
            variant="outline"
          >
            {time}
          </Tag>
        </Flex>
        <Text
          mt="2"
          fontSize={["sm", "md"]}
          fontWeight="400"
          color={useColorModeValue("gray.800", "gray.200")}
        >
          {desc}
        </Text>
      </Flex>
    </HStack>
  );
};

export default ExpSection;
