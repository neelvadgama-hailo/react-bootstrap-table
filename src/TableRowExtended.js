import React, { Component } from 'react';

export default class TableRowExtended extends Component {
    render() {
      return (
        <tr {...this.props} />
      );
    }
}
