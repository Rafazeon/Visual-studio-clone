import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import { EditorProvider } from "~/contexts/EditorContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <EditorProvider>
        <Component {...pageProps} />
      </EditorProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
