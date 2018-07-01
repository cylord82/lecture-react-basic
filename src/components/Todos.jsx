import React from 'react';

const Todos = (props) => (
  <div className="Todos">
    <div>
      {props.title}
    </div>
    <ul>
      {props.items.map((item, idx) => (
        <li key={idx}>
          <label><input type="checkbox" defaultChecked={item.completed} /> {item.title}</label>
        </li>
      ))}
    </ul>
  </div>
)

export default Todos;
