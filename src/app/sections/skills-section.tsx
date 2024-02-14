import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Grid, Paper, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import SkillCard from "../components/SkillCard";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ padding: "1rem", background: "none", marginY: "4rem" }}>
      <Box sx={{ padding: "2rem", marginBottom: "2rem" }}>
        <Typography variant="h2" textAlign="center" fontWeight={900} mb={2}>
          {t(`SkillsSection.title`)}
        </Typography>
        <Typography
          textAlign="center"
          color="textSecondary"
          paddingX={{ md: "4rem" }}
        >
          {t(`SkillsSection.subtitle`)}
        </Typography>
      </Box>
      <TabContext value={value}>
        <Paper
          sx={{
            paddingBottom: "0.5rem",
            background: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
          >
            <Tab label={`${t(`SkillsSection.tab1`)}`} value="1" />
            <Tab label={`${t(`SkillsSection.tab2`)}`} value="2" />
            <Tab label={`${t(`SkillsSection.tab3`)}`} value="3" />
          </TabList>
        </Paper>

        <TabPanel value="1" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Entrepreneurship")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Startups")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard
                skill={t("SkillsSection.business.Feasibility Studies")}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard
                skill={t("SkillsSection.business.Business Strategies")}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Business Plans")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.ERP Management")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Market Research")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard
                skill={t("SkillsSection.business.Marketing Strategies")}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Marketing Plans")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Branding")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard
                skill={t("SkillsSection.business.Influencer Marketing")}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Public Relations")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Meta Ads")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.Google Ads")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.business.SEO")} />
            </Grid>
          </Grid>
        </TabPanel>
        {/* Programming Skills */}
        <TabPanel value="2" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.SaaS")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard
                skill={t("SkillsSection.programming.Business Websites")}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.Portfolios")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.E Commerce")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.Landing Pages")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.TypeScript")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.Next JS")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.React JS")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.Node JS")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.MongoDB")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.MySQL")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.Prisma")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.Git")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.GitHub")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.GitLab")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.Docker")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.programming.WordPress")} />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="3" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.ai.AI SaaS")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.ai.AI Integration")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.ai.ChatGPT Apps")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.ai.AI Websites")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.ai.AI Chatbot")} />
            </Grid>
            <Grid item md={3} xs={12}>
              <SkillCard skill={t("SkillsSection.ai.AI Agent")} />
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Paper>
  );
};

export default SkillsSection;
