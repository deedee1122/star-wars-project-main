import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { MuiTheme } from "./Theme";

interface iPaginationComponent {
  currentPage?: number;
  count: number | undefined;
  shape?: "rounded" | "circular";
  onChange?: (e: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent: FC<iPaginationComponent> = ({
  currentPage,
  count,
  shape,
  onChange,
}) => {
  const uiTheme = useSelector((state: RootState) => state.system.mode);

  return (
    <ThemeProvider theme={MuiTheme(uiTheme)}>
      <CssBaseline />
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
        count={count}
        shape={shape || "rounded"}
        onChange={onChange}
        page={currentPage}
      />
    </ThemeProvider>
  );
};

export default PaginationComponent;
