import React from 'react';

export default function StepsRow({ walk, handleDelete }) {
  const onDelete = () => handleDelete(walk.id)
  return (
    <tr key={walk.id}>
      <td>{walk.date}</td>
      <td>{walk.km}</td>
      <td>
        <i class="material-icons">border_color</i>
        <i class="material-icons" onClick={onDelete}>delete</i>
      </td>
    </tr>
  );
}
