import React, { PureComponent } from 'react';

class Slides extends PureComponent {
  render() {
    return (
      <div className="slides">
        {this.props.children}
      </div>
    );
  }
}

export default Slides;
