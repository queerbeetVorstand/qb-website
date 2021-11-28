import React, { ReactElement } from "react";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/ui/Link";
import Header from "@/sections/Header";
import Body from "@/sections/Body";

const BoxImg = ({ mirrored = false }: { mirrored?: boolean }) => (
  <Box
    flexGrow={1}
    sx={mirrored ? { transform: "scaleX(-1)" } : {}}
    maxWidth="150px"
  >
    <img src="/images/queerbeats-box.png" width="100%" alt="Lautsprecher"></img>
  </Box>
);

export default function Queerbeats(): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Body>
        <Text
          variant="h1"
          display="flex"
          mt={5}
          justifyContent="center"
          sx={{ fontWeight: "bold" }}
        >
          <BoxImg mirrored />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={{ xs: "center", sm: "end" }}
            px={3}
            pb={2}
          >
            <Box
              display={{ xs: "none", sm: "block" }}
              sx={{
                textAlign: "center",
                fontSize: { xs: "10vw", lg: "6rem" },
              }}
            >
              queerbeats
            </Box>
            <Box
              display={{ xs: "block", sm: "none" }}
              sx={{
                fontSize: "12vw",
              }}
            >
              queer
              <br />
              beats
            </Box>
          </Box>
          <BoxImg />
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
            <b>Danke für eure Teilnahme!</b>
            <br />
            Leider ist es schon wieder rum. Weder die Maskenpflicht noch die
            kühlen Temperaturen konnten uns auf dem Dancefloor etwas anhaben.
            Falls ihr den Abend genauso gelungen fandet, sehen wir euch
            vielleicht bald auch bei unseren Kaffeeklatschen wieder. Danke auch
            an unsere tollen Helfer*innen und das{" "}
            <Link href="https://www.akk.org/">AKK</Link>!
          </Text>
        </Box>
        <Text variant="body1" paragraph sx={{ mt: { xs: 3, sm: 5 } }}>
          Die queere Party im AKK bietet bei familiärer Atmosphäre jede Menge
          Spaß und Freude. Nibs sorgt auf dem Dancefloor für gute Stimmung. Und
          wer es eher gemütlich mag, findet das ein oder andere Getränk an der
          Glühinsel und ein entspanntes Plätzchen im Biergarten. Die nächste
          Queerbeats findet am <b>Samstag den 27.11.2021 ab 18:00 Uhr</b> statt.
          Im Biergarten des <Link href="https://www.akk.org/">AKK</Link> wird
          dann gemeinsam gefeiert.
        </Text>
        <Text variant="body1" paragraph sx={{ mt: { xs: 3, sm: 4 } }}>
          Da Miss Rona nicht auf der Gästeliste steht und sich nicht
          einschleichen darf, gilt eine <b>2G+ Regelung</b> und Maskenpflicht.
          Ausgenommen von der Maskenpflicht ist für den Konsum von Getränken der
          Bereich der Sitzbänke. Das Hygienekonzept für die Party kannst du dir{" "}
          <Link
            href="https://cloud.queerbeet.org/index.php/s/S7NLkGSF27dtYGd"
            target="_blank"
          >
            hier
          </Link>{" "}
          anschauen. Falls sich noch Änderungen aufgrund einer neuen Verordnung
          ergeben, werden diese hier angegeben. Wir freuen uns auf euch alle 🏳️‍🌈
        </Text>
      </Body>
    </React.Fragment>
  );
}
