import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import './index.css'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Poppins'
      }
    }
  },
  colors: {
    bg: {
      input: "linear-gradient(45deg, #f5f8ff, transparent)"
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
