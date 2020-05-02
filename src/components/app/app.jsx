import React from 'react';
import AppHeader from '../app-heder/App-heder';
import SearchPanel from '../search-panel/Search-panel';
import ToDoList from '../to-do-list/To-do-list';
import Tasks from '../tascs/tasks';

const App = () => {

  const todoData = [
    {label:'drink coffee',important:false,id:1},
    {label:'learn react.js',important:false,id:2},
    {label:'i slip',important:false,id:3},
  ]

  return(
    <>
      <AppHeader />
      <Tasks />
      <SearchPanel />
      <ToDoList 
        todos={todoData}
      />
    </>
  );
};

export default App;