import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    console.log('URL changed.');
  }

  render() {
    return(
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* Form to capture user data */}
        <h2>Please enter a store name</h2>
        <input type="text" name="" id="" defaultValue={getFunName()} required/>
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

export default StorePicker;