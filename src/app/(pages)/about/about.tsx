"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutSection from "../../sections/about-section";
import SkillsSection from "../../sections/skills-section";
import FAQSection from "../../sections/faq-section";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" marginY="5rem" paddingY="2rem">
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
          {t(`About.heading1`)}
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
          {t(`About.heading2`)}
        </Typography>
      </Box>
      <Paper sx={{ padding: "2rem", textAlign: "center", marginY: "3rem" }}>
        <Typography variant="subtitle1" color="textSecondary">
          {t(`About.breif`)}
        </Typography>
      </Paper>
      <AboutSection />
      <Paper sx={{ padding: "4rem", marginBottom: "3rem" }}>
        <Typography variant="h2" mb={4}>
          {t(`About.experience1.title`)}
        </Typography>
        <Typography variant="subtitle1" mb={4} color="textSecondary">
          {t(`About.experience1.content.l1`)}
        </Typography>
        <Typography variant="subtitle1" mb={4} color="textSecondary">
          {t(`About.experience1.content.l2`)}
        </Typography>
        <Typography variant="subtitle1" mb={4} color="textSecondary">
          {t(`About.experience1.content.l3`)}
        </Typography>
      </Paper>
      <Paper sx={{ padding: "4rem" }}>
        <Typography variant="h2" mb={4}>
          {t(`About.experience2.title`)}
        </Typography>
        <Typography variant="subtitle1" mb={4} color="textSecondary">
          {t(`About.experience2.content.l1`)}
        </Typography>
        <Typography variant="subtitle1" mb={4} color="textSecondary">
          {t(`About.experience2.content.l2`)}
        </Typography>
        <Typography variant="h3" mb={4}>
          {t(`About.experience2.content.l3`)}
        </Typography>
        <Typography variant="h3" mb={4} color="textSecondary">
          {t(`About.experience2.content.l4`)}
        </Typography>
        <Typography variant="h3" mb={4} color="textSecondary">
          {t(`About.experience2.content.l5`)}
        </Typography>
        <Typography variant="h3" mb={4} color="textSecondary">
          {t(`About.experience2.content.l6`)}
        </Typography>
      </Paper>
      <SkillsSection />
      <FAQSection />
    </Container>
  );
};

export default AboutPage;
