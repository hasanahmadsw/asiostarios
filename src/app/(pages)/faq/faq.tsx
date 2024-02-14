"use client";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import FAQSoftware from "./faq-software";
import FAQBusiness from "./faq-business";
import FAQStartups from "./faq-startup";
import FAQAi from "./faq-ai";

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Box textAlign="center" marginY="4rem" paddingY="2rem">
        <Typography
          sx={{
            fontSize: {
              md: "54px",
            },
            lineHeight: {
              md: "60px",
            },
          }}
          variant="h2"
          fontWeight={900}
        >
          {t(`FAQ.heading`)}
        </Typography>
      </Box>
      <Box marginBottom={5}>
        <Paper sx={{ padding: { md: "3rem", xs: "2rem" }, mb: "2rem" }}>
          <FAQBusiness />
        </Paper>

        <Paper sx={{ p: { md: "3rem", xs: "2rem" }, mb: "2rem" }}>
          <FAQSoftware />
        </Paper>

        <Paper sx={{ padding: { md: "3rem", xs: "2rem" }, mb: "2rem" }}>
          <FAQStartups />
        </Paper>

        <Paper sx={{ padding: { md: "3rem", xs: "2rem" }, mb: "2rem" }}>
          <FAQAi />
        </Paper>
      </Box>
    </Container>
  );
};

export default FAQ;
