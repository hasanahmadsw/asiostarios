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
const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Box
        textAlign="center"
        justifyContent="center"
        marginTop="16rem"
        padding="1rem"
      >
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
          mb={6}
        >
          {t(`construction`)}
        </Typography>
        <Link href="/">
          <StyledButton variant="contained">{t(`404.button`)}</StyledButton>
        </Link>
      </Box>
    </Container>
  );
};

export default Portfolio;
