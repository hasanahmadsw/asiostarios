"use client";
import { Box, Button, Container, Typography, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import CustomLink from "../../components/CustomLink";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Social from "../../components/social";
import { useTranslation } from "react-i18next";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Box mt="5rem" paddingY="2rem">
        <Typography variant="h1" fontWeight={900}>
          {t(`Contact.heading1.title`)}
        </Typography>
        <Typography variant="subtitle1" my={2} color="textSecondary">
          {t(`Contact.heading1.subtitle`)}
        </Typography>
        <Box my={4}>
          <Typography variant="h4" my={1} color="textSecondary">
            {t(`Contact.heading1.businessemail`)}
          </Typography>
          <CustomLink link="mailto:hasan.ahmad@maproduction.ae">
            hasan.ahmad@maproduction.ae
          </CustomLink>
        </Box>
        <Box my={4}>
          <Typography variant="h4" my={1} color="textSecondary">
            {t(`Contact.heading1.personalemail`)}
          </Typography>
          <CustomLink link="mailto:hasanahmadsw@gmail.com">
            hasanahmadsw@gmail.com
          </CustomLink>
        </Box>
        <Typography></Typography>
      </Box>
      <Box>
        <Typography variant="h3">{t(`Contact.heading2.title`)}</Typography>
        <Typography variant="subtitle2" my={2} mb={3} color="textSecondary">
          {t(`Contact.heading2.subtitle`)}
        </Typography>

        <Link href="https://wa.me/+971508838637" target="_blank">
          <StyledButton
            variant="contained"
            endIcon={<IconBrandWhatsapp width={18} />}
          >
            {t(`Contact.heading2.button`)}
          </StyledButton>
        </Link>
      </Box>
      <Box my="3rem">
        <Typography variant="h3" mb={3}>
          {t(`Contact.heading3.title`)}
        </Typography>

        <Social />
      </Box>
    </Container>
  );
};

export default Contact;
