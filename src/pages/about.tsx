import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MuiMarkdown from "@/components/MuiMarkdown";
import api_client from "@/lib/api_client";
import { About as AboutProps } from "@/types/api";
import { StaticApiFetch } from "@/types/util";

export default function About(props: AboutProps): ReactElement {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Box><MuiMarkdown md={props.text ?? "*No content*"}/></Box>
      </Box>
    </Container>
  );
}

export async function getStaticProps(): StaticApiFetch<AboutProps> {
  const res = await api_client.singleton("about").read();
  return {
    props: res,
    revalidate: /* every */ 300 /* secons */,
  };
}
