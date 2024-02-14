import { Box, Button, Paper, Typography, styled } from "@mui/material";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <Paper
      sx={{
        padding: "2rem",
        paddingBottom: "1rem",
        marginY: "5rem",
        textAlign: "center",
      }}
    >
      <Box padding="2rem">
        <Typography variant="h2" gap={1}>
          {t(`CTASection.title`)}
        </Typography>

        <Typography variant="subtitle2" pt={3} pb={3} color="textSecondary">
          {t(`CTASection.subtitle`)}
        </Typography>
        <Link href="/contact">
          <StyledButton
            variant="contained"
            endIcon={<IconBrandWhatsapp width={18} />}
          >
            {t(`CTASection.button`)}
          </StyledButton>
        </Link>
      </Box>
    </Paper>
  );
};

export default CTASection;
