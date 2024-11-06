import React from "react";
import HostList from './HostList'
import "../stylesheets/Area.css";

function Area({area, hosts, onSelectedHost, hostSelectedId}) {

  const areaHosts = hosts.filter(host => host.area === area.name)

  console.log(hostSelectedId)
  

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {area.name.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' ')}
      </h3>
      {
      <HostList hosts={areaHosts} onSelectedHost={onSelectedHost} hostSelectedId={hostSelectedId}/> 
      }
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
