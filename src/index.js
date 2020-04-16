import React from "react";
import { render } from "react-dom";

import styled from "styled-components";

const Button = styled.button``;

const App = () => {
  return (
    <div>
      <Button>Button</Button> This is an example
    </div>
  );
};

render(<App />, document.getElementById("app"));
