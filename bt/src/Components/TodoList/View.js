import React, { useState , useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import TodosList from './TodosList';
import Search from './Search';
import Filter from '../Filters/Filter';
const ListTodo = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [searchText, setSearchText] = useState('');
  const[filterStatus, setFilterStatus] =useState('All');

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  //toLowerCase() : không phân biệt chữ hoa chữ thường
  //includes : phát hiện chữ cái có trong từ bạn muốn tìm
  const todosAfterSearch =  todos.filter(x => x.title.toLowerCase().includes(searchText));
  

  return (
    <div className='container'>
      <div className='app-wrapper'>

        <div>
          <Header />
        </div>
        <div>
          <Search setSearchText={setSearchText} searchText={searchText} />
        </div>
        <div>
          <Filter filterStatus ={filterStatus} setFilterStatus ={setFilterStatus}/>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList todos={todosAfterSearch} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>

      </div>
    </div>
  )
}

export default ListTodo