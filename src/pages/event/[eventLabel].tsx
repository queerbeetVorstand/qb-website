import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "@/components/Header";

import matter from "gray-matter";
import fs from "fs";
import path from "path";
import {  GetStaticProps, GetStaticPaths } from 'next'
import Link from "next/link";
import { Sunrise as SunriseIcon, Sunset as SunsetIcon } from 'react-feather';

interface EventComponentContext  {
  props: EventComponentProps
}
interface EventComponentProps {
  title:string,
  start:string,
  end:string,
  location_label:string,
  location_url:string,
  content:string
}

export default function Event({props}: EventComponentContext): ReactElement {
  return (
    <Container maxWidth="sm">
      <Header />
      <Box my="4">
        <Box my="4">
          <Typography variant="h4">{props.title}</Typography>
        </Box>
        <Box my="4">
          <Box my="4">
            <SunriseIcon />
            <Typography variant="caption">{props.start}</Typography>
          </Box>
          <Box my="4">
            <SunsetIcon />
            <Typography variant="caption">{props.end}</Typography>
          </Box>
          <Box my="4">
            <Link href={props.location_url}>{props.location_label}</Link>
          </Box>
        </Box>
        <Box my="4">
        <Typography variant="body1">{props.content}</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const eventDirectory = path.join(process.cwd(), 'resources/data/event');
  const fileNames = fs.readdirSync(eventDirectory)
  const paths = fileNames.map(fileName => {
    return {
      params: {
        eventLabel: fileName.replace(/\.md$/, '')
      }
    }
  })

  return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async (context) => {
  const eventLabel = context.params?.eventLabel as string;

  const eventDirectory = path.join(process.cwd(), 'resources/data/event');
  const eventFilename = path.join(eventDirectory, eventLabel + '.md');
  const eventContents = fs.readFileSync(eventFilename, 'utf-8');

  const {data, content} = matter(eventContents);

  const options = { weekday: "short", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };

  const props:EventComponentProps = {
    title: data.title,
    start: new Date(data.start).toLocaleDateString("de-DE", options),
    end: new Date(data.end).toLocaleDateString("de-DE", options),
    location_label: data.location_label,
    location_url: data.location_url,
    content: content
  };

  return {
    props: {props}
  }
}