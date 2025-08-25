import React from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
// import Um from "./screens/Um";
// import Dois from "./screens/Dois";
// import Tres from "./screens/Tres";
// import Quatro from "./screens/Quatro";

export default function App() {
  return (
    <>
      <StatusBar hidden /> 
      <Home />
    </>
  );
}