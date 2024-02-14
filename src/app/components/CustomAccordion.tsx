import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
const StyledAccordion = styled(Accordion)(() => ({
  background: "transparent",
}));

interface Props {
  q: string | any;
  a: string | any;
}

const CustomAccordion = ({ q, a }: Props) => {
  return (
    <StyledAccordion>
      <AccordionSummary expandIcon={<IconChevronDown />}>
        <Typography variant="h5" px={2} py={1}>
          {q}
        </Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography variant="body1" pt={1} px={2} color="textSecondary">
          {a}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default CustomAccordion;
