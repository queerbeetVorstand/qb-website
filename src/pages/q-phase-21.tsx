import React, { ReactElement } from "react";
import Container from "@mui/material/Container";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";

const colorfulText = {
    backgroundImage:
      "linear-gradient(to right, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D)",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    color: "transparent",
};

export default function Index(): ReactElement {
  return (
    <Container maxWidth="md">
      <Box display="flex">
        <Text variant="h2" style={{marginBottom: 0}}>
          <Box fontWeight="bold">F*ck last year...</Box>
        </Text>
      </Box>
      <Box display="flex" justifyContent="right">
        <Text variant="h1" style={{marginTop: 0}}>
          <Box fontFamily="Hello" p={1} sx={colorfulText}>
            let&apos;s be queer!
          </Box>
        </Text>
      </Box>
      <Text variant="h4" mt={3} sx={{textAlign: "center"}}>Q-Phase - Queere Orientierungsphase in Karlsruhe</Text>
      <Text variant="h4" sx={{textAlign: "center"}}>26. bis 28. November 2021</Text>
    </Container>
  );
}
