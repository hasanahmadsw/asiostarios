import { CardContent, Typography, Grid, CardMedia } from "@mui/material";
import BlankCard from "./BlankCard";
import CustomLink from "./CustomLink";

const ServiceCard = ({ service }: any) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} key={service.title}>
        <BlankCard>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={4}>
                <CardMedia
                  component="img"
                  image={service.avatar}
                  sx={{ height: 180, borderRadius: 2 }}
                />
              </Grid>
              <Grid item md={8}>
                <Typography variant="h3" pb={2}>
                  {service.title}
                </Typography>
                <Typography variant="body1" pb={2}>
                  {service.breif}
                </Typography>

                <CustomLink
                  link={service.link}
                  variant="h6"
                  sx={{ fontWeight: "700" }}
                >
                  Learn More 🚀
                </CustomLink>
              </Grid>
            </Grid>
          </CardContent>
        </BlankCard>
      </Grid>
    </>
  );
};

export default ServiceCard;
