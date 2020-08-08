import React from 'react';

import './App.css';
import CommentList from './components/CommentList';
import CommentBox from './components/CommentBox';


function App() {
  return (
    <div className="App">
      <CommentBox />  
      <CommentList />
    </div>
  );
}

export default App;
