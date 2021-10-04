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
          🚧 Hier entsteht gerade noch die Website der Queerbeet Hochschulgruppe 🚧
        </Text>
        <Typography variant="body1">
          Für weitere Infos zu uns und den Kontakt zu unseren Mitgliedern kannst du gerne unserer
          <Link href="https://www.lists.kit.edu/sympa/subscribe/queerbeet" target="_blank"> öffentlichen Mailingliste</Link> (~1&nbsp;E-Mail/Woche) 
          oder unserem
          <Link href="https://go.rocket.chat/invite?host=chat.queerbeet.org&path=invite%2F9kvNdD" target="_blank"> Rocket.Chat Server</Link> beitreten.
        </Typography>
      </Box>
    </Container>
  );
}
