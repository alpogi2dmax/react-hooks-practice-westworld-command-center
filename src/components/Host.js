import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, onSelectedHost, hostSelectedId}) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */

  function handleClick() {
    onSelectedHost(host)
  }


  return (
    <Card
      className={host.id === hostSelectedId ? 'host selected' : 'host'}
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
