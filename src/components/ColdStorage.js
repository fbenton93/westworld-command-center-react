import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = (props) => {
  const coldStorage = props.hosts.filter((host) => {
    return !host.active
  })
  return(
    <Segment style={{height:'100%'}}>
      <h3>ColdStorage</h3>
      <HostList hosts={coldStorage} renderHostInfo={props.renderHostInfo}/>
    </Segment>
  )
}

export default ColdStorage
