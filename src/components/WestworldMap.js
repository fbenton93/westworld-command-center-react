import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


class WestworldMap extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    const mapAreas = this.props.areas.map((areaData) => {
      return <Area key={areaData.name} data={areaData} hosts={this.props.hosts} renderHostInfo={this.props.renderHostInfo} />
    })


    return (
      <Segment id="map" >
        {mapAreas}
      </Segment>
    )
  }
}

export default WestworldMap
