import {
  Box,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import appleIcon from "../assets/apple-13.svg";

export default function InvoiceTable() {
  return (
    <Box top="50%" position="absolute" width="full">
      <TableContainer paddingInline="1em">
        <Table variant="striped" size="sm">
          <Tbody color="#8e96a3">
            <Tr>
              <Td fontSize="0.85em" fontWeight="medium">
                Company
              </Td>
              <Td
                textAlign="right"
                fontWeight="semibold"
                color="#05365c"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Image
                  src={appleIcon}
                  height="1.5em"
                  width="auto"
                  objectFit="cover"
                />
                <Text marginLeft="0.5em">Apple</Text>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="0.85em" fontWeight="medium">
                Order Number
              </Td>
              <Td textAlign="right" fontWeight="semibold" color="#05365c">
                1266201
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="0.85em" fontWeight="medium">
                Product
              </Td>
              <Td textAlign="right" fontWeight="semibold" color="#05365c">
                MacBook Air
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="0.85em" fontWeight="medium">
                VAT (20%)
              </Td>
              <Td textAlign="right" fontWeight="semibold" color="#05365c">
                $100.00
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
