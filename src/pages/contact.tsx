import React, { ReactElement } from "react";
import { Box, Grid, Typography as Typo } from "@mui/material";
import {
  Icon,
  MessageCircle,
  AtSign,
  Mail,
  CornerDownRight,
} from "react-feather";
import QHeading from "@/ui/QHeading";
import Link from "@/ui/Link";
import Header from "@/sections/Header";
import Body from "@/sections/Body";

interface Action {
  Icon: Icon;
  text: string;
  subtext?: string;
  href: string;
}

const memberActions: Action[] = [
  {
    text: "Rocket.Chat Server",
    Icon: MessageCircle,
    href: "https://go.rocket.chat/invite?host=chat.queerbeet.org&path=invite%2Fu5kgtj",
    subtext: "chat.queerbeet.org",
  },
  {
    text: "Mailingliste",
    Icon: AtSign,
    href: "https://www.lists.kit.edu/sympa/subscribe/queerbeet",
    subtext: "queerbeet@lists.kit.edu",
  },
];

const vsActions: Action[] = [
  {
    text: "vorstand@queerbeet.org",
    Icon: Mail,
    href: "mailto:vorstand@queerbeet.org",
  },
];

const renderActions = (actions: Action[]) => (
  <Grid container fontSize="1.5rem" spacing={3} mt={2} mb={4}>
    {actions.map(({ Icon, text, subtext, href }) => (
      <Grid item key={text} xs={12} md={6} lg={4}>
        <Link href={href} target="_blank" underline="none">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Icon size="2em" />
            <Box
              ml={2}
              color="secondary.main"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typo variant="h3" gutterBottom={false}>
                {text}
              </Typo>
              {subtext && (
                <Typo variant="subtitle2">
                  <CornerDownRight
                    size="1em"
                    style={{ marginRight: "0.3em" }}
                  />
                  {subtext}
                </Typo>
              )}
            </Box>
          </Box>
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default function Contact(): ReactElement {
  return (
    <Body>
      <Header />
      <QHeading variant="h1">Kontakt</QHeading>
      <Typo variant="body1">
        Hier findest du ein paar Möglichkeiten, wie du mit uns Kontakt aufnehmen
        kannst.
      </Typo>
      <QHeading variant="h2">Community</QHeading>
      <Typo variant="body1">
        Unter uns schreiben wir meistens Nachrichten auf unserem Rocket.Chat
        Server (gibt es auch als App) und die regelmäßigen Events der
        Hochschulgruppe kündigen wir zusätzlich über unsere Mailingliste an. Du
        kannst dich bei beiden einfach per Klick auf die Links unten anmelden.
      </Typo>
      {renderActions(memberActions)}
      <Typo variant="body1">
        Oder komm doch mal zu einem unserer Kaffeeklatsche dazu. Diese finden
        i.d.R. immer Donnerstags von 17:30 bis 19:30 im{" "}
        <Link href="https://goo.gl/maps/j65TS28gftuxx5pz8">Z10</Link> in
        Karlsruhe statt (Gruppenraum im 2. OG).
      </Typo>
      <QHeading variant="h2">Vorstand</QHeading>
      <Typo variant="body1">
        Um Mitglied bei uns zu werden, als Organisation Kontakt mit uns zu
        knüpfen, oder auch bei sonstigen Fragen und Anliegen, kannst du dich
        direkt per Email an den Vorstand der Queerbeet wenden.
      </Typo>
      {renderActions(vsActions)}
    </Body>
  );
}
