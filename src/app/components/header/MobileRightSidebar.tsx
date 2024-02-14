import React, { useState } from "react";
import {
  IconApps,
  IconChevronDown,
  IconChevronUp,
  IconGridDots,
  IconHelpHexagon,
  IconHomeBolt,
  IconUser,
} from "@tabler/icons-react";
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import Link from "next/link";
import QuickLinks from "./QuickLinks";
import { useTranslation } from "react-i18next";
import ServicesLinks from "./ServicesLinks";

const MobileRightSidebar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const { t } = useTranslation();
  const cartContent = (
    <Box>
      <Box px={1}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton component={Link} href="/">
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconHomeBolt size="21" stroke="1.5" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2" fontWeight={600}>
                {t(`Home.title`)}
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} href="/about">
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconUser size="21" stroke="1.5" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2" fontWeight={600}>
                {t(`About.title`)}
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} href="/faq">
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconHelpHexagon size="21" stroke="1.5" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2" fontWeight={600}>
                {t(`FAQ.title`)}
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconApps size="21" stroke="1.5" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2" fontWeight={600}>
                {t(`Services.title`)}
              </Typography>
            </ListItemText>
            {open ? (
              <IconChevronDown size="21" stroke="1.5" />
            ) : (
              <IconChevronUp size="21" stroke="1.5" />
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box px={4} pt={3} overflow="hidden">
              <ServicesLinks />
            </Box>
          </Collapse>
        </List>
      </Box>

      <Box px={3} mt={3}>
        <QuickLinks />
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setShowDrawer(true)}
        sx={{
          ...(showDrawer && {
            color: "primary.main",
          }),
        }}
      >
        <IconGridDots size="21" stroke="1.5" />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Cart Sidebar */}
      {/* ------------------------------------------- */}
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        PaperProps={{ sx: { width: "350px" } }}
      >
        <Box p={3} pb={0}>
          <Typography variant="h5" fontWeight={600}>
            Hasan Ahmad
          </Typography>
        </Box>

        {/* component */}
        {cartContent}
      </Drawer>
    </Box>
  );
};

export default MobileRightSidebar;
