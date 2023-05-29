import { Flex, Text } from "@chakra-ui/react";

export default function Countdown() {
  return (
    <Flex gap=".1rem" fontSize="1.35em" fontWeight="500" alignItems="center">
      <Text
        display="inline-grid"
        placeItems="center"
        backgroundColor="#17254c"
        color="white"
        height="full"
        width="1.6em"
        borderRadius="4px"
      >
        0
      </Text>
      <Text
        display="inline-grid"
        placeItems="center"
        backgroundColor="#17254c"
        color="white"
        height="full"
        width="1.6em"
        borderRadius="4px"
      >
        1
      </Text>
      <Text>:</Text>
      <Text
        display="inline-grid"
        placeItems="center"
        backgroundColor="#17254c"
        color="white"
        height="full"
        width="1.6em"
        borderRadius="4px"
      >
        1
      </Text>
      <Text
        display="inline-grid"
        placeItems="center"
        backgroundColor="#17254c"
        color="white"
        height="full"
        width="1.6em"
        borderRadius="4px"
      >
        9
      </Text>
    </Flex>
  );
}
