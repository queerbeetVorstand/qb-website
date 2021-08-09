import { styled, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import React, { ReactElement } from "react";

const TextComponent = styled(Typography)(spacing);

const headings = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"];

export default function Text(
  props: React.ComponentProps<typeof TextComponent>
): ReactElement {
  const { variant } = props;

  return (
    <TextComponent
      {...props}
      {...(headings.includes(variant as string) && { mt: 3, mb: 2 })}
    />
  );
}
