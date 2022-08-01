import { createStyles, makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: "center",
    },
    editGroup: {
      margin: "0px auto",
      width: "400px",
      textAlign: "left",
      "& span": {
        width: "30px",
      },
    },
  })
);

export const CardItem = styled(Box)(({ theme }) => ({
  padding: "20px",
}));
