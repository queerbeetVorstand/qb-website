import React, { ReactElement, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import { useMediaQuery } from "@material-ui/core";
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
    <Box display="flex" flexWrap="noWrap" justifyContent="flex-end">
      {React.Children.map(props.children, (child, index) => (
            <Box px={1} key={index}>
              {child}
            </Box>
      ))}
    </Box>
  );
}