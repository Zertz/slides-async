import React, { PureComponent } from 'react';

class Slide extends PureComponent {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

export default Slide;
