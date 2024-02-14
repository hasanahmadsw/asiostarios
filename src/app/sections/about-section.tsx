import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import me from "public/hasan-ahmad.png";
import { IconExternalLink } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));

const AboutSection = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const { t } = useTranslation();
  return (
    <Paper sx={{ marginY: "3rem", padding: "1rem" }} elevation={0}>
      <Grid container spacing={3} alignItems="center">
        <Grid item lg={4} md={6} xs={12} textAlign="center">
          <Box p={{ md: "3rem" }} textAlign="center">
            {lgUp ? (
              <Image src={me} height={500} alt="banner" priority />
            ) : (
              <Image src={me} height={400} alt="banner" priority />
            )}
          </Box>
        </Grid>

        <Grid item lg={8} md={6} sm={12}>
          <Box padding="2rem">
            <Typography variant="h5" mb={2} color="secondary" fontWeight={700}>
              {t(`AboutSection.tag`)}
            </Typography>

            <Typography variant="h2" fontWeight={600}>
              {t(`AboutSection.title`)}
            </Typography>

            <Box pt={4} pb={4}>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                color="textSecondary"
              >
                {t(`AboutSection.content`)}
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }}>
              <Link href="/about">
                <StyledButton
                  variant="contained"
                  endIcon={<IconExternalLink width={18} />}
                >
                  {t(`AboutSection.button`)}
                </StyledButton>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutSection;
