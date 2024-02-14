import { FC } from "react";
import Fab from "@mui/material/Fab";
import { useSelector, useDispatch } from "@/store/hooks";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";
import { setDarkMode } from "@/store/customizer/CustomizerSlice";
import { AppState } from "@/store/store";

const Mode: FC = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();
  return (
    <div>
      <Fab
        color="primary"
        aria-label="settings"
        sx={{ position: "fixed", right: "25px", bottom: "15px" }}
        onClick={
          customizer.activeMode === "dark"
            ? () => dispatch(setDarkMode("light"))
            : () => dispatch(setDarkMode("dark"))
        }
      >
        {customizer.activeMode === "dark" ? (
          <IconSunFilled stroke={1.5} />
        ) : (
          <IconMoonFilled stroke={1.5} />
        )}
      </Fab>
    </div>
  );
};

export default Mode;
