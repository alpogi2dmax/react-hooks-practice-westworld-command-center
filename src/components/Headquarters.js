import React, { useState, useEffect} from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from './ColdStorage'
import "../stylesheets/Headquarters.css";

function Headquarters() {

  const [hosts, setHosts] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/hosts')
      .then(r => r.json())
      .then(data => setHosts(data))
  },[])

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{/* Something goes here.... */}
        <ColdStorage hosts={hosts}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
