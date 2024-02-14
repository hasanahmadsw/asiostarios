"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import {
  IconBrandWhatsapp,
  IconCoin,
  IconPaint,
  IconZoomCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));
const StartupServices = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        mt={{ md: "4rem", xs: "1rem" }}
        spacing={4}
        alignItems="center"
        flexWrap="wrap-reverse"
      >
        <Grid item md={6} sm={12}>
          <Typography
            sx={{
              fontSize: {
                md: "50px",
              },
              lineHeight: {
                md: "60px",
              },
            }}
            variant="h1"
            fontWeight={900}
            mb={3}
          >
            {t(`Entrepreneurship.header.title`)}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" mb={2}>
            {t(`Entrepreneurship.header.content`)}
          </Typography>
          <Link href="https://wa.me/+971508838637" target="_blank">
            <StyledButton
              variant="contained"
              endIcon={<IconBrandWhatsapp width={18} />}
              sx={{ my: "1rem" }}
            >
              {t(`Entrepreneurship.header.button`)}
            </StyledButton>
          </Link>
        </Grid>
        <Grid item md={6} xs={12} textAlign="center">
          {smUp ? (
            <Image
              src={`/outerspace.svg`}
              width={520}
              height={460}
              alt="outerspace"
            />
          ) : (
            <Image
              src={`/outerspace.svg`}
              width={320}
              height={250}
              alt="outerspace"
            />
          )}
        </Grid>
      </Grid>

      <Box mt="5rem">
        <Typography variant="h2" fontWeight={900} mb={6}>
          {t(`Entrepreneurship.body.title`)}
        </Typography>

        <Paper sx={{ p: { xs: "2rem", md: "4rem" }, mb: "2rem" }}>
          <Grid container spacing={2} alignItems="center" mb={4}>
            <Grid item md={2}>
              <IconZoomCheck size="120" color="#407BFF" />
            </Grid>
            <Grid item md={10}>
              <Typography variant="h3" fontWeight={900} mb={1}>
                {t(`Entrepreneurship.body.Idea Validation.title`)}
              </Typography>
              <Typography variant="subtitle2">
                {t(`Entrepreneurship.body.Idea Validation.subtitle`)}
              </Typography>
            </Grid>
          </Grid>
          <ul>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Idea Validation.Market Research`)}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(
                  `Entrepreneurship.body.Idea Validation.Feasibility Analysis`
                )}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Idea Validation.Prototyping`)}
              </Typography>
            </li>
          </ul>
        </Paper>

        <Paper sx={{ p: { xs: "2rem", md: "4rem" }, mb: "2rem" }}>
          <Grid container spacing={2} alignItems="center" mb={4}>
            <Grid item md={2}>
              <IconPaint size="120" color="#407BFF" />
            </Grid>
            <Grid item md={10}>
              <Typography variant="h3" fontWeight={900} mb={1}>
                {t(`Entrepreneurship.body.Innovation.title`)}
              </Typography>
              <Typography variant="subtitle2">
                {t(`Entrepreneurship.body.Innovation.subtitle`)}
              </Typography>
            </Grid>
          </Grid>
          <ul>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Innovation.Canvas`)}
              </Typography>
            </li>

            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Innovation.Revenue`)}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Innovation.Scalable`)}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Innovation.Operational`)}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Innovation.Global`)}
              </Typography>
            </li>
          </ul>
        </Paper>

        <Paper sx={{ p: { xs: "2rem", md: "4rem" }, mb: "2rem" }}>
          <Grid container spacing={2} alignItems="center" mb={4}>
            <Grid item md={2}>
              <IconCoin size="120" color="#407BFF" />
            </Grid>
            <Grid item md={10}>
              <Typography variant="h3" fontWeight={900} mb={1}>
                {t(`Entrepreneurship.body.Funding.title`)}
              </Typography>
              <Typography variant="subtitle2">
                {t(`Entrepreneurship.body.Funding.subtitle`)}
              </Typography>
            </Grid>
          </Grid>
          <ul>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Funding.Bootstrapping`)}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Funding.Angel`)}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="textSecondary" mb={2}>
                {t(`Entrepreneurship.body.Funding.Venture`)}
              </Typography>
            </li>
          </ul>
        </Paper>
      </Box>

      <Paper
        sx={{
          padding: "2rem",
          marginY: "5rem",
        }}
      >
        <Box padding={{ md: "2rem", xs: "1rem" }}>
          <Typography variant="h2">
            {t(`Business Services.body.cta.title`)}
          </Typography>

          <Typography variant="subtitle2" py={3} pb={5} color="textSecondary">
            {t(`Business Services.body.cta.content`)}
          </Typography>
          <Link href="https://wa.me/+971508838637" target="_blank">
            <StyledButton
              variant="contained"
              endIcon={<IconBrandWhatsapp width={18} />}
            >
              {t(`Business Services.body.cta.button`)}
            </StyledButton>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default StartupServices;
