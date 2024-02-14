import { CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BlankCard from "../components/BlankCard";
import { useTranslation } from "react-i18next";
import CustomLink from "../components/CustomLink";

const avatars = {
  business: "/goals-bro.svg",
  startups: "/progress-bro.svg",
  web: "/typing-bro.svg",
};

const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ marginBottom: "5rem", padding: "2rem", boxShadow: "0" }}>
      <Grid container spacing={6} alignItems="center" padding="2rem">
        <Grid item md={6} sm={12}>
          <Typography variant="h1" mb={2}>
            {t(`ServicesSection.title`)}
          </Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="subtitle1" mb={2} color="textSecondary">
            {t(`ServicesSection.subtitle`)}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <BlankCard>
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
                  <Typography variant="h3" pb={2}>
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
                    {t(`ServicesSection.web.link`)}
                  </CustomLink>
                </Grid>
              </Grid>
            </CardContent>
          </BlankCard>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <BlankCard>
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
          </BlankCard>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <BlankCard>
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
                    {t(`ServicesSection.web.link`)}
                  </CustomLink>
                </Grid>
              </Grid>
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ServicesSection;
