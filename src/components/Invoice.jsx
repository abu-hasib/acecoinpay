import { Box } from "@chakra-ui/react";

import InvoiceTable from "./InvoiceTable";
import Card from "./Card";
import Total from "./Total";

export default function Invoice() {
  return (
    <Box
      position="relative"
      width={["0", "35%", "30%", "25%"]}
      display={["none", null, "block"]}
    >
      <Box
        as="span"
        height="1.5em"
        width="5em"
        backgroundColor="#035fff"
        position="absolute"
        top="-7px"
        left="50%"
        transform="translate(-50%, 0)"
      ></Box>
      <Card />
      <Box
        backgroundColor="#f0f3f8"
        height="90%"
        position="absolute"
        top="10%"
        width="100%"
        zIndex="-1"
        bottom="0"
        borderRadius="8px"
      >
        <InvoiceTable />
        <Knips />
        <Total />
      </Box>
    </Box>
  );
}

function Knips() {
  return (
    <Box
      position="absolute"
      bottom="7.4em"
      width="100%"
      border="4px dashed #cbcbcb"
      display="flex"
      align-items="center"
      _before={{
        content: '""',
        display: "block",
        position: "absolute",
        width: "100%",
        height: "2em",
        backgroundColor: "#f0f3f8",
        bottom: "-30px",
      }}
    >
      <Box
        position="absolute"
        height="2.65em"
        width="2.65em"
        backgroundColor="#fff"
        borderRadius="50%"
        bottom="-15px"
        left="-25px"
      />
      <Box
        position="absolute"
        height="2.65em"
        width="2.65em"
        backgroundColor="#fff"
        borderRadius="50%"
        bottom="-15px"
        right="-25px"
      />
    </Box>
  );
}
