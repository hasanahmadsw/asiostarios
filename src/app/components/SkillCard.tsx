import { Paper, Typography } from "@mui/material";
import React from "react";

interface Props {
  skill: any;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <Paper sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h5" fontWeight="600">
        {skill}
      </Typography>
    </Paper>
  );
};

export default SkillCard;
