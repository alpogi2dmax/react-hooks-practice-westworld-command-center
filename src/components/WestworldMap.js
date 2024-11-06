import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area'

function WestworldMap({areas, hosts, onSelectedHost, hostSelected}) {

  console.log(hostSelected.id)

  return (
  <Segment id="map">
    {/* What should we render on the map? */}
    {areas.map(area => (
      <Area key={area.id} area={area} hosts={hosts} onSelectedHost={onSelectedHost} hostSelectedId={hostSelected.id}/>
    ))}
  </Segment>
  )
}

export default WestworldMap;
