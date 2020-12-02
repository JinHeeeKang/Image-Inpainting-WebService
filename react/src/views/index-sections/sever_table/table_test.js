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

export default class Table_test extends React.Component {
  render() {
    const cellEditProp = {
      mode: 'click',
      nonEditableRows: function() {
        return products.filter(p => p.id < 3).map(p => p.id);
      }
    };
    return (
      <Container>
        {/*<BootstrapTable data={ products } bordered={ false }>*/}
        <BootstrapTable data={ products } pagination cellEdit={ cellEditProp } insertRow={ true }>       
            <TableHeaderColumn dataField='id' isKey={ true } width='150'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' width='150'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price' width='90'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </Container>
    );
  }
}