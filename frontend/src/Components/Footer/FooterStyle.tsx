import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FooterRoot = styled(Box)(({ theme }) => ({
  background: "#0D1117",
  color: "#D0A13A",
  height: "90px",
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "1600px",
  margin: "0px auto",
  height: "100%",
  padding: "0px 20px",
}));
