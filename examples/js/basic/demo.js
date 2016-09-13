/*eslint-disable */
import React from 'react';
import BasicTable from './basic-table';
import SingleColumnTable from './single-column-table';
import HoverStripedTable from './hover-striped-table';
import BorderlessTable from './borderless-table';
import ScrollTable from './scroll-table';
import LargeColumnTable from './large-column-table';
import NoDataTable from './no-data-table';

import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'A basic react-bootstrap-table' }>
          { renderLinks('basic/basic-table.js') }
          <BasicTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
/*eslint-enable */
