import { Typography } from "@mui/material";

import React from "react";
import { useTranslation } from "react-i18next";
import CustomAccordion from "../../components/CustomAccordion";

const FAQBusiness = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h2" fontWeight={900} mb={4}>
        {t(`FAQ.business.title`)}
      </Typography>
      <CustomAccordion q={t(`FAQ.business.q1.q`)} a={t(`FAQ.business.q1.a`)} />
      <CustomAccordion q={t(`FAQ.business.q2.q`)} a={t(`FAQ.business.q2.a`)} />
      <CustomAccordion q={t(`FAQ.business.q3.q`)} a={t(`FAQ.business.q3.a`)} />
      <CustomAccordion q={t(`FAQ.business.q4.q`)} a={t(`FAQ.business.q4.a`)} />
      <CustomAccordion q={t(`FAQ.business.q5.q`)} a={t(`FAQ.business.q5.a`)} />
      <CustomAccordion q={t(`FAQ.business.q6.q`)} a={t(`FAQ.business.q6.a`)} />
      <CustomAccordion q={t(`FAQ.business.q7.q`)} a={t(`FAQ.business.q7.a`)} />
      <CustomAccordion q={t(`FAQ.business.q8.q`)} a={t(`FAQ.business.q8.a`)} />
    </>
  );
};

export default FAQBusiness;
