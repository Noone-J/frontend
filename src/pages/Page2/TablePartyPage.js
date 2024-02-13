import React, { useContext, useEffect } from 'react';
import TablePartyContext from '../../context/context2/TablePartyContext';
import {   
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions, // Corrected import name
  TableBody,
  TableHeader
} from 'react-bs-datatable';
import { Table, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TablePartyPage() {
  const { TheTableParty, callTableParty } = useContext(TablePartyContext);

  useEffect(() => {
    callTableParty(); // Call the function to retrieve the data
  }, [callTableParty]);

  // Define the table headers with sorting and filtering capabilities
  const headers = [
    {
      prop: 'id',
      title: 'ID',
      isSortable: true,
      isFilterable: true
    },
    {
      prop: 'date_debut',
      title: 'Date de début',
      isSortable: true,
      isFilterable: true
    },
    {
      prop: 'statut',
      title: 'Statut',
      isSortable: true,
      isFilterable: true
    },
    {
      prop: 'joueurs',
      title: 'Joueurs',
      isSortable: true,
      isFilterable: true
    }
  ];

  // Replace TABLE_DATA with the actual data source
  const body = TheTableParty ? TheTableParty.map(tableParty => ({
    id: tableParty.id,
    date_debut: tableParty.date_debut,
    statut: tableParty.statut,
    joueurs: tableParty.joueurs.map(joueur => `${joueur.user.username} (${joueur.user.email})`).join(', ')
  })) : [];

  return (
    <DatatableWrapper
      body={body}
      headers={headers}
      sortProps={{
        sortValueObj: {
          date_debut: (date) => new Date(date).getTime()
        }
      }}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage:   10,
          options: [5,   10,   15,   20]
        }
      }}
    >
      <Row className="mb-4">
        <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
          <Filter />
        </Col>
        <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0">
          <PaginationOptions alwaysShowPagination /> {/* Corrected usage */}
        </Col>
        <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-end align-items-end">
          <Pagination alwaysShowPagulation paginationRange={3} />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
}

export default TablePartyPage;