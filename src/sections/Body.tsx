import React, { FunctionComponent } from "react";
import { Container } from "@mui/material";

const BodyContainer: FunctionComponent = ({ children }) => (
  <Container
    maxWidth="lg"
    sx={{
      minHeight: "100vh",
      px: 3,
      pb: 5,
      pt: 10
    }}
  >
    {children}
  </Container>
);

export default BodyContainer;
