import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomAccordion from "../components/CustomAccordion";
const FAQSection = () => {
  const { t } = useTranslation();
  return (
    <Box marginBottom={5} paddingX={{ md: "3rem" }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h2" fontWeight={900} textAlign="center" mb={4}>
            {t(`FAQ.heading`)}
          </Typography>
          <CustomAccordion q={t(`FAQ.faq1.q`)} a={t(`FAQ.faq1.a`)} />
          <CustomAccordion q={t(`FAQ.faq2.q`)} a={t(`FAQ.faq2.a`)} />
          <CustomAccordion q={t(`FAQ.faq3.q`)} a={t(`FAQ.faq3.a`)} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQSection;
