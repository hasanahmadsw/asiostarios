import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Grid,
  styled,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";
import QuickLinks from "./QuickLinks";
import { useTranslation } from "react-i18next";
import ServicesLinks from "./ServicesLinks";

const AppDD = () => {
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    color: theme.palette.text.primary,
  }));
  const { t } = useTranslation();

  return (
    <>
      <Link href="/">
        <StyledButton color="inherit" variant="text">
          {t(`Home.title`)}
        </StyledButton>
      </Link>
      <Link href="/about">
        <StyledButton color="inherit" variant="text">
          {t(`About.title`)}
        </StyledButton>
      </Link>
      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          sx={{
            color: open
              ? "secondary.main"
              : (theme) => theme.palette.primary.main,
          }}
          endIcon={
            <IconChevronDown
              size="15"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          {t(`Services.title`)}
        </StyledButton>
        {open && (
          <Paper
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            sx={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "55px",
              width: "700px",
              margin: "0 auto",
            }}
          >
            <Grid container>
              <Grid item sm={12} display="flex">
                <Box p={4} pb={3}>
                  <ServicesLinks />
                  <Divider />
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "flex",
                      },
                    }}
                    alignItems="center"
                    justifyContent="space-between"
                    pt={2}
                    pr={4}
                  >
                    <Link href="/faq">
                      <Typography
                        variant="body1"
                        fontWeight="600"
                        color="textPrimary"
                        display="flex"
                        alignItems="center"
                        gap="4px"
                      >
                        <IconHelp width={24} />
                        {/* Frequently Asked Questions */}
                        {t(`FAQ.heading`)}
                      </Typography>
                    </Link>
                    <Link href="/faq">
                      <Button variant="contained" color="primary">
                        {t(`FAQ.button`)}
                      </Button>
                    </Link>
                  </Box>
                </Box>
                {/* <Divider orientation="vertical" /> */}
              </Grid>
              {/* <Grid item sm={4}>
                <Box p={4}>
                  <QuickLinks />
                </Box>
              </Grid> */}
            </Grid>
          </Paper>
        )}
      </Box>

      {/*  */}
      <Link href="/portfolio">
        <StyledButton color="inherit" variant="text">
          {t(`Portfolio.title`)}
        </StyledButton>
      </Link>
      <Link href="/faq">
        <StyledButton color="inherit" variant="text" href="/faq">
          {t(`FAQ.title`)}
        </StyledButton>
      </Link>
      <Link href="/contact">
        <StyledButton color="inherit" variant="text" href="contact">
          {t(`Contact.title`)}
        </StyledButton>
      </Link>

      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpen2}
          onMouseLeave={handleClose2}
          sx={{
            color: open2
              ? "secondary.main"
              : (theme) => theme.palette.primary.main,
          }}
          endIcon={
            <IconChevronDown
              size="15"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          {t(`QuickLinks.title`)}
        </StyledButton>
        {open2 && (
          <Paper
            onMouseEnter={handleOpen2}
            onMouseLeave={handleClose2}
            sx={{
              position: "absolute",
              width: "250px",
              margin: "auto",
            }}
          >
            <Box p={4}>
              <QuickLinks />
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default AppDD;
