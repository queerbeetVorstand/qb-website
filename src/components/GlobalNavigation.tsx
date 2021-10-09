import React, { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import { Typography, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "react-feather";

interface GlobalNavigationProperties {
  children: React.ReactNode;
}

export default function GlobalNavigation(
  props: GlobalNavigationProperties
): ReactElement {
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
      <Button onClick={openDrawer} sx={{ overflow: "hidden", borderRadius: 0 }}>
        <Box
          sx={{
            fontSize: "1rem",
            lineHeight: 1,
            borderRadius: 3,
            color: "white",
            boxShadow: "0 0 0 32px white",
          }}
          p={1}
          pb={0.75}
        >
          <MenuIcon />
        </Box>
      </Button>
      <Drawer anchor="right" open={state.drawerOpen} onClose={hideDrawer}>
        <Box display="flex" justifyContent="center" width="100%" pt={4} pb={0}>
          <Typography variant="h4">Navigation</Typography>
        </Box>
        <List>
          {React.Children.map(props.children, (child, index) => (
            <ListItem key={index}>{child}</ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  ) : (
    <Box display="flex" flexWrap="nowrap" justifyContent="flex-end">
      {React.Children.map(props.children, (child, index) => {
        // TODO safe cast to NavigationItem
        let childSelected = child.props.selected === true;
        let childNode = childSelected ? React.cloneElement(child, {...child.props, textColor: "white"}) : child;
        return (
          <Box
            key={index}
            sx={{
              backgroundColor: childSelected ? "transparent" : "white",
            }}
          >
            {childNode}
          </Box>
        );
      })}
    </Box>
  );
}
