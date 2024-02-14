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
  IconChessQueen,
  IconReportMoney,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));
const BusinessServices = () => {
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
            {t(`Business Services.header.title`)}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" mb={2}>
            {t(`Business Services.header.content`)}
          </Typography>
          <Link href="https://wa.me/+971508838637" target="_blank">
            <StyledButton
              variant="contained"
              endIcon={<IconBrandWhatsapp width={18} />}
              sx={{ my: "1rem" }}
            >
              {t(`Business Services.header.button`)}
            </StyledButton>
          </Link>
        </Grid>
        <Grid item md={6} sm={12} textAlign="center">
          {smUp ? (
            <Image
              src={`/consulting.svg`}
              width={660}
              height={480}
              alt="business-development"
            />
          ) : (
            <Image
              src={`/consulting.svg`}
              width={300}
              height={200}
              alt="business-development"
            />
          )}
        </Grid>
      </Grid>

      <Box mt="5rem">
        <Typography variant="h2" fontWeight={900} mb={6}>
          {t(`Business Services.body.title`)}
        </Typography>

        <Paper sx={{ p: { xs: "2rem", md: "4rem" }, mb: "2rem" }}>
          <Grid container spacing={2} alignItems="center" mb={4}>
            <Grid item md={2} sm={12}>
              <IconReportMoney size="120" color="#407BFF" />
            </Grid>
            <Grid item md={10} sm={12}>
              <Typography variant="h3" fontWeight={900} mb={1}>
                {t(`Business Services.body.Feasibility Studies.title`)}
              </Typography>
              <Typography variant="subtitle2">
                {t(`Business Services.body.Feasibility Studies.subtitle`)}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h4">
            {t(`Business Services.body.Feasibility Studies.breif`)}
          </Typography>
          <ul>
            <li>
              <Typography variant="subtitle2" color="textSecondary" mb={2}>
                {t(
                  `Business Services.body.Feasibility Studies.Market Analysis`
                )}
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle2" color="textSecondary" mb={2}>
                {t(
                  `Business Services.body.Feasibility Studies.Financial Projections`
                )}
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle2" color="textSecondary" mb={2}>
                {t(
                  `Business Services.body.Feasibility Studies.Risk Assessment`
                )}
              </Typography>
            </li>
          </ul>
        </Paper>

        {/* Services 2 */}

        <Paper sx={{ p: { xs: "2rem", md: "4rem" }, mb: "2rem" }}>
          <Grid container spacing={2} alignItems="center" mb={4}>
            <Grid item md={2} sm={12}>
              <IconChessQueen size="120" color="#407BFF" />
            </Grid>
            <Grid item md={10} sm={12}>
              <Typography variant="h3" fontWeight={900} mb={1}>
                {t(`Business Services.body.Business Strategies.title`)}
              </Typography>
              <Typography variant="subtitle2">
                {t(`Business Services.body.Business Strategies.subtitle`)}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h4">
            {t(`Business Services.body.Business Strategies.breif`)}
          </Typography>
          <ul>
            <li>
              <Typography variant="subtitle2" color="textSecondary" mb={2}>
                {t(
                  `Business Services.body.Business Strategies.Competitive Analysis`
                )}
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle2" color="textSecondary" mb={2}>
                {t(`Business Services.body.Business Strategies.SWOT Analysis`)}
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle2" color="textSecondary" mb={2}>
                {t(
                  `Business Services.body.Business Strategies.Strategic Planning`
                )}
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

export default BusinessServices;
