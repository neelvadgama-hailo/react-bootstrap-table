import React from 'react';
import TableColumn from './TableColumn';

export default class TableRowExtended extends TableColumn {
    render() {
      return (
        <tr {...this.props}>
        </tr>
      );
    }
}
