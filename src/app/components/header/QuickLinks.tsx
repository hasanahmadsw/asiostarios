import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const QuickLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Stack spacing={2} mt={2}>
        <Link href="/bio" className="hover-text-primary">
          <Typography
            variant="h6"
            color="textPrimary"
            className="text-hover"
            fontWeight={600}
          >
            {t(`QuickLinks.card`)}
          </Typography>
        </Link>
        <Link
          href="https://www.maproduction.ae"
          target="_black"
          className="hover-text-primary"
        >
          <Typography
            variant="h6"
            color="textPrimary"
            className="text-hover"
            fontWeight={600}
          >
            {t(`QuickLinks.map`)}
          </Typography>
        </Link>
        <Link href="/sitemap.xml" className="hover-text-primary">
          <Typography
            variant="h6"
            color="textPrimary"
            className="text-hover"
            fontWeight={600}
          >
            {t(`QuickLinks.sitemap`)}
          </Typography>
        </Link>
        <Link href="/mission" className="hover-text-primary">
          <Typography
            variant="h6"
            color="textPrimary"
            className="text-hover"
            fontWeight={600}
          >
            {t(`QuickLinks.mission`)}
          </Typography>
        </Link>
      </Stack>
    </>
  );
};

export default QuickLinks;
