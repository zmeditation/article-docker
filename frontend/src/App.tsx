import "./App.css";
import Layout from "./Pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
