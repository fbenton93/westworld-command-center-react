import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import ColdStorage from './components/ColdStorage'
import HostInfo from './components/HostInfo'
import Headquarters from './components/Headquarters'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      areas: [],
      hosts: [],
      selectedHost: {}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/areas")
    .then(r => r.json())
    .then(data => {
      this.setState({
        areas: data
      })
    });

    fetch("http://localhost:3000/hosts")
    .then(r => r.json())
    .then(data => {
      this.setState({
        hosts: data
      })
    })
  }
  renderHostInfo = (hostObj) => {
    this.setState({
      selectedHost: hostObj
    },() => console.log(this.state))
  }
  updateLocation = (location,hostName) => {
    const newArray = this.state.hosts.map((host) => {
      return host.firstName == hostName ? {...host, area: location } : {...host}
    })

    this.setState({
      hosts: newArray
    })
  }
  toggleStatus = (hostName) => {
    const newArray = this.state.hosts.map((host) => {
      return host.firstName == hostName ? {...host, active: !host.active } : {...host}
    })

    this.setState({
      hosts: newArray,
      selectedHost: {...this.state.selectedHost, active: !this.state.selectedHost.active}
    },() => console.log(this.state.hosts))


  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
          areas={this.state.areas}
          hosts={this.state.hosts}
          renderHostInfo={this.renderHostInfo} />
        <div>
          <Headquarters
            hosts={this.state.hosts}
            renderHostInfo={this.renderHostInfo}
            selectedHost={this.state.selectedHost}
            updateLocation={this.updateLocation}
            toggleStatus={this.toggleStatus}
          />
        </div>

      </Segment>
    );
  };
};

          export default App;


          {/* <ColdStorage
            hosts={this.state.hosts}
            renderHostInfo={this.renderHostInfo} />
            <HostInfo
            hosts={this.state.hosts}
            selectedHost={this.state.selectedHost}
            updateLocation={this.updateLocation}
            toggleStatus={this.toggleStatus}
          /> */}
