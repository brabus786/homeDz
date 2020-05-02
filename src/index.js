import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/App-heder';
import SearchPanel from './components/Search-panel';
import ToDoList from './components/To-do-list';

const App = () => {
  return(
    <>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));