import React, { useState, useEffect } from "react";
import { Segment, Image } from "semantic-ui-react";
import HostInfo from './HostInfo'
import * as Images from "../services/Images";

function Details({hostSelected, hostInfo, onHostActive, areas, onUpdateArea}) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  

  return (
    <Segment id="details" className="HQComps">
      {
        !hostInfo ? 
        <img size="medium" src='https://www.hbo.com/content/dam/hbodata/series/westworld/episodes/s-01/westworld-s1-1920x1080.jpg' /> : 
        <HostInfo hostSelected={hostSelected} onHostActive={onHostActive} areas={areas} onUpdateArea={onUpdateArea}/>
      }
    </Segment>
  );
}

export default Details;
