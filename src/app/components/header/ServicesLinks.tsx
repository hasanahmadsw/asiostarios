import { Grid } from "@mui/material";
import React from "react";
import ServiceLink from "./ServiceLink";
import { useTranslation } from "react-i18next";

const ServicesLinks = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={3} mb={4}>
      <Grid item lg={6}>
        <ServiceLink
          href="/services/web-development"
          avatar="/website.svg"
          title={t(`ServicesLinks.web.title`)}
          subtitle={t(`ServicesLinks.web.subtitle`)}
        />
      </Grid>
      <Grid item lg={6}>
        <ServiceLink
          href="/services/business"
          avatar="/business.svg"
          title={t(`ServicesLinks.business.title`)}
          subtitle={t(`ServicesLinks.business.subtitle`)}
        />
      </Grid>
      <Grid item lg={6}>
        <ServiceLink
          href="/services/entrepreneurship"
          avatar="/startup.svg"
          title={t(`ServicesLinks.startups.title`)}
          subtitle={t(`ServicesLinks.startups.subtitle`)}
        />
      </Grid>
      <Grid item lg={6}>
        <ServiceLink
          href="/services/marketing"
          avatar="/marketing.svg"
          title={t(`ServicesLinks.marketing.title`)}
          subtitle={t(`ServicesLinks.marketing.subtitle`)}
        />
      </Grid>
      <Grid item lg={6}>
        <ServiceLink
          href="/services/ai"
          avatar="/ai.svg"
          title={t(`ServicesLinks.ai.title`)}
          subtitle={t(`ServicesLinks.ai.subtitle`)}
        />
      </Grid>
    </Grid>
  );
};

export default ServicesLinks;
