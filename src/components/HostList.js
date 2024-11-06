import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import Host from './Host'

function HostList({hosts, onSelectedHost, hostSelectedId}) {

  return (
    <Card.Group itemsPerRow={6}>
      {
      /* What do you think, partner? */
      hosts.map(host => (
        <Host key={host.id} host={host} onSelectedHost={onSelectedHost} hostSelectedId={hostSelectedId}/>
      ))
    }
    </Card.Group>
  );
}

export default HostList;
