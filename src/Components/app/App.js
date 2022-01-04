import React, { useState } from "react";
import PostListItem from '../postListItem';
import "./app.css";

function App() {

  const data = [
    {"label": "dsadsadasda", "description": "", "id": "1", "isDone": "false"},
    {"label": "cxzczxvczxczccxczxzczc", "description": "", "id": "2", "isDone": "false"},
    {"label": "qweqwrtertretwrt", "description": "", "id": "3", "isDone": "false"},
    {"label": "dkjhhkjhkjkghkg", "description": "", "id": "4", "isDone": "false"},
    {"label": "vcxcvcxbvmnbvmnvb", "description": "", "id": "5", "isDone": "false"}
  ];

  const [todos, setTodos] = useState(data);

  const getRandomDescription = () => {

    const random = Math.floor(Math.random() * 4) + 1;

    const index = data.findIndex(element => element.id == random);

    const element = data[index];
    const newDescription = element.label;

    return newDescription;
  };

  data.map((item) => {
    item.description = getRandomDescription();
  });

  // Переключение завершенных постов
  const onToggleDone = (id) => {
    const newTodos = [...todos];

    if (newTodos[id - 1].isDone === "true") {
      newTodos[id - 1].isDone = "false";
    } else {
      newTodos[id - 1].isDone = "true";
    }
    
    setTodos(newTodos);
  };

  return (
    <div className="app">
        <div className='wrapper'>
            <div className='first-rotate-card'></div>
            <div className='second-rotate-card'></div>
            <div className='post-card'>
            <div className='header-container'>
                <h1>Todo list</h1>
                <div className='add-button'><button>Add</button></div>
            </div>
                <div>
                    {todos.map((item) => {
                      return (
                          <li key={item.id}
                          className='post-list-item'
                          >
                              <PostListItem 
                                  onToggleDone={onToggleDone}
                                  item={item} 
                              />
                          </li>     
                      );
                  })}
                </div>
            </div>
            <div className='author'>&#169; 2022 Omukhov Artem</div>
        </div>
    </div>
  );
}

export default App;
