import React, { ReactElement } from "react";
import Text from "@mui/material/Typography";
import QHeading from "@/ui/QHeading";
import Header from "@/sections/Header";
import Body from "@/sections/Body";

export default function About(): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Body>
        <QHeading variant="h1">Impressum</QHeading>
        <QHeading variant="h2">Betreiber der Website</QHeading>
        <Text variant="body1" paragraph>
          Lorenzo Wormer
          <br />
          Heinrich-Wittmann-Straße 19
          <br />
          76131 Karlsruhe
        </Text>
        <QHeading variant="h2">Kontakt</QHeading>
        <Text variant="body1" paragraph>
          vorstand[at]queerbeet.org
        </Text>
      </Body>
    </React.Fragment>
  );
}
