import { Typography } from "@mui/material";

import React from "react";
import { useTranslation } from "react-i18next";
import CustomAccordion from "../../components/CustomAccordion";
const FAQSoftware = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h2" fontWeight={900} mb={4}>
        {t(`FAQ.software.title`)}
      </Typography>
      <CustomAccordion q={t(`FAQ.software.q1.q`)} a={t(`FAQ.software.q1.a`)} />
      <CustomAccordion q={t(`FAQ.software.q2.q`)} a={t(`FAQ.software.q2.a`)} />
      <CustomAccordion q={t(`FAQ.software.q3.q`)} a={t(`FAQ.software.q3.a`)} />
      <CustomAccordion q={t(`FAQ.software.q4.q`)} a={t(`FAQ.software.q4.a`)} />
      <CustomAccordion q={t(`FAQ.software.q5.q`)} a={t(`FAQ.software.q5.a`)} />
      <CustomAccordion q={t(`FAQ.software.q6.q`)} a={t(`FAQ.software.q6.a`)} />
      <CustomAccordion q={t(`FAQ.software.q7.q`)} a={t(`FAQ.software.q7.a`)} />
      <CustomAccordion q={t(`FAQ.software.q8.q`)} a={t(`FAQ.software.q8.a`)} />
      <CustomAccordion q={t(`FAQ.software.q9.q`)} a={t(`FAQ.software.q9.a`)} />
      <CustomAccordion
        q={t(`FAQ.software.q10.q`)}
        a={t(`FAQ.software.q10.a`)}
      />
      <CustomAccordion
        q={t(`FAQ.software.q11.q`)}
        a={t(`FAQ.software.q11.a`)}
      />
      <CustomAccordion
        q={t(`FAQ.software.q12.q`)}
        a={t(`FAQ.software.q12.a`)}
      />
    </>
  );
};

export default FAQSoftware;
