"use client";
import {
  Box,
  Container,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { IconQrcode } from "@tabler/icons-react";
import { QR } from "../../components/qr";
import Social from "../../components/social";
import CustomLink from "../../components/CustomLink";
import Link from "next/link";
import SkillsSection from "../../sections/skills-section";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.default",
  textAlign: "center",
  p: 4,
};

export default function Bio() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="lg" sx={{ marginY: "2rem" }}>
        <Paper variant="outlined" sx={{ padding: "2rem", textAlign: "center" }}>
          <Box marginBottom="5rem">
            <IconButton
              onClick={handleOpen}
              color="primary"
              size="large"
              sx={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                float: "left",
              }}
            >
              <IconQrcode />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
              <Paper sx={style} variant="outlined">
                <QR url={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
              </Paper>
            </Modal>
          </Box>
          <Box>
            <img
              src="/hasan.jpg"
              alt="hasan-ahmad"
              width="180px"
              height="180px"
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid #ddd",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            />
          </Box>
          <Box>
            <Typography variant="h2" fontWeight="700" my={2}>
              {t(`bio.name`)}
            </Typography>

            <Typography variant="h5" color="textSecondary" my={2}>
              {t(`bio.positions`)}
            </Typography>

            <Link href="mailto:hasan.ahmad@maproduction.ae" target="_blank">
              <Typography variant="h6" color="textSecondary" my={2}>
                hasan.ahmad@maproduction.ae
              </Typography>
            </Link>
          </Box>
          <Box my={4} display="flex" justifyContent="center">
            <Social />
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{ padding: "2rem", my: "2rem", textAlign: "center" }}
        >
          {/* <Typography>About Me</Typography> */}
          <Typography variant="subtitle2" mb={1}>
            {t(`AboutSection.title`)}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {t(`AboutSection.content`)}
          </Typography>
          <CustomLink
            variant="body1"
            sx={{ fontWeight: "800", mt: "1rem" }}
            link="/"
          >
            {t(`AboutSection.button`)}
          </CustomLink>
        </Paper>
        <Paper variant="outlined" sx={{ paddingX: "2rem" }}>
          <SkillsSection />
        </Paper>
      </Container>
    </>
  );
}
