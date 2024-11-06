import React, { useState, useEffect} from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'
import "../stylesheets/Headquarters.css";

function Headquarters({hosts, areas, onHostActive, onUpdateArea, onSelectedHost, hostSelected, hostInfo, onActivateAll, logs}) {

 

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{/* Something goes here.... */}
        <ColdStorage hosts={hosts} onSelectedHost={onSelectedHost} hostSelectedId={hostSelected.id}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details hostSelected={hostSelected} hostInfo={hostInfo} onHostActive={onHostActive} areas={areas} onUpdateArea={onUpdateArea}/>
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel onActivateAll={onActivateAll} logs={logs}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
