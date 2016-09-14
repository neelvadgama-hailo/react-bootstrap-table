/*eslint-disable */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

/*eslint-disable */
const employees = {"result":[{"memberId":"243517161090736128","status":"approved","givenName":"Neel Vadgama","familyName":"Vadgama","email":"neel.vadgama@hailocab.com","roles":["H4BADMIN.83dd387a-06b7-4e62-bb9f-f2fa4e93bec7","H4BADMIN.3b69fa6f-d70a-4c68-8f6d-97e61f39ac47","H4BADMIN.4e32daa2-3473-4ec0-a79c-8b093760252d","H4BBOOKER.01a4d42b-3e41-47a1-9c85-cb1b74a6f19e","H4BADMIN.01498402-7720-4bdb-64fd-7af3f06c4833","H4BADMIN.279a5411-9286-4db1-b85f-bf65a1affec8","H4BADMIN.e2793cd3-ca27-43de-6a7d-6e2b15f36c7b","H4BADMIN.a9f2a2ea-19c3-4edc-7317-87bddc0b0795","H4BADMIN.ba96cad8-e692-4a04-6d10-640b644d20b3"],"phone":"+447595051256","locale":"en_GB","associatedCard":false},{"memberId":"592681271681630208","status":"approved","givenName":"Neel","familyName":"Vadgama","email":"neel.vadgama+123@hailocab.com","roles":["H4BBOOKER.01498402-7720-4bdb-64fd-7af3f06c4833"],"phone":"+447700900294","locale":"en","associatedCard":false}],"total":2,"next":""};
/*eslint-enable */

export default class BasicTable extends React.Component {
  getMapView() {
    return (
      <div>rtrts</div>
    );
  }
  render() {
    return (
        <BootstrapTable
            data={employees.result}
            search
            multiColumnSearch
        >
            <TableHeaderColumn
                dataField="memberId"
                hidden
                isKey
            >
                MemberId
            </TableHeaderColumn>
            <TableHeaderColumn dataField="givenName" dataSort>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataSort>Email</TableHeaderColumn>
            <TableHeaderColumn dataField="role">Role</TableHeaderColumn>
            <TableHeaderColumn dataField="costCentre">Cost Centre</TableHeaderColumn>
            <TableHeaderColumn key="toggle-view" toggleView fetchAsyncData={this.getMapView} className="hidden-xs hidden-sm"></TableHeaderColumn>
        </BootstrapTable>
    );
  }
}
/*eslint-enable */
