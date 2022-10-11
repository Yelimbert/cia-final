import React from 'react';

const Table = ({asignatura, nota, letra}) => {
  return (
    <tr>
        <td>{asignatura}</td>
        <td>{nota}</td>
        <td>{letra}</td>
    </tr>
  );
}

export default Table;