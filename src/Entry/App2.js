import React from "react";
import Theme from "@Helpers/theme";
import { useState } from "react";

import Auth from "@scofrontend/auth";

import { Button } from "@scofrontend/design";

import Register from "@UserPages/Profile/Create";

const demoFn = response => {
  console.log(response);
  response.load();
};

Auth().then(demoFn);

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(undefined);

  return (
    <Theme>
      <Register setName={setName}></Register>
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={() => setCount(count + 1)}>Click</Button>
      </div>
    </Theme>
  );
};

export default App;
