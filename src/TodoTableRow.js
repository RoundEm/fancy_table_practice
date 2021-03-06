import React from 'react'

const TodoTableRow = (props) => {
  const collapsed = {
    display: 'none'
  }
  
  return (
    <tr 
      className="todo-table-tr"
      key={props.todo.id}
      style={props.hidden ? collapsed : null}
    >
        <td className="empty-td"></td>
        <td>{props.todo.date}</td>
        <td>{props.todo.id}</td>
        <td>{props.todo.accountName}</td>
        <td>{props.todo.email}</td>
        <td>$ {props.todo.amount}</td>
    </tr>
  )
}

export default TodoTableRow
