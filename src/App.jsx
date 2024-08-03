import React, { useState } from 'react';
import { Input, Button, List } from 'antd';
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };
  const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
      };
    const handleInputChange = (e) => {
      setNewTodo(e.target.value);
        };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>
      <Input
        placeholder="Enter a todo"
        value={newTodo}
        onChange={handleInputChange}
        onPressEnter={handleAddTodo}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <List
        style={{ marginTop: '20px', width: '300px',fontWeight: "bold", }}
        bordered
        onChange={handleSearchChange}
        dataSource={todos
          .filter((todo) => todo.includes(searchValue))
          .map((todo, index) => (
            <li key={index}>
              <span>
                <img
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="avatar"
                  width="20"
                  height="20"
                />
                {todo}
              </span>
            </li>
          ))}
        renderItem={(item) => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
