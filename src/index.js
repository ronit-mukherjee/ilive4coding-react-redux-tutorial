import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
