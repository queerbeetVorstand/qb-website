import React, { ReactElement } from "react";
import Box from '@material-ui/core/Box';
import QBLogo from "./QBLogo";
import { makeStyles } from "@material-ui/core";
import Link from "@/components/Link";


const borderBottomStyling = makeStyles({
  root: {
    borderBottom: '4pt solid',
    borderImageSource: 'linear-gradient(to right, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D)',
    borderImageSlice: '0% 0% 100% 0%'
  }
});

export default function Header(): ReactElement {
  const borderBottom = borderBottomStyling();
  return (
    <Box display="flex" justifyContent="flex-end" className={borderBottom.root}>
        <Box flexGrow={1} position="relative" top={8}>
          <Link href="/"><QBLogo /></Link>
        </Box>
    </Box>
  );
}
