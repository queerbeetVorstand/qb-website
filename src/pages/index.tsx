import React, { ReactElement } from "react";
import Text from "@mui/material/Typography";
import Link from "@/ui/Link";
import QHeading from "@/ui/QHeading";
import Header from "@/sections/Header";
import Body from "@/sections/Body";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

export default function Index(): ReactElement {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <React.Fragment>
      <Header />
      <Body>
        <Box mt={{ xs: 3, md: 6 }}>
          <img
            width="100%"
            src={
              desktop ? "/images/group_pic.jpg" : "/images/group_pic_mobile.jpg"
            }
          ></img>
        </Box>
        <QHeading variant="h1">Hey!</QHeading>
        <Text variant="body1" mt={3}>
          <p>
            Wir sind Studierende der Hochschulen in Karlsruhe, die mit anderen
            queeren* Menschen in Verbindung treten, mit ihnen Veranstaltungen
            besuchen und auch selbst welche organisieren.{" "}
          </p>
          <p>
            Möchtest du noch mehr erfahren? Oder hast du Lust, mal
            vorbeizuschauen? Wir treffen uns aktuell jeden Donnerstag 17:30 im{" "}
            <Link href="https://goo.gl/maps/JCHnMXudYRPwoiGu7">Z10</Link>, mal
            einfach so zum Quatschen oder für besondere Events wie Spielabende,
            Filmabende, Basteln, etc... Die meisten dieser Veranstaltungen
            findest du auf der Website{" "}
            <Link href="https://queerka.de">queerka.de</Link>, wo auch andere
            queere Gruppen aus Karlsruhe ihre Events eintragen.{" "}
          </p>
          <p>Komm doch mal vorbei! Wir freuen uns auf dich. 😊</p>
          <p>PS: Auch Nicht-Studierende sind herzlich willkommen.</p>
        </Text>
      </Body>
    </React.Fragment>
  );
}
