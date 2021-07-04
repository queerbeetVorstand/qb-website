import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "@/components/Header";

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
