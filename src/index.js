import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App";
import Footer from "./components/Footer";
import GitRibbon from "./components/GitRibbon";
//import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <GitRibbon />
    <App />
    <Footer link={"https://minggas.website"} title={"Link to Minggas Website"}>
      Minggas
    </Footer>
  </div>,
  document.getElementById("root")
);
//registerServiceWorker();
