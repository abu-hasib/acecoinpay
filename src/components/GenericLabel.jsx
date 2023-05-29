import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function GenericLabel({ heading, text }) {
  return (
    <Box>
      <Heading as="h2" fontSize="1.125em" color="#05365c" marginBottom="1.5">
        {heading}
      </Heading>
      <Text color="#8e96a3" fontWeight="medium">
        {text}
      </Text>
    </Box>
  );
}

GenericLabel.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};
