import { Input } from '@chakra-ui/react';
import PropTypes from 'prop-types'

export default function GenericInput({placeholder}) {
  return (
    <Input
      placeholder={placeholder}
      size="md"
      textAlign="center"
      paddingInline="4em"
      paddingBlock="1.5em"
      border="2px"
      borderStyle="solid"
      borderColor="rgba(224, 224, 224, 0.5)"
      fontSize="1.2em"
      _focus={{ background: "bg.input" }}
    />
  );
}

GenericInput.propTypes = {
    placeholder: PropTypes.string
}
