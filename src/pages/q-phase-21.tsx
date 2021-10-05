import React, { ReactElement } from "react";
import Container from "@mui/material/Container";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Header from "@/components/Header";
import Link from "@/components/Link";
import { Button, Grid } from "@mui/material";

const colorfulText = {
  backgroundImage:
    "linear-gradient(to right, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D)",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
  color: "transparent",
};

const Spacer = () => (
  <Grid item xs={2} display={{ xs: "none", md: "block" }}></Grid>
);

export default function Index(): ReactElement {
  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: "white" }}>
        <Header />
        <Text variant="h4" component="h1">
          Q-Phase - Queere Orientierungsphase in Karlsruhe
        </Text>
        <Text variant="h5" component="div">
          26. bis 28. November 2021
        </Text>
        <Box
          sx={{
            textAlign: "center",
            my: {xs: 3, sm: 5},
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              p: {xs: 1, sm: 2},
              pt: {xs: 2, sm: 3},
              borderTop: "3px solid",
              borderBottom: "3px solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexWrap: "wrap",
            }}
          >
            <Text
              variant="h3"
              component="div"
              gutterBottom={false}
              sx={{ fontWeight: "bold", whiteSpace: "nowrap", mr: 2 }}
            >
              F*ck last year,
            </Text>

            <Text
              variant="h2"
              component="div"
              gutterBottom={false}
              sx={{
                ...colorfulText,
                fontFamily: "Hello",
                p: 1,
                whiteSpace: "nowrap",
              }}
            >
              let&apos;s be queer!
            </Text>
          </Box>
        </Box>
        <Text variant="body1" paragraph sx={{ mt: {xs: 3, sm: 5} }}>
          Mit diesem Motto startet dieses Jahr unsere queere Orientierungsphase,
          die &rdquo;Q-Phase&rdquo;, endlich wieder in Person!
          <br />
          Los geht es mit einem{" "}
          <b>
            Kennenlern-Treffen am Fr. den 26.11. 19:30 im{" "}
            <Link href="https://goo.gl/maps/JCHnMXudYRPwoiGu7">Z10</Link>
          </b>
          .<br />
          Wenn du Lust hast mitzumachen, dann melde dich am besten gleich über
          den Button unten an. Wegen Corona kann es sein, dass wir nur begrenzte
          Plätze haben werden, weshalb eine frühzeitige Anmeldung wichtig ist.
          <br />
          Speichere dir auch diese Seite ab, da es hier in nächster Zeit weitere
          Infos zum Programm und co. geben wird.
        </Text>
        <Grid container spacing={2} mt={{xs: 1, sm: 3}} mb={{xs: 5, sm: 8}} pt={0}>
          <Spacer />
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              href="https://rebrand.ly/q-phase-21-anmeldung"
              target="_blank"
            >
              Zur Q-Phase anmelden
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%" }}
              href="/Q-Phase_Kennenlern-Treffen.ics"
              target="_blank"
            >
              Im Kalender abspeichern
            </Button>
          </Grid>
          <Spacer />
          <Spacer />
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%" }}
              href="https://go.rocket.chat/invite?host=chat.queerbeet.org&path=invite%2Fu5kgtj"
              target="_blank"
            >
              Chat-Server beitreten
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%" }}
              href="https://www.lists.kit.edu/sympa/subscribe/queerbeet"
              target="_blank"
            >
              E-Mail Verteiler beitreten
            </Button>
          </Grid>
          <Spacer />
        </Grid>
      </Box>
    </Container>
  );
}
