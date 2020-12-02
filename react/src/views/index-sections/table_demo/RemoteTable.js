import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import {
    Container
  } from "reactstrap";
  
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

  addProducts(8);

export default class RemoteAlternative extends React.Component {
  constructor(props) {
    super(props);
  }

  remote(remoteObj) {
    // Only cell editing, insert and delete row will be handled by remote store
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    return remoteObj;
  }

  render() {
    const cellEditProp = {
      mode: 'click'
    };
    const selectRow = {
      mode: 'checkbox',
      cliclToSelct: true
    };
    return (
        <Container>
      <BootstrapTable data={ this.props.data }
                      selectRow={ selectRow }
                      remote={ this.remote }
                      insertRow deleteRow search pagination
                      cellEdit={ cellEditProp }
                      options={ {
                        onCellEdit: this.props.onCellEdit,
                        onDeleteRow: this.props.onDeleteRow,
                        onAddRow: this.props.onAddRow
                      } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort>Product Price</TableHeaderColumn>
      </BootstrapTable>
      </Container>
    );
  }
}
