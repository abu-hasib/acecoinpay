import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
import GenericLabel from "./GenericLabel";
import GenericInput from "./GenericInput";
import mcIcon from "../assets/mc_symbol.svg";
import verifiedIcon from "../assets/verified-badge.svg";
import keypadIcon from "../assets/dots.svg";

export default function Form() {
  const [canEdit, setEdit] = useState(false);
  return (
    <Box as="form">
      <Flex justifyContent="space-between" marginBottom="2em">
        <GenericLabel
          heading="Card Number"
          text="Enter the 15-digit number on the card"
        />
        <Box>
          <Button
            color="#1da1f2"
            leftIcon={<Icon as={MdModeEdit} />}
            variant="link"
            onClick={() => setEdit(!canEdit)}
          >
            {canEdit ? "Edit" : "Done"}
          </Button>
        </Box>
      </Flex>
      <Box position="relative" marginBottom="3em">
        <Image
          objectFit="cover"
          src={mcIcon}
          alt="mastercard icon"
          height="2em"
          position="absolute"
          top="50%"
          transform="translate(0, -50%)"
          left="1.2em"
          zIndex="2"
        />
        <Input
          placeholder="2412 - 7512 - 3412 - 3456"
          paddingInline="4em"
          paddingBlock="1.5em"
          border="2px"
          borderStyle="solid"
          borderColor="rgba(224, 224, 224, 0.5)"
          fontSize="1.2em"
          background="bg.input"
          readOnly={canEdit}
        />
        <Image
          objectFit="cover"
          src={verifiedIcon}
          alt="mastercard icon"
          height="2em"
          position="absolute"
          top="50%"
          transform="translate(0, -50%)"
          right="1.2em"
          zIndex="2"
        />
      </Box>
      <Grid gridAutoFlow="column" gridAutoColumns="1fr" marginBottom="3em">
        <GenericLabel
          heading="CVV Number"
          text="Enter 3 or 4 digit number on the card"
        />
        <Box position="relative">
          <GenericInput placeholder="327" />
          <Image
            objectFit="cover"
            src={keypadIcon}
            alt="mastercard icon"
            height="2em"
            position="absolute"
            top="50%"
            transform="translate(0, -50%)"
            right="1.2em"
            zIndex="2"
          />
        </Box>
      </Grid>
      <Grid gridAutoFlow="column" gridAutoColumns="1fr" marginBottom="3em">
        <GenericLabel
          heading="Expiry Date"
          text="Enter the expiration date of the card"
        />
        <Flex alignItems="center" justifyContent="space-between" gap="1rem">
          <GenericInput placeholder="09" />
          <Text fontSize="1.5em" fontWeight="medium" color="#05365c">
            /
          </Text>
          <GenericInput placeholder="22" />
        </Flex>
      </Grid>
      <Grid gridAutoFlow="column" gridAutoColumns="1fr" marginBottom="3em">
        <GenericLabel heading="Password" text="Enter your Dynamic password" />
        <Box position="relative">
          <GenericInput placeholder="******" />
          <Image
            objectFit="cover"
            src={keypadIcon}
            alt="mastercard icon"
            height="2em"
            position="absolute"
            top="50%"
            transform="translate(0, -50%)"
            right="1.2em"
            zIndex="2"
          />
        </Box>
      </Grid>
      <Button
        width="full"
        size="lg"
        paddingBlock="2em"
        borderRadius="0.6em"
        fontSize="1.2em"
        color="white"
        backgroundColor="#035fff"
        _hover={{ backgroundColor: "#1254d6" }}
      >
        Pay Now
      </Button>
    </Box>
  );
}
