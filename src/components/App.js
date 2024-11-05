import React from "react";
import { Segment } from "semantic-ui-react";
import WestWorldMap from './WestworldMap'
import Headquarters from './Headquarters'
import "../stylesheets/App.css";

function App() {
  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestWorldMap />
      <Headquarters />
    </Segment>
  );
}

export default App;
