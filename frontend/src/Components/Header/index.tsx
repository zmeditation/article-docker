import { Typography } from "@mui/material";
import { HeaderRoot, HeaderContainer } from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <Typography variant="h4">Article List</Typography>
      </HeaderContainer>
    </HeaderRoot>
  );
}
