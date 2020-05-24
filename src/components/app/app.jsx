import React, { useState } from 'react';
import uuid from 'react-uuid'
import AppHeader from '../app-heder/App-heder';
import SearchPanel from '../search-panel/Search-panel';
import ToDoList from '../to-do-list/To-do-list';
import Tasks from '../tascs/tasks';
import AddTask from '../add-task/AddTask';

const App = () => {

  const todoData = [
    { label: 'drink coffee', important: false, done: false, id: uuid() },
    { label: 'learn react.js', important: false, done: false, id: uuid() },
    { label: 'i slip', important: false, done: false, id: uuid() },
  ]

  const [state, setState] = useState(todoData);

  let performed = 0;
  let left = 0;

  state.map((data) => {
    if (data.done) performed++;
  });
  left = state.length - performed;
 
  const copyState = [...state];
  const chenge = (e) => {

    console.log(e.target.value);
    let items = copyState.filter((item) =>{
       return item.label.indexOf(e.target.value) > -1;
     });
     setState(items);
     console.log(items);
  }

  const doneCheck = (id) => {
    const newState = [...state];
    const obj = newState.find((e) => {
      return e.id === id;
    });
    obj.done = !obj.done;
    setState(newState);
  }

  const deleteItem = (id) => {
    const indexObj = state.findIndex((x) => {
      return x.id === id;
    });
    const newState = [...state.slice(0, indexObj), ...state.slice(indexObj + 1)];
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
    setState(newState);
  }

  const addtask = (data) => {
    const newTask = {
      label: data.current.value,
      important: false,
      done: false,
      id: uuid(),
    };
    const newState = [...state, newTask];
    console.log(newState);
    setState(newState);
  }

  return (
    <>
      <AppHeader />
      <Tasks
        performed={performed}
        left={left}
      />
      <SearchPanel
        chenge={chenge}
      />
      <ToDoList
        todos={state}
        doneCheck={doneCheck}
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