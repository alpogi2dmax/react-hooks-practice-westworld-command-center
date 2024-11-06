import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import WestWorldMap from './WestworldMap'
import Headquarters from './Headquarters'
import "../stylesheets/App.css";
import { Log } from "../services/Log";

function App() {

  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])
  const [hostSelected, setHostSelected] = useState('')
  const [hostInfo, setHostInfo] = useState(false)
  const [logs, setLogs] = useState([])
  


  useEffect(() => {
    fetch('http://localhost:3001/hosts')
      .then(r => r.json())
      .then(data => setHosts(data))
  },[])

  useEffect(() => {
    fetch('http://localhost:3001/areas')
      .then(r => r.json())
      .then(data => setAreas(data))
  },[])

  function hostActive(hosta) {
    if (hosts.filter(host => host.area === hosta.area).length <= 
    areas.find(area => area.name === hosta.area).limit) {
      setHosts(hosts.map(host => {
        if (host.id === hosta.id) {
          return {...host, active: hosta.active}
        } else {
          return host
        }
      }))
      const action = hosta.active ? `Activated ${hosta.firstName}` : `Decomissioned ${hosta.firstName}`
      const logMethod = hosta.active ? Log.warn : Log.notify
      setLogs([logMethod(action), ...logs])
    } 
  }

  console.log(hostSelected)
  console.log(hosts)

  function updateArea(hostObj) {
    if (hosts.filter(host => host.area === hostObj.area).length < 
    areas.find(area => area.name === hostObj.area).limit) {
      setHosts(hosts.map(host => {
        if(host.id === hostObj.id) {
          return {...host, area: hostObj.area}
        } else {
          return host
        }
      }))
      const action = `${hostObj.firstName} set in ${hostObj.area.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' ')}`
      const logMethod = Log.notify
      setLogs([logMethod(action), ...logs])
    } else {
      const action = `Too many hosts. Cannot add ${hostObj.firstName} to ${hostObj.area.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' ')}`
      const logMethod = Log.error
      setLogs([logMethod(action), ...logs])
    }
  }

  const activeHosts = hosts.filter(host => host.active === true)

  //state to identify host selected

  //function to identify host selected
  function selectedHost(hostSelect) {
    setHostSelected(hostSelect)
    setHostInfo(true)
  }

  function handleActivateAll(activate) {
    setHosts(hosts.map(host => {
      return {...host, active: activate}
    }))
    const action = activate ? 'Activating all hosts!' : 'Decomissioning all hosts!'
    const logMethod = activate ? Log.notify : Log.warn
    setLogs([logMethod(action), ...logs])
  }



  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestWorldMap areas={areas} hosts={activeHosts} onSelectedHost={selectedHost} hostSelected={hostSelected}/>
      <Headquarters hosts={hosts} areas={areas} onHostActive={hostActive} onUpdateArea={updateArea} onSelectedHost={selectedHost} hostSelected={hostSelected} hostInfo={hostInfo} onActivateAll={handleActivateAll} logs={logs}/>
    </Segment>
  );
}

export default App;
