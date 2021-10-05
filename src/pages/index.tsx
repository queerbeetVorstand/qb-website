import React, { ReactElement } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Text from "@mui/material/Typography";
import Link from "@/components/Link";
import Header from "@/components/Header";

export default function Index(): ReactElement {
  return (
    <Container maxWidth="md">
      <Header />
      <Box my={4}>
        <Text variant="h5">
          🚧 Hier entsteht gerade noch die Website der Queerbeet Hochschulgruppe
          🚧
        </Text>
        <Text variant="body1">
          Für weitere Infos zu uns und den Kontakt zu unseren Mitgliedern kannst
          du gerne unserer{" "}
          <Link
            href="https://www.lists.kit.edu/sympa/subscribe/queerbeet"
            target="_blank"
          >
            öffentlichen Mailingliste
          </Link>{" "}
          (~1 E-Mail/Woche) oder unserem
          <Link
            href="https://go.rocket.chat/invite?host=chat.queerbeet.org&path=invite%2F9kvNdD"
            target="_blank"
          >
            {" "}
            Rocket.Chat Server
          </Link>{" "}
          beitreten.
        </Text>
      </Box>
    </Container>
  );
}
