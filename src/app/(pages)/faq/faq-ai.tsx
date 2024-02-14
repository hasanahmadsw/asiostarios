import { Typography } from "@mui/material";

import React from "react";
import { useTranslation } from "react-i18next";
import CustomAccordion from "../../components/CustomAccordion";
const FAQAi = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h2" fontWeight={900} mb={4}>
        {t(`FAQ.ai.title`)}
      </Typography>
      <CustomAccordion q={t(`FAQ.ai.q1.q`)} a={t(`FAQ.ai.q1.a`)} />
      <CustomAccordion q={t(`FAQ.ai.q2.q`)} a={t(`FAQ.software.q2.a`)} />
      <CustomAccordion q={t(`FAQ.ai.q3.q`)} a={t(`FAQ.ai.q3.a`)} />
      <CustomAccordion q={t(`FAQ.ai.q4.q`)} a={t(`FAQ.ai.q4.a`)} />
    </>
  );
};

export default FAQAi;
