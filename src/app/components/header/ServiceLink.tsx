import { Avatar, Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  avatar: string;
  title: string;
  subtitle: string;
}

const ServiceLink = ({ href, avatar, title, subtitle }: Props) => {
  return (
    <Link href={href} className="hover-text-primary">
      <Stack direction="row" spacing={2}>
        <Box
          minWidth="45px"
          height="45px"
          bgcolor="grey.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            src={avatar}
            alt={title}
            sx={{
              width: 24,
              height: 24,
              borderRadius: 0,
            }}
          />
        </Box>
        <Box>
          <Typography
            variant="body1"
            fontWeight={600}
            color="textPrimary"
            noWrap
            className="text-hover"
            sx={{
              width: "240px",
            }}
          >
            {title}
          </Typography>
          <Typography
            color="textSecondary"
            variant="subtitle2"
            fontSize="12px"
            sx={{
              width: "240px",
            }}
            noWrap
          >
            {subtitle}
          </Typography>
        </Box>
      </Stack>
    </Link>
  );
};

export default ServiceLink;
