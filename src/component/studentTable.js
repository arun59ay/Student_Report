import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useMemo, useState } from 'react';
import getStudentList from '../studentData/studentMockData.json'

const StudentTable = (props) => {
  const containerStyle = useMemo(() => ({ width: '50%', height: '1100px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [studentData] = useState(props?.studentData);
  const [columnDefs, setColumnDefs] = useState([
    { field: 'userId' },
    { field: 'userName' },
    { field: 'grade' },
    { field: 'joinDate' },
    { field: 'leaveDate' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      width: 170,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    setRowData(studentData);  
    var defaultSortModel = [
      { colId: 'userId', sort: 'asc', sortIndex: 0 },
      { colId: 'userName', sort: 'asc', sortIndex: 1 },
    ];
    params.api.applyColumnState({ state: defaultSortModel });
  }, []);

  const onRowClicked = useCallback((event) => {
    props.studentDataClicked(event?.data);
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={gridStyle}
        className={
          "ag-theme-quartz"
        }
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          multiSortKey={'ctrl'}
          onGridReady={onGridReady}
          onRowClicked={onRowClicked} 
        />
      </div>
    </div>
  );
};


export default StudentTable;