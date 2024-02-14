"use client";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Divider />
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={12} lg={12} textAlign="center">
          <Typography
            fontSize="14"
            fontWeight="600"
            color="textPrimary"
            mt={5}
            mb={4}
          >
            {t(`footer`)}
            {/* Copyrights &copy; 2022 Hasan Ahmad | All Rights Reserved. */}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
