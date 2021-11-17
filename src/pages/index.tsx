import React, { ReactElement } from "react";
import Text from "@mui/material/Typography";
import Link from "@/ui/Link";
import QHeading from "@/ui/QHeading";
import Header from "@/sections/Header";
import Body from "@/sections/Body";
import { GetServerSideProps } from 'next';

export default function Index({greeting}: IndexProps): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Body>
        <QHeading variant="h1">{greeting}</QHeading>
        <Text variant="body1" mt={3}>
          <p>
            Wir sind Studierende der Hochschulen in Karlsruhe, die mit anderen
            queeren* Menschen in Verbindung treten, mit ihnen Veranstaltungen
            besuchen und auch selbst welche organisieren.{" "}
          </p>
          <p>
            Möchtest du noch mehr erfahren? Oder hast du Lust, mal
            vorbeizuschauen? Wir treffen uns aktuell jeden Mittwoch 17:30 im{" "}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const greetings : string[] = [
    "Schön, dass du da bist!",
    "Willkommen!",
    "Schön dich zu sehen!",
    "Willkommen bei uns!",
    "👋",
    "Huhu!",
  ];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return {props: {greeting: greetings[randomIndex]}};
}

export interface IndexProps {
  greeting: string
}
