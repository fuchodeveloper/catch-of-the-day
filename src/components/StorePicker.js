import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event){
    event.preventDefault();
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return(
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* Form to capture user data */}
        <h2>Please enter a store name</h2>
        <input type="text" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} required/>
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;