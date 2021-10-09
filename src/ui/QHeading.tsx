import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  variant?: Variant;
  underline?: boolean;
}

const QHeading: FunctionComponent<Props> = ({
  variant,
  children,
  underline = true,
}) => (
  <Typography variant={variant} sx={{ mt: { xs: 3, md: 5 }, mb: 3 }}>
    {children}
    {underline ? (
      <Box bgcolor="primary.main" height="0.15em" width="2em" mt={1}></Box>
    ) : null}
  </Typography>
);

export default QHeading;
