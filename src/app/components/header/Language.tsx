/* eslint-disable react-hooks/exhaustive-deps */
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
  const dispatch = useDispatch();
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) ||
    Languages[1];
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (customizer.activeDir === "ltr") {
      dispatch(setLanguage("en"));
    } else {
      dispatch(setLanguage("ar"));
    }
  }, []);

  return (
    <>
      <Button
        sx={{ fontWeight: "600" }}
        variant="contained"
        color="primary"
        onClick={() => {
          if (customizer.isLanguage === "en") {
            dispatch(setDir("rtl"));
            // dispatch(setLanguage("ar"));
          } else {
            dispatch(setDir("ltr"));
            // dispatch(setLanguage("en"));
          }
        }}
      >
        {currentLang.value === "ar" ? <>English</> : <>العربية</>}
      </Button>
    </>
  );
};

export default Language;
