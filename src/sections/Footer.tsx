import React, { ReactElement } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import makeStyles from '@mui/styles/makeStyles';
import Link from "@/ui/Link";

const footerLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Impressum",
    href: "/imprint",
  },
];

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: "flex"
  },
  footerLink: {
    color: theme.palette.common.white,
  },
}));

export default function Footer(): ReactElement {
  const classes = useStyles();

  return (
    <Box bgcolor="secondary.main" py={2}>
      <Container className={classes.footerContainer} maxWidth="lg">
        {footerLinks.map(({ name, href }) => (
          <Box key={href} mr={3}>
            <Link href={href} className={classes.footerLink} underline="none">
              {name}
            </Link>
          </Box>
        ))}
        <Box flexGrow={1}></Box>
        <Box className={classes.footerLink} sx={{ml: 2}}>Queerbeet - Die LGBTQIA*-Hochschulgruppe</Box>
      </Container>
    </Box>
  );
}
