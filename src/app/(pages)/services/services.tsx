"use client";
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import CustomLink from "../../components/CustomLink";
import CTASection from "../../sections/cta-section";
const avatars = {
  business: "/goals-bro.svg",
  startups: "/progress-bro.svg",
  web: "/typing-bro.svg",
};

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Box marginY="4rem" textAlign="center">
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
          {t(`Services.heading1`)}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              md: "54px",
            },
            lineHeight: {
              md: "60px",
            },
          }}
          variant="h1"
          mt={2}
          fontWeight={900}
          color="secondary"
        >
          {t(`Services.heading2`)}
        </Typography>
      </Box>
      <Paper sx={{ padding: "2.5rem", textAlign: "center", marginY: "2rem" }}>
        <Typography variant="subtitle1" color="textSecondary">
          {t(`Services.breif`)}
        </Typography>
      </Paper>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Paper sx={{ padding: "2rem" }}>
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item md={4}>
                  <CardMedia
                    component="img"
                    image={avatars.business}
                    sx={{ height: 180, borderRadius: 2, objectFit: "contain" }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography variant="h4" pb={2}>
                    {t(`ServicesSection.business.title`)}
                  </Typography>
                  <Typography variant="body1" pb={2}>
                    {t(`ServicesSection.business.brief`)}
                  </Typography>

                  <CustomLink
                    link="/services/business"
                    variant="h6"
                    sx={{ fontWeight: "700" }}
                  >
                    {t(`ServicesSection.business.link`)}
                  </CustomLink>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper sx={{ padding: "2rem" }}>
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item md={4}>
                  <CardMedia
                    component="img"
                    image={avatars.web}
                    sx={{ height: 200, borderRadius: 2, objectFit: "contain" }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography variant="h3" pb={2}>
                    {t(`ServicesSection.web.title`)}
                  </Typography>
                  <Typography variant="body1" pb={2}>
                    {t(`ServicesSection.web.brief`)}
                  </Typography>

                  <CustomLink
                    link="/services/web-development"
                    variant="h6"
                    sx={{ fontWeight: "700" }}
                  >
                    {t(`ServicesSection.web.link`)}
                  </CustomLink>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Paper sx={{ padding: "2rem" }}>
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item md={4}>
                  <CardMedia
                    component="img"
                    image={avatars.startups}
                    sx={{ height: 200, borderRadius: 2, objectFit: "contain" }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography variant="h3" pb={2}>
                    {t(`ServicesSection.startups.title`)}
                  </Typography>
                  <Typography variant="body1" pb={2}>
                    {t(`ServicesSection.startups.brief`)}
                  </Typography>

                  <CustomLink
                    link="/services/entrepreneurship"
                    variant="h6"
                    sx={{ fontWeight: "700" }}
                  >
                    {t(`ServicesSection.startups.link`)}
                  </CustomLink>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
      <CTASection />
    </Container>
  );
};

export default ServicesPage;
