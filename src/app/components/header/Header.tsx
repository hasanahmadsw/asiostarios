import { useSelector, useDispatch } from "@/store/hooks";

import Language from "./Language";
import { AppState } from "@/store/store";
import Navigation from "./Navigation";
import MobileRightSidebar from "./MobileRightSidebar";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";
import CustomLink from "../CustomLink";

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    // background: theme.palette.background.paper,
    backgroundColor: "transparent",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    minHeight: customizer.TopbarHeight,
    [theme.breakpoints.up("lg")]: {
      minHeight: customizer.TopbarHeight,
      // minHeight: "80px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" elevation={9}>
      <Container maxWidth="lg">
        <ToolbarStyled>
          <CustomLink variant="h4" sx={{ fontWeight: "800" }} link="/">
            Hasan Ahmad
          </CustomLink>
          <Box flexGrow={1} />
          {lgUp ? (
            <>
              <Navigation />
            </>
          ) : null}
          <Box flexGrow={1} />
          <Stack spacing={1} direction="row" alignItems="center">
            <Language />

            {lgDown ? <MobileRightSidebar /> : null}
          </Stack>
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};

export default Header;
