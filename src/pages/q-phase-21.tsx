import React, { ReactElement } from "react";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import Link from "@/ui/Link";
import QHeading from "@/ui/QHeading";
import Header from "@/sections/Header";
import Body from "@/sections/Body";

const Spacer = () => (
  <Grid item xs={2} lg={3} display={{ xs: "none", md: "block" }}></Grid>
);

export default function QPhase21(): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Body>
        <QHeading variant="h1">Q-Phase</QHeading>
        <Text variant="h3" component="div">
          Queere Orientierungsphase in Karlsruhe
        </Text>
        <Text variant="h3" component="div">
          26. bis 28. November 2021
        </Text>
        <Box>
          <Text
            variant="body1"
            paragraph
            sx={{
              mt: { xs: 3, sm: 5 },
              border: "1px dashed",
              borderColor: "primary.main",
              p: 2,
              textAlign: "justify",
            }}
          >
            <b>Und schon ist es wieder rum!</b>
            <br />
            Wir hoffen, dass Ihr eine die Zeit genauso genossen habt wie wir.
            Hoffentlich sehen wir uns bald bei unseren regelmäßigen
            Kaffeeklatsch wieder 🥳. Danke auch an unsere fleißigen Helfer, die
            das Wochenende ermöglicht haben, sowie die{" "}
            <Link href="https://queeramnestyka.amnesty-international.de">
              QueerAmnesty Karlsruhe
            </Link>{" "}
            und{" "}
            <Link href="https://www.pridepictures.de">PridePictures e.V.</Link>.
          </Text>
        </Box>
        <Box
          sx={{
            my: { xs: 3, sm: 5 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              pb: { xs: 0, sm: 1 },
              pt: { xs: 2, sm: 2 },
              borderTop: "2px solid",
              borderBottom: "2px solid",
              display: "flex",
              flexDirection: "column",
              color: "secondary.main",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "baseline",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              <Text
                variant="h1"
                component="div"
                gutterBottom={false}
                sx={{ fontWeight: "bold", whiteSpace: "nowrap", mx: 1 }}
              >
                F*ck last year,
              </Text>

              <Text
                color="primary"
                component="div"
                gutterBottom={false}
                sx={{
                  fontFamily: "Hello",
                  p: 1,
                  whiteSpace: "nowrap",
                  mx: 1,
                  fontSize: {
                    xs: "3rem",
                    sm: "3.4rem",
                    md: "3.8rem",
                    lg: "4.2rem",
                  },
                }}
              >
                let&apos;s be queer!
              </Text>
            </Box>
          </Box>
        </Box>
        <Text variant="body1" paragraph sx={{ mt: { xs: 3, sm: 5 } }}>
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
        </Text>
        <Grid container spacing={2} my={{ xs: 1, sm: 3 }} pt={0}>
          <Spacer />
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ width: "100%" }}
              href="https://go.rocket.chat/invite?host=chat.queerbeet.org&path=invite%2Fu5kgtj"
              target="_blank"
            >
              Chat-Server beitreten
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ width: "100%" }}
              href="https://www.lists.kit.edu/sympa/subscribe/queerbeet"
              target="_blank"
            >
              E-Mail Verteiler beitreten
            </Button>
          </Grid>
          <Spacer />
        </Grid>
      </Body>
    </React.Fragment>
  );
}
