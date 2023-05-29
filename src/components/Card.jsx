import { Box, Flex, Image, Text } from "@chakra-ui/react";
import chip from "../assets/chip.png";
import wifi from "../assets/wifi.png";
import master from "../assets/mastercard-2.svg";

export default function Card() {
  return (
    <Box>
      <Flex
        position="absolute"
        left="0"
        right="0"
        marginInline="auto"
        flexDirection="column"
        justifyContent="space-between"
        width="14em"
        height="20em"
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.6), #fff)
            "
        backdropFilter="blur(15px)"
        padding="1.5em"
        borderRadius="1em"
        boxShadow="0px 4px 14px 2px rgba(224, 224, 224, 0.6)"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          // marginBottom="6em"
        >
          <Image
            src={chip}
            alt="chip"
            objectFit="cover"
            height="2.5em"
            width="auto"
          />
          <Image
            src={wifi}
            alt="wifi"
            objectFit="cover"
            height="1.5em"
            width="auto"
          />
        </Flex>
        <Box color="#05365c" marginTop="4em">
          <Text
            fontSize="1em"
            fontWeight="medium"
            color="#616161"
            marginBottom="0.5em"
          >
            Jonathan Micheal
          </Text>
          <Flex gap="0.5rem">
            <Flex alignItems="center">
              <Text
                as="span"
                height="0.4em"
                width="0.4em"
                borderRadius="50%"
                backgroundColor="#17254c"
                marginRight="0.4em"
              ></Text>
              <Text
                as="span"
                height="0.4em"
                width="0.4em"
                borderRadius="50%"
                backgroundColor="#17254c"
                marginRight="0.4em"
              ></Text>
              <Text
                as="span"
                height="0.4em"
                width="0.4em"
                borderRadius="50%"
                backgroundColor="#17254c"
                marginRight="0.4em"
              ></Text>
              <Text
                as="span"
                height="0.4em"
                width="0.4em"
                borderRadius="50%"
                backgroundColor="#17254c"
                marginRight="0.4em"
              ></Text>
            </Flex>
            <Text fontSize="1.1em" fontWeight="700">
              3456
            </Text>
          </Flex>
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="1em" fontWeight="semibold">
            09/22
          </Text>
          <Image src={master} height="3em" width="auto" />
        </Flex>
      </Flex>
    </Box>
  );
}
