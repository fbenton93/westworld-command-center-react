import React from 'react';
import HostList from './HostList';

const Area = (props) => {
  const areaName = props.data.name.split("_").join(" ").toUpperCase()
  const filteredHosts = props.hosts.filter((host) => {
    return host.area == props.data.name && host.active
  })

  return(
    <div style={props.data.style} className='area'>
      <h3>{areaName}</h3>
      <HostList hosts={filteredHosts} renderHostInfo={props.renderHostInfo} />
    </div>
  )
}

export default Area;
