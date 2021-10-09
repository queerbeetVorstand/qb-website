import React, { ReactElement } from "react";
import Text from "@mui/material/Typography";
import Header from "@/sections/Header";
import Body from "@/sections/Body";

export default function About(): ReactElement {
  return (
    <Body>
      <Header />
      <Text variant="h4" component="h1">
        Impressum
      </Text>
      <Text variant="h5" component="h2">
        Betreiber der Website
      </Text>
      <Text variant="body1" paragraph>
        Lorenzo Wormer
        <br />
        Heinrich-Wittmann-Straße 19
        <br />
        76131 Karlsruhe
      </Text>
      <Text variant="h5" component="h2">
        Kontakt
      </Text>
      <Text variant="body1" paragraph>
        vorstand[at]queerbeet.org
      </Text>
    </Body>
  );
}
