import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Text from "@/components/Text";

export default function About(): ReactElement {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Text variant="h3">
          Impressum
        </Text>
        <Text variant="h4">
          Betreiber der Website
        </Text>
        Lorenzo Wormer
        <br />
        Heinrich-Wittmann-Straße 19
        <br />
        76131 Karlsruhe
        <Text variant="h4">
          Kontakt
        </Text>
        vorstand[at]queerbeet.org
      </Container>
    </React.Fragment>
  );
}
