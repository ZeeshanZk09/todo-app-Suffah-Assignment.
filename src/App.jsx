import React, { useState } from 'react';
import { Input, Button, List } from 'antd';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>
      <Input
        placeholder="Enter a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onPressEnter={handleAddTodo}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <List
        style={{ marginTop: '20px', width: '300px' }}
        bordered
        dataSource={todos}
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
