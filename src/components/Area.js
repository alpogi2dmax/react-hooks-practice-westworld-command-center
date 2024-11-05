import React from "react";
import "../stylesheets/Area.css";

function Area({area}) {
  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {
          area.name === 'high_plains' ? 'High Plains' :
          area.name === 'python_pass' ? 'Python Pass' :
          area.name === 'lowlands' ? 'Lowlands' :
          area.name === 'badlands' ? 'Badlands' :
          area.name === 'under_construction' ? 'Under Construction' : 'Pariah'
        }
      </h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
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
