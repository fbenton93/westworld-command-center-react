import React, { Component }  from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  const coldHosts = props.hosts.map((hostData) => {
    return <Host key={hostData.firstName} data={hostData} renderHostInfo={props.renderHostInfo} />
  })
  
  return (
    <Card.Group itemsPerRow={6}>
      {coldHosts}
    </Card.Group>
  )

}


export default HostList
