import { IconButton, Stack } from "@mui/material";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const links = {
  instagram: "https://instagram.com/hhbinali",
  facebook: "https://facebook.com/hasanahmadsw",
  linkenin: "https://linkedin.com/in/hasanaliahmad/",
  whatsapp: "https://wa.me/+971508838637",
  mail: "mailto:hasanahmadsw@gmail.com",
};

const Social = () => {
  return (
    <Stack spacing={1} direction="row">
      <Link href={links.instagram} target="_blank">
        <IconButton color="primary">
          <IconBrandInstagram size="44" stroke="1.2" />
        </IconButton>
      </Link>
      <Link href={links.facebook} target="_blank">
        <IconButton color="primary">
          <IconBrandFacebook size="44" stroke="1.2" />
        </IconButton>
      </Link>
      <Link href={links.linkenin} target="_blank">
        <IconButton color="primary">
          <IconBrandLinkedin size="44" stroke="1.2" />
        </IconButton>
      </Link>
      <Link href={links.whatsapp} target="_blank">
        <IconButton color="primary">
          <IconBrandWhatsapp size="44" stroke="1.2" />
        </IconButton>
      </Link>
      <Link href={links.mail} target="_blank">
        <IconButton color="primary">
          <IconMail size="44" stroke="1.2" />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default Social;
