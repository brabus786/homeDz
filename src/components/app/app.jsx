import React, { useState } from 'react';
import uuid from 'react-uuid'
import AppHeader from '../app-heder/App-heder';
import SearchPanel from '../search-panel/Search-panel';
import ToDoList from '../to-do-list/To-do-list';
import Tasks from '../tascs/tasks';
import AddTask from '../add-task/AddTask';

const App = () => {

  const todoData = [
    { label: 'drink coffee', important: false, id: uuid() },
    { label: 'learn react.js', important: false, id: uuid() },
    { label: 'i slip', important: false, id: uuid() },
  ]

  const [state, setState] = useState(todoData);

  const deleteItem = (id) => {

    const indexObj = state.findIndex((x) => {
      return x.id === id;
    });
    const newState = [...state.slice(0, indexObj), ...state.slice(indexObj + 1)];
    console.log(indexObj, state, newState);
    setState(newState);
  }

  const important = (id) => {

    const newState = [...state];
    const obj = newState.find((e) => {
      return e.id === id;
    });

    if (obj.important) {
      obj.important = false;
    } else {
      obj.important = true;
    }
    console.log(newState);
    setState(newState);
  }

  const addtask = (data) => {
    console.log(data.current.value);
    
    const newTask = {
      label: data.current.value,
      important: false,
      id: uuid(),
    };
    const newState = [...state,newTask];
    setState(newState);
  }

  return (
    <>
      <AppHeader />
      <Tasks />
      <SearchPanel />
      <ToDoList
        todos={state}
        deleteItem={deleteItem}
        important={important}
      />
      <AddTask
        addtask={addtask}
      />
    </>
  );
};

export default App;