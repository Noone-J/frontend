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
import { 
  Table, 
  Col, 
  Row,
  OverlayTrigger, 
  Tooltip 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useJoinBatailleParty } from '../../context/GameContext/JointBatailleContext'; // Assurez-vous que le chemin d'importation est correct


function TablePartyPage() {
  const { TheTableParty, callTableParty } = useContext(TablePartyContext);
  const joinBatailleParty = useJoinBatailleParty(); // Utilisez le Hook personnalisé

  useEffect(() => {
    callTableParty(); // Call the function to retrieve the data
  }, [callTableParty]);


  // Define the table headers with sorting and filtering capabilities
  const headers = [
    {
      prop: 'type_jeu_nom',
      title: 'Type de jeu',
      isSortable: true,
      isFilterable: true
    },
    {
      prop: 'nbr_joueur',
      title: 'Nombre de joueurs',
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
      prop: 'player_images',
      title: 'Images des joueurs',
      isSortable: false,
      isFilterable: false
    },
    {
      prop: 'joinButton',
      title: 'Actions',
      isSortable: false,
      isFilterable: false
    }
  ];

  const body = TheTableParty ? TheTableParty.map(tableParty => ({
    type_jeu_nom: tableParty.type_jeu_nom,
    nbr_joueur: `${tableParty.nbr_joueur} / ${tableParty.nombre_joueur_max}`,
    statut: tableParty.statut_nom,
    player_images: tableParty.joueurs.map(joueur => (
      <OverlayTrigger
      key={joueur.user.username}
      placement="top"
      overlay={<Tooltip id={`tooltip-${joueur.user.username}`}>{joueur.user.username}</Tooltip>}
    >
      <img src={joueur.profil_image_path} alt={joueur.user.username} style={{ width: '50px', height: '50px' }} />
    </OverlayTrigger>
    )),
    joinButton: (
      <button onClick={() => joinBatailleParty(tableParty.id)}>
        Rejoint
      </button>
    )
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
      <Row className="col-mb-4">
        <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
          <Filter />
        </Col>
        <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0">
          <PaginationOptions alwaysShowPagination />
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