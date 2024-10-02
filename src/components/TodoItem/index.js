// Write your code here

import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteTodo} = props
  const {id, title} = itemDetails
  const [edit, setEdit] = useState(false)
  const [userEntry, setEntry] = useState(title)

  const onDelete = () => {
    deleteTodo(id)
  }

  const onEdit = () => {
    setEdit(prevEdit => !prevEdit)
  }

  const onChangeTitle = event => {
    setEntry(event.target.value)
  }

  return (
    <li className="list-item-styling">
      <input type="checkbox" />
      {edit ? (
        <input
          className="title-input"
          onChange={onChangeTitle}
          value={userEntry}
        />
      ) : (
        <p className="paragraph-styling">{userEntry}</p>
      )}

      <div>
        <button type="button" className="edit-button" onClick={onEdit}>
          {edit ? 'Save' : 'Edit'}
        </button>
        <button className="button-styling" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
