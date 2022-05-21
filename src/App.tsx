import { ReactQuery } from "./reactQuery";
import { Router } from "./routes";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

import { Navbar } from "./components/Layout/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactQuery>
        <GlobalStyles />
        <Navbar />
        <Router />
      </ReactQuery>
    </ThemeProvider>
  );
}

export default App;
