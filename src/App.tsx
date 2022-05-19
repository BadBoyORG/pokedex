import { ReactQuery } from "./reactQuery";
import { Router } from "./routes";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactQuery>
        <GlobalStyles />
        <Router />
      </ReactQuery>
    </ThemeProvider>
  );
}

export default App;
