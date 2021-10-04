import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@/components/Link";
import Header from "@/components/Header";
import Text from "@/components/Text";

export default function Index(): ReactElement {
  return (
    <Container maxWidth="md">
      <Header />
      <Box my={4}>
        <Text variant="h5">
          🌈🥳 Hier gibt es bald weitere Infos zur Q-Phase 2021 in Karlsruhe 🥳🌈
        </Text>
        <Typography variant="body1">
          Du kannst dich solange schon einmal bei unserer
          <Link href="https://www.lists.kit.edu/sympa/subscribe/queerbeet" target="_blank"> öffentlichen Mailingliste</Link> (~1 E-Mail/Woche) 
          oder unserem
          <Link href="https://go.rocket.chat/invite?host=chat.queerbeet.org&path=invite%2F9kvNdD" target="_blank"> Rocket.Chat Server</Link> anmelden, 
          um immer auf dem Laufenden zu bleiben.
        </Typography>
      </Box>
    </Container>
  );
}