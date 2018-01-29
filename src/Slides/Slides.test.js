import React from "react";
import ReactDOM from "react-dom";
import Slides from "./Slides";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Slides />, div);
  ReactDOM.unmountComponentAtNode(div);
});
