import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'

class Host extends Component {

  handleClick = (event) => {

    event.persist()
    this.props.renderHostInfo(this.props.data)
  }

  render(){

    return(
      <Card onClick={this.handleClick}
        raised
        image={this.props.data.imageUrl}
        style={{width: "50px", border: "2px solid red", borderRadius: "5px"}}
      />
    )
}

}

export default Host
