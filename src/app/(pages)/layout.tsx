"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Box, Container, styled } from "@mui/material";
import Mode from "../components/customizer/Mode";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  // paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainWrapper>
      <PageWrapper className="page-wrapper">
        <Header />
        <Container>
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
        <Mode />
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
}
