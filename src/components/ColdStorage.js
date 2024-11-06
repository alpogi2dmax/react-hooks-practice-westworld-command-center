import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import HostList from './HostList'

function ColdStorage({hosts, onSelectedHost, hostSelectedId}) {

  const decomissionedHosts = hosts.filter(host => host.active === false)

  

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}
        <HostList hosts={decomissionedHosts} onSelectedHost={onSelectedHost} hostSelectedId={hostSelectedId}/>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
