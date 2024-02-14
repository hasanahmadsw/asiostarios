"use client";
import { Box, Button, Container, Typography, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
  fontWeight: "700",
}));
const Mission = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Box marginTop="8rem" padding="1rem">
        <Typography variant="h1" fontWeight={900} mb={3}>
          {t(`mission.title`)}
        </Typography>
        <Typography variant="subtitle1" fontWeight={500} mb={4}>
          {t(`mission.body`)}
        </Typography>
        <Link href="/">
          <StyledButton variant="contained">{t(`404.button`)}</StyledButton>
        </Link>
      </Box>
    </Container>
  );
};

export default Mission;
