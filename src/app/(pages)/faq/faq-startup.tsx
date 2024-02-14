import { Typography } from "@mui/material";

import React from "react";
import { useTranslation } from "react-i18next";
import CustomAccordion from "../../components/CustomAccordion";

const FAQStartups = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h2" fontWeight={900} mb={4}>
        {t(`FAQ.startups.title`)}
      </Typography>
      <CustomAccordion q={t(`FAQ.startups.q1.q`)} a={t(`FAQ.startups.q1.a`)} />
      <CustomAccordion q={t(`FAQ.startups.q2.q`)} a={t(`FAQ.startups.q2.a`)} />
      <CustomAccordion q={t(`FAQ.startups.q3.q`)} a={t(`FAQ.startups.q3.a`)} />
      <CustomAccordion q={t(`FAQ.startups.q4.q`)} a={t(`FAQ.startups.q4.a`)} />
      <CustomAccordion q={t(`FAQ.startups.q5.q`)} a={t(`FAQ.startups.q5.a`)} />
      <CustomAccordion q={t(`FAQ.startups.q6.q`)} a={t(`FAQ.startups.q6.a`)} />
    </>
  );
};

export default FAQStartups;
