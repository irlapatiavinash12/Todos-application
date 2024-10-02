// Write your code here

import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteTodo} = props
  const {id, title} = itemDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item-styling">
      <p className="paragraph-styling">{title}</p>
      <button className="button-styling" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
