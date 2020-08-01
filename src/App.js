import React from "react";
// import "./App.css";
import ApplicationDashboard from "./components/ApplicationDashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faEnvelope);

function App() {
  return <ApplicationDashboard />;
}

export default App;
