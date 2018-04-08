import React from 'react'
import GearHolder from './GearHolder';
import Summary from './Summary';

class GearController extends React.Component{

  render (){
    return(
        <div>
        gear controller component
        <GearHolder/>
        <Summary/>
        </div>
    );
  }


}
export default GearController;
