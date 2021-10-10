import React, { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import { Menu as MenuIcon } from "react-feather";

interface GlobalNavigationProperties {
  children: React.ReactNode;
  mobileBackgroundColorInner?: string;
  mobileBackgroundColorOuter?: string;
  mobileMenuIconColor?: string;
}

export default function GlobalNavigation(
  props: GlobalNavigationProperties
): ReactElement {
  const [state, setState] = useState({
    drawerOpen: false,
  });

  const hideDrawer = () => {
    setState({ ...state, drawerOpen: false });
  };

  const openDrawer = () => {
    setState({ ...state, drawerOpen: true });
  };

  const {
    mobileBackgroundColorOuter = "transparent",
    mobileBackgroundColorInner = "primary.main",
    mobileMenuIconColor: menuIconColor = mobileBackgroundColorOuter,
  } = props;

  return (
    <React.Fragment>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <Button
          onClick={openDrawer}
          sx={{
            overflow: "hidden",
            borderRadius: 0,
            border: "none",
            "&:hover": { border: "none" },
          }}
        >
          <Box
            sx={{
              fontSize: "1rem",
              lineHeight: 1,
              borderRadius: 3,
              color: menuIconColor,
              boxShadow: `0 0 0 32px ${mobileBackgroundColorOuter}`,
              backgroundColor: mobileBackgroundColorInner,
            }}
            p={1}
            pb={0.75}
          >
            <MenuIcon />
          </Box>
        </Button>
        <Drawer anchor="right" open={state.drawerOpen} onClose={hideDrawer}>
          <List>
            {React.Children.map(props.children, (child, index) => (
              <ListItem key={index} sx={{ pt: 3 }}>
                {child}
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box
        flexWrap="nowrap"
        justifyContent="flex-end"
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        {React.Children.map(props.children, (child, index) => {
          return <Box key={index}>{child}</Box>;
        })}
      </Box>
    </React.Fragment>
  );
}
