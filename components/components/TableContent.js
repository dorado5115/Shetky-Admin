import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Full name', width: 250 },
  { field: 'academicKey', headerName: 'Academic Key', width: 250 },
  {
    field: 'registrationDate',
    headerName: 'Registration Date',
    width: 250,
  },
  {
    field: 'inCampus',
    headerName: 'In Campus',
    width: 250,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (params) =>
      `${params.row.fullName || ''}`,
  },
];

const rows = [
  { id: 1, academicKey: '1452df4e5s6x345', fullName: 'Jon Snow', registrationDate: '02/27/2022', inCampus: true },
  { id: 2, academicKey: '1452df4e5s6x345', fullName: 'Cersei Mar', registrationDate: '02/27/2022', inCampus: true },
  { id: 3, academicKey: '1452df4e5s6x345', fullName: 'Jaime Sol', registrationDate: '02/27/2022', inCampus: true },
  { id: 4, academicKey: '1452df4e5s6x345', fullName: 'Arya Luna', registrationDate: '02/27/2022', inCampus: false },
  { id: 5, academicKey: '1452df4e5s6x345', fullName: 'Daenerys Arroy', registrationDate: '02/27/2022', inCampus: true },
  { id: 6, academicKey: '1452df4e5s6x345', fullName: 'Dev Ra', registrationDate: '02/27/2022', inCampus: true },
  { id: 7, academicKey: '1452df4e5s6x345', fullName: 'Faranga Jing', registrationDate: '02/27/2022', inCampus: true },
  { id: 8, academicKey: '1452df4e5s6x345', fullName: 'Rossini Lo', registrationDate: '02/27/2022', inCampus: false },
  { id: 9, academicKey: '1452df4e5s6x345', fullName: 'Harvey Po', registrationDate: '02/27/2022',inCampus: true },
];

export default function DataTable() {
  return (
    <div style={{ height: '80%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}