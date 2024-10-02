import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import './index.css'

import SimpleTodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, userInput: '', noOfRepeats: 0}

  deleteTodo = id => {
    const {todosList} = this.state
    const afterDeletionList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: afterDeletionList})
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAdd = () => {
    const {userInput} = this.state

    const newItem = {
      id: uuidv4(),
      title: userInput,
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, newItem],
      userInput: '',
    }))
  }

  onChangeRepeat = event => {
    this.setState({noOfRepeats: event.target.value})
  }

  render() {
    const {todosList, userInput, noOfRepeats} = this.state
    return (
      <div className="main-bg">
        <div className="content-container">
          <h1 className="heading-styling">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder="Enter the text"
              onChange={this.onChangeInput}
              value={userInput}
            />
            <input
              type="number"
              value={noOfRepeats}
              className="repeat-input-field"
              onChange={this.onChangeRepeat}
            />
            <button type="button" className="add-button" onClick={this.onAdd}>
              Add
            </button>
          </div>
          <ul className="unordered-styling">
            {todosList.map(eachitem => (
              <SimpleTodoItem
                itemDetails={eachitem}
                key={eachitem.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
