import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "@/store/hooks";
import { setDir, setLanguage } from "@/store/customizer/CustomizerSlice";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { AppState } from "@/store/store";

const Languages = [
  {
    name: "English",
    value: "en",
  },

  {
    name: "العربية",
    value: "ar",
  },
];

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) ||
    Languages[1];
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button
        sx={{ fontWeight: "600" }}
        variant="contained"
        color="primary"
        onClick={() => {
          if (customizer.activeDir === "ltr") {
            dispatch(setLanguage("ar"));
            dispatch(setDir("rtl"));
          } else {
            dispatch(setLanguage("en"));
            dispatch(setDir("ltr"));
          }
        }}
      >
        {currentLang.value === "ar" ? <>English</> : <>العربية</>}
      </Button>
    </>
  );
};

export default Language;
