import React, { useState } from 'react';
import isInvalid from '../helpers/isInvalid';
import './Input.css';

export default function Input({ onEnter }) {
  const [input, setInput] = useState({
    date: '',
    km: '',
  });

  const dateInput = React.createRef();

  const onAdd = (value, e) => {
    setInput({
      ...input,
      [value]: e.target.value,
    });
  };

  const onOK = e => {
    e.preventDefault();
    if (isInvalid(input)) {
      return alert('invalid input');
    }
    onEnter(input);
    setInput({ date: '', km: '' });
    dateInput.current.focus();
  };

  return (
    <form>
      <table className="input-table">
        <tbody>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Подтвердить</th>
          </tr>
          <tr>
            <td>
              <input
                onChange={e => onAdd('date', e)}
                value={input.date}
                ref={dateInput}
              />
            </td>
            <td>
              <input onChange={e => onAdd('km', e)} value={input.km} />
            </td>
            <td className="container-button">
              <button className="input-button" onClick={onOK}>
                OK
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
