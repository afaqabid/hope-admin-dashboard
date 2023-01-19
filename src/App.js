import "./App.css";
import { db } from './firebase'
import { uid } from 'uid';
import { set, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';

function App() {
const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);

const handleTodoChange= (e) => {
  setTodo(e.target.value)
}

  //read
  useEffect(() => {
    onValue(ref(db), snapshot => {
      setTodos([]);
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map(todo => {
          setTodos(oldArray => [...oldArray, todo])
        });
      }
    });

  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid() 
    set(ref(db, `/${uuid}`), {
      todo, 
      uuid,

    });

    setTodo("");
  };
 

  return (
    <div className="App">
      <input type="text" value={todo} onChange={handleTodoChange}/>
      <button onClick={writeToDatabase}>submit</button>  
      {todos.map((todo) => (
        <>
        <h1>{todo.todo}</h1>
        <button>update</button>
        <button>delete</button>
         </>
      ))}     
    </div>
  ); 
}

export default App;
