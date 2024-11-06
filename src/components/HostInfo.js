import React, { useEffect, useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({hostSelected, onHostActive, areas, onUpdateArea}) {
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [options, setOptions] = useState([
    { key: "some_area", text: "Some Area", value: "some_area" },
    { key: "another_area", text: "Another Area", value: "another_area" },
  ]);

  const [value, setValue] = useState("some_area");

  const [ isActive, setIsActive ] = useState(hostSelected.active || "")

  useEffect(() => {
    setIsActive(hostSelected.active)
    setOptions(areas.map(area => { return {
      key: area.name.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' '),
      text: area.name.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' '),
      value: area.name.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' ')
    }
    }))
    setValue(hostSelected.area.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' '))
  },[hostSelected, areas])

  function handleOptionChange(e, {value}) {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    setValue(value)
    let hostObj={
      id: hostSelected.id,
      firstName: hostSelected.firstName,
      area: value.toLowerCase().split(' ').join('_')
    }
    onUpdateArea(hostObj)
  }

  function handleRadioChange() {
    setIsActive(!isActive)
    onHostActive({...hostSelected, active: !isActive})
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={hostSelected.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {hostSelected.firstName} | {hostSelected.gender === 'Male' ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={isActive ? "Active" : "Decommissioned"}
                checked={isActive ? true : false}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
