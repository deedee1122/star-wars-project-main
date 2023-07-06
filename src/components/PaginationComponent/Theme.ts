import { createTheme } from "@mui/material/styles";
import { TailwindThemeType } from "../../types/types";
import { ThemeTypesEnum } from "../../types/enum";

const darkTheme = createTheme({
  palette: {
    mode: ThemeTypesEnum.DARK,
  },
});
const lightTheme = createTheme({
  palette: {
    mode: ThemeTypesEnum.LIGHT,
  },
});

export const MuiTheme = (theme: TailwindThemeType) => {
  return theme == ThemeTypesEnum.DARK ? darkTheme : lightTheme;
};
