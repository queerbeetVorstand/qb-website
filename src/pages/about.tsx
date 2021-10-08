import React, { ReactElement } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "@/sections/Header";

export default function About(): ReactElement {
  return (
    <Container maxWidth="sm">
      <Header />
      <Box my={4}>
        <Box>A text about us</Box>
      </Box>
    </Container>
  );
}
