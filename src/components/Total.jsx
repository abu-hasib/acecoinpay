import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaScroll } from "react-icons/fa";

export default function Total() {
  return (
    <Flex
      position="absolute"
      bottom="3%"
      paddingInline="2em"
      width="full"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack spacing="1">
        <Text color="#8e96a3" fontSize="1em" fontWeight="medium">
          You have to Pay
        </Text>
        <Box color="#05365c">
          <Text as="span" fontSize="2em" fontWeight="bold">
            549
            <Text as="span" fontSize="0.6em" fontWeight="medium">
              .99
            </Text>
          </Text>
          <Text
            as="span"
            fontSize="1.1em"
            color="#8e96a3"
            marginLeft="0.2em"
            fontWeight="medium"
          >
            USD
          </Text>
        </Box>
      </Stack>
      <Icon as={FaScroll} boxSize="8" />
    </Flex>
  );
}
