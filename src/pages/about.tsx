import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@/components/Link";
import Copyright from "@/components/Copyright";

export default function About(): ReactElement {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Stuff about qb...
        </Typography>
        <Link href="/">Go to the main page</Link>
        <Copyright />
      </Box>
    </Container>
  );
}
