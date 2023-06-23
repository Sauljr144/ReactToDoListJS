import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  //UseState to handle our input from input form
  const [input, setInput] = useState('');

  //UseState to handle our items and stored in an array.
  const [list, setList] = useState([]);

  //Function to add items to a list
  const addTodo = (newItem) => {

    // This is an object
    const newTodo = {
      id: Math.random(),
      todo: newItem
    }
    console.log('this is the new item: ', newTodo);
    console.log('existing items: ', list);
    
    // setList will update list, ...list copies the list and newTodo sets new list ... adss to the todo list
    setList([...list, newTodo]);

    //clear input box
    setInput('');
  }

  //Function to delete items
  const deleteTodo = (id) =>{
    //Filter out ToDo with out id...if the id of the ItemToDelete is not equal to id it filters the list with the items we want
    const newList = list.filter((ItemToDelete) => ItemToDelete.id != id)
    // updates our setList with the filtered list newList
    setList(newList)
  }


  return (
    <>
    {/* Things we need: Title, Input field, btn to add, ul, li */}
    <h1>Todo List</h1>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

    {/* passing in the addTodo function in the onclick with the value of input */}
    <button onClick={() => addTodo(input)}>Add</button>

    {/* list starts here */}
    <ul>
      {/* to show list we need to map the list, we use NewListItem as a new variable */}
      {list.map((newListItem) => (

        // passing in the id from our object as our key, newListItem.todo displays the information
        <li key={newListItem.id}>{newListItem.todo}

        {/* btn to delete */}
        <button onClick={()=> deleteTodo(newListItem.id)}>&times;</button>
        </li>
        
      ))}
    </ul>
    </>
  )
}

export default App
