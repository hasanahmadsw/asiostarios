import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { IconRocket } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
  fontWeight: "700",
}));

const BannerSection = () => {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const { t } = useTranslation();
  return (
    <Box mb={15} mt={{ md: "10rem", xs: "4rem" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Box mt={lgDown ? 8 : 0}>
              <Typography variant="h5" display={"flex"} mb={2}>
                <Typography color={"darkcyan"}>
                  <IconRocket size={"30"} />
                </Typography>
                {t(`Home.banner.tag`)}
              </Typography>

              <Typography variant="h1" fontWeight={900}>
                {t(`Home.banner.title`)}
              </Typography>
              <Box pt={4} pb={3}>
                <Typography variant="h3" fontWeight={400}>
                  {t(`Home.banner.subtitle`)}
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={3}>
                <Link href="/about">
                  <StyledButton variant="contained">
                    {t(`Home.banner.button1`)}
                  </StyledButton>
                </Link>
                <Link href="/services">
                  <StyledButton variant="outlined">
                    {t(`Home.banner.button2`)}
                  </StyledButton>
                </Link>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} textAlign="right">
            {/* <Image src="/rocket.svg" alt="1" width={400} height={400} /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BannerSection;
