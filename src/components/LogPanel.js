import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({onActivateAll, logs}) {

  const [activateAll, setActivateAll] = useState(false)

  console.log(logs)

  function handleActivateClick() {
    setActivateAll(!activateAll)
    onActivateAll(!activateAll)
  }


  function dummyLogs(status, log) {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = [];

    if (status === 'warn') {
      logs.unshift(Log.warn(log))
    } else if(status === 'notify') {
      logs.unsfhit(Log.notify(log))
    }

    logs.unshift(Log.warn("This is an example of a warn log"));
    logs.unshift(Log.notify("This is an example of a notify log"));
    logs.unshift(Log.error("This is an example of an error log"));


    return logs
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      {/* Button below is the Activate All/Decommisssion All button */}
      {/* This isn't always going to be the same color...*/}
      {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      <Button fluid color={activateAll ? 'green' : 'red' } content={activateAll ? "DECOMISSION ALL" : "ACTIVATE ALL"} onClick={handleActivateClick}/>
    </Segment>
  );
}

export default LogPanel;
