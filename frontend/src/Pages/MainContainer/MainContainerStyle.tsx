import { createStyles, makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: "center",
      maxWidth: "1600px",
      margin: "0px auto",
      width: "100%",
      height: "100%",
      overflowY: "scroll",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
    },
    cardContainer: {
      display: "flex",
      padding: "20px",
      flexFlow: "wrap",
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      justifyContent: "center",
    },
    card: {
      width: "350px",
    },
  })
);

export const CardItem = styled(Box)(({ theme }) => ({
  padding: "20px",
}));
