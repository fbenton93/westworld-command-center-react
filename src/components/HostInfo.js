import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, List, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component {



  handleChange = (event,obj) => {
    this.props.updateLocation(obj.value,this.props.selectedHost.firstName)
    console.log(obj.value)
  }


  toggle = (event) => {
    this.props.toggleStatus(this.props.selectedHost.firstName)
  }

  render() {
    const areas = [
      {key: "high_plains", text: "High Plains", value:"high_plains" },
      {key: "lowlands", text: "Lowlands", value:"lowlands"},
      {key: "pariah", text: "Pariah", value: "pariah"},
      {key: "python_pass", text: "Python Pass", value: "python_pass"},
      {key: "badlands", text: "Badlands", value:"badlands"}

    ]
    if (this.props.selectedHost.firstName == "Bernard") {
      areas.push({key: "under_construction", text: "Under Construction", value: "under_construction"})
    }




    return (
      <Segment>
        <Grid>
          <Grid.Column width={6}>
            <Image floated='left' size='small' src={this.props.selectedHost.imageUrl} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {this.props.selectedHost.firstName} {this.props.selectedHost.firstName}
                  {this.props.selectedHost.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
                  { /* What should happen when the host isn't a man? Or when his name isn't Teddy? */}
                </Card.Header>
                <Card.Meta>
                  <Radio style={{margin: "10px"}} slider onChange={this.toggle} label={this.props.selectedHost.active ? "Active" : "Decommissioned"} />

                </Card.Meta>

                <Divider />
                Current Area:
                <Dropdown
                  onChange={this.handleChange}
                  value={this.props.selectedHost.area}
                  selection
                  options={areas} />

              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default HostInfo
