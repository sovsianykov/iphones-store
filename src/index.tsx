import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
      <App />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

