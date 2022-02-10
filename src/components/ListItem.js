import React from 'react'

const ListItem = ({ data, onClick }) => {
  return (
    <li>
      {JSON.stringify(data)}
      <button onClick={() => onClick(data.id)}>Complete</button>
    </li>
  )
}
export default ListItem
