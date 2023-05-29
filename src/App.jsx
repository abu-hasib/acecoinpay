import { Box, CloseButton, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { HiCreditCard } from "react-icons/hi";
import Invoice from "./components/Invoice";
import Countdown from "./components/Countdown";
import Form from "./components/Form";
import bg from "./assets/bg.jpg";

const App = () => {
  return (
    <Box
      as="section"
      paddingBottom="5rem"
      paddingTop="6rem"
      paddingInline="12"
      bgImage={bg}
      bgPosition="center left"
      bgRepeat="no-repeat"
    >
      <Box
        paddingInline="8"
        paddingBlock="20"
        bgColor="white"
        position="relative"
      >
        <Box position="absolute" right="1%" top="1%">
            <CloseButton size="lg" />
        </Box>
        <Flex justifyContent="space-between" gap="8">
          <Box width={["100%", null, "70%", "75%"]}>
            <Flex justifyContent="space-between" marginBottom="2em">
              <LogoWithBrand />
              <Countdown />
            </Flex>
            <Form />
          </Box>
          {/* Invoice section */}
          <Invoice />
        </Flex>
      </Box>
    </Box>
  );
};

function LogoWithBrand() {
  return (
    <Flex gap="2">
      <Grid
        background="#1254d6"
        height="12"
        w="12"
        borderRadius="50%"
        placeItems="center"
      >
        <Icon
          as={HiCreditCard}
          boxSize="6"
          transform="rotate(-15deg)"
          color="whiteAlpha.900"
        />
      </Grid>
      <Heading as="h1">
        AceCoin
        <Text as="span" fontWeight="thin">
          Pay
        </Text>
      </Heading>
    </Flex>
  );
}

export default App;
