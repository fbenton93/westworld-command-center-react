import React from 'react';
import { Grid } from 'semantic-ui-react';
import ColdStorage from './ColdStorage'
import HostInfo from './HostInfo'

const Headquarters = (props) => {

  return(
    <Grid celled='internally'>
      <Grid.Column width={10}>
        <ColdStorage
          hosts={props.hosts}
          renderHostInfo={props.renderHostInfo}
        />


      </Grid.Column>

      <Grid.Column width={5}>

        <HostInfo
          hosts={props.hosts}
          selectedHost={props.selectedHost}
          updateLocation={props.updateLocation}
          toggleStatus={props.toggleStatus}
        />

      </Grid.Column>
    </Grid>
  )
}




export default Headquarters;
