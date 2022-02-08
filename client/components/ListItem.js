import React from 'react'

const ListItem = (props) => {
  // eslint-disable-next-line
  const { id, item } = props
  return (
    <li>
      {item}
    </li>
  )
}
export default ListItem
