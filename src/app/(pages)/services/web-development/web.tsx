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
  IconAppWindow,
  IconBrandHtml5,
  IconBrandWhatsapp,
  IconBrandWordpress,
  IconBuildingStore,
  IconLayoutDistributeVertical,
  IconServer,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import img from "public/coding.svg";
import tools from "public/all_tools.svg";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));
const WebServices = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
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
            {t(`WebDev.header.title`)}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" mb={2}>
            {t(`WebDev.header.content`)}
          </Typography>
          <Link href="https://wa.me/+971508838637" target="_blank">
            <StyledButton
              variant="contained"
              endIcon={<IconBrandWhatsapp />}
              sx={{ my: "1rem" }}
            >
              {t(`WebDev.header.button`)}
            </StyledButton>
          </Link>
        </Grid>
        <Grid item md={6} xs={12} textAlign={{ md: "right", xs: "center" }}>
          {smUp ? (
            <Image
              src={`/coding.svg`}
              width={420}
              height={300}
              alt="web-development"
            />
          ) : (
            <Image
              src={`/coding.svg`}
              width={280}
              height={200}
              alt="web-development"
            />
          )}
        </Grid>
      </Grid>

      <Box padding={{ md: "3rem", sm: "1rem" }} mt="5rem">
        <Typography variant="h2" fontWeight={900} mb={6}>
          {t(`WebDev.body.title`)}
        </Typography>

        <Paper sx={{ p: "3rem", mb: "2rem" }}>
          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <IconBrandHtml5 size="60" color="#407BFF" />
            <Typography variant="h3" fontWeight={900}>
              {t(`WebDev.body.Custom Web.title`)}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            {t(`WebDev.body.Custom Web.content`)}
          </Typography>
        </Paper>

        <Paper sx={{ p: "3rem", mb: "2rem" }}>
          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <IconLayoutDistributeVertical size="60" color="#407BFF" />
            <Typography variant="h3" fontWeight={900}>
              {t(`WebDev.body.Responsive.title`)}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            {t(`WebDev.body.Responsive.content`)}
          </Typography>
        </Paper>

        <Paper sx={{ p: "3rem", mb: "2rem" }}>
          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <IconAppWindow size="60" color="#407BFF" />
            <Typography variant="h3" fontWeight={900}>
              {t(`WebDev.body.Frontend.title`)}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            {t(`WebDev.body.Frontend.content`)}
          </Typography>
        </Paper>

        <Paper sx={{ p: "3rem", mb: "2rem" }}>
          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <IconServer size="60" color="#407BFF" />
            <Typography variant="h3" fontWeight={900}>
              {t(`WebDev.body.Backend.title`)}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            {t(`WebDev.body.Backend.content`)}
          </Typography>
        </Paper>

        <Paper sx={{ p: "3rem", mb: "2rem" }}>
          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <IconBuildingStore size="60" color="#407BFF" />
            <Typography variant="h3" fontWeight={900}>
              {t(`WebDev.body.Ecommerce.title`)}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            {t(`WebDev.body.Ecommerce.content`)}
          </Typography>
        </Paper>

        <Paper sx={{ p: "3rem", mb: "2rem" }}>
          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <IconBrandWordpress size="60" color="#407BFF" />
            <Typography variant="h3" fontWeight={900}>
              {t(`WebDev.body.Wordpress.title`)}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            {t(`WebDev.body.Wordpress.content`)}
          </Typography>
        </Paper>
      </Box>
      <Paper
        sx={{
          padding: "2rem",
          textAlign: "center",
          marginY: "1rem",
          overflow: "hidden",
        }}
      >
        {mdUp ? (
          <Image src={tools} alt="tools" priority />
        ) : (
          <Image src={tools} width={300} alt="tools" priority />
        )}
      </Paper>
      <Paper
        sx={{
          padding: "2rem",
          paddingBottom: "1rem",
          marginY: "5rem",
          textAlign: "center",
        }}
      >
        <Grid container spacing={3} display="flex" alignItems="center">
          <Grid item>
            <Box padding="2rem">
              <Typography variant="h2">{t(`WebDev.body.cta.title`)}</Typography>

              <Typography variant="subtitle2" py={3} color="textSecondary">
                {t(`WebDev.body.cta.content`)}
              </Typography>
              <Link href="https://wa.me/+971508838637" target="_blank">
                <StyledButton
                  variant="contained"
                  endIcon={<IconBrandWhatsapp width={18} />}
                >
                  {t(`WebDev.body.cta.button`)}
                </StyledButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default WebServices;
