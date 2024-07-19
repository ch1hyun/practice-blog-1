import React from 'react';
import './App.css';
import BoardListItem from 'components/BoardItem';
import latestBoardListMock from 'mocks/latest-board-list.mock';

function App() {
  return (
    <>
    {latestBoardListMock.map(boardListItem => <BoardListItem boardListItem={boardListItem}/>)}
    </>
  );
}

export default App;
