import React from 'react';
import { TableComposable, Table,Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

const ComposableTableHoverable = () => {
  const columns = ['Serial', 'Date', 'Link'];
  const [rows, setRows] = React.useState([
    { cells: ['1', '19-Apr-2023',<a href='https://drive.google.com/file/d/1P0nuAYrzOrR5XV4OBQM6WWIfRw6ll2lL/view ' target="_blank" rel="noopener noreferrer">Link for the video</a> ] },
    { cells: ['2', '20-Mar-2023', <a href='https://drive.google.com/file/d/1P0nuAYrzOrR5XV4OBQM6WWIfRw6ll2lL/view ' target="_blank" rel="noopener noreferrer">Link for the video</a>]},
    { cells: ['3', '23-Jun-2023', <a href='https://drive.google.com/file/d/1P0nuAYrzOrR5XV4OBQM6WWIfRw6ll2lL/view ' target="_blank" rel="noopener noreferrer">Link for the video</a>] }
  ]);
  const onRowClick = (event, rowIndex, row) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].isRowSelected = !rows[rowIndex].isRowSelected;
    setRows(updatedRows);
  };

  return (
    <Table aria-label="Misc table">
      <Thead noWrap>
        <Tr>
          <Th>{columns[0]}</Th>
          <Th>{columns[1]}</Th>
          <Th>{columns[2]}</Th>
          {/* <Th>{columns[3]}</Th>
          <Th>{columns[4]}</Th> */}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => {
          return (
            <Tr
              key={rowIndex}
              onRowClick={event => onRowClick(event, rowIndex, row.cells)}
              isHoverable
              isRowSelected={row.isRowSelected}
            >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]}>
                    {cell}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
export default ComposableTableHoverable;