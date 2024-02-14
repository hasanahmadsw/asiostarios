import { Card, Typography, styled } from "@mui/material";

import Link from "next/link";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[] | string | any;
  link: string;
  sx?: any;
  variant?: any;
};

const CustomLink = ({ children, variant, className, link, sx }: Props) => {
  const CustomTypography = styled(Typography)(({ theme }) => ({
    cursor: "pointer",
    display: "inline-block",
    color: theme.palette.text.primary,
    paddingBottom: "1px",
    ":after": {
      content: "close-quote",
      display: "block",
      width: "0",
      height: "2px",
      backgroundColor: theme.palette.text.primary,
      transition: "linear 0.2s",
    },
    ":hover": {
      ":after": {
        width: "100%",
      },
    },
  }));

  return (
    <Link href={link}>
      <CustomTypography variant={variant} className={className} sx={sx}>
        {children}
      </CustomTypography>
    </Link>
  );
};

export default CustomLink;
