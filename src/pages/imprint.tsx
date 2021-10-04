import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Text from "@/components/Text";
import Header from "@/components/Header";

export default function About(): ReactElement {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Header />
        <Text variant="h4">
          Impressum
        </Text>
        <Text variant="h5">
          Betreiber der Website
        </Text>
        Lorenzo Wormer
        <br />
        Heinrich-Wittmann-Straße 19
        <br />
        76131 Karlsruhe
        <Text variant="h5">
          Kontakt
        </Text>
        vorstand[at]queerbeet.org
      </Container>
    </React.Fragment>
  );
}
