import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery, useTheme } from "@mui/material";

const ArrowCircle = ({ style }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  return (
    <div
      style={{
        width: isSm ? "14px" : "20px",
        height: isSm ? "14px" : "20px",
        backgroundColor: "white",
        borderRadius: "100%",
        position: "relative",
        ...style,
      }}
    >
      <ArrowForwardIosIcon
        fontSize="inherit"
        color="primary"
        style={{ position: "absolute", top: "2px", left: "3px" }}
      />
    </div>
  );
};

export default ArrowCircle;
