import React, { FunctionComponent } from "react";
import { Container } from "@mui/material";

const BodyContainer: FunctionComponent = ({ children }) => (
  <Container
    maxWidth="lg"
    sx={{
      minHeight: "100vh",
      bgcolor: "white",
      px: 3,
      boxShadow: 4,
      pb: 5,
      pt: 8
    }}
  >
    {children}
  </Container>
);

export default BodyContainer;
