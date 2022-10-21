import React, { useState, useEffect } from 'react';
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
  const [filterStatus, setFilterStatus] = useState('All');
  const [listStatus,setListStatus] = useState(todos); 
  useEffect(() => {
    setListStatus(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //toLowerCase() : không phân biệt chữ hoa chữ thường
  //includes : phát hiện chữ cái có trong từ bạn muốn tìm
  const todosAfterSearch = todos.filter(x => x.title.toLowerCase().includes(searchText));

  useEffect(()=>{
    switch (filterStatus){
      case 'All':
        setListStatus(todosAfterSearch); 
      break;
      case 'Completed':
        setListStatus(todosAfterSearch.filter((todo)=>todo.completed === true));
      break;
      case 'Todo': 
        setListStatus(todosAfterSearch.filter((todo)=>todo.completed === false));
      break;
      default : 
    }
  },[filterStatus,searchText,todosAfterSearch]);

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
          <Filter filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            setListStatus ={setListStatus}
            />
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
          <TodosList todos={listStatus} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>

      </div>
    </div>
  )
}

export default ListTodo