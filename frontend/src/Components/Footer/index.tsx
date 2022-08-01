import { Typography } from "@mui/material";
import { FooterRoot, FooterContainer } from "./FooterStyle";

export default function Footer() {
  return (
    <FooterRoot>
      <FooterContainer>
        <Typography variant="h6">Copyright © 2022 Articles</Typography>
      </FooterContainer>
    </FooterRoot>
  );
}
