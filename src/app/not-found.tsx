"use client";
import { Box, Container, Typography, Button, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const StyledButton = styled(Button)(({ theme }) => ({
  padding: "13px 48px",
  fontSize: "16px",
}));
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Image
          src={"/errorimg.svg"}
          alt="404"
          width={500}
          height={500}
          style={{ width: "100%", maxWidth: "500px", maxHeight: "500px" }}
        />
        <Typography align="center" variant="h1" mb={4}>
          {t(`404.heading`)}
        </Typography>
        <Typography align="center" variant="h4" mb={4}>
          {t(`404.body`)}
        </Typography>

        <Link href="/">
          <StyledButton variant="contained">{t(`404.button`)}</StyledButton>
        </Link>
      </Container>
    </Box>
  );
};

NotFound.layout = "Blank";
export default NotFound;
