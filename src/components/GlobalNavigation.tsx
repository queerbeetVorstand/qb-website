import React, { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import { useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from 'react-feather';

interface GlobalNavigationProperties {
  children: React.ReactNode
}

export default function GlobalNavigation(props: GlobalNavigationProperties): ReactElement {
  const [state, setState] = useState({
    drawerOpen: false,
  });

  const isMobile = useMediaQuery("(max-width:600px)");

  const hideDrawer = () => {
    setState({ ...state, drawerOpen: false });
  };

  const openDrawer = () => {
    setState({ ...state, drawerOpen: true });
  };

  return isMobile ? (
    <React.Fragment>
      <Button onClick={openDrawer}>
        <MenuIcon />
      </Button>
      <Drawer anchor="top" open={state.drawerOpen} onClose={hideDrawer}>
        <List>
          {React.Children.map(props.children, (child, index) => (
            <ListItem key={index}>
              {child}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  ) : (
    <Box display="flex" flexWrap="nowrap" justifyContent="flex-end">
      {React.Children.map(props.children, (child, index) => (
            <Box px={1} key={index}>
              {child}
            </Box>
      ))}
    </Box>
  );
}