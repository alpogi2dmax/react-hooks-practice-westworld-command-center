import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import Host from './Host'

function HostList({hosts}) {

  //state to identify host selected for className in host component
  const [hostSelected, setHostSelected] = useState('')

  //function to identify host selected for className in host component
  function selectedHost(id) {
    setHostSelected(id)
  }

  console.log(hostSelected)

  return (
    <Card.Group itemsPerRow={6}>
      {
      /* What do you think, partner? */
      hosts.map(host => (
        <Host key={host.id} host={host} onSelectedHost={selectedHost} hostSelected={hostSelected}/>
      ))
    }
    </Card.Group>
  );
}

export default HostList;
