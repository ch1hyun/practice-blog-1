import React, { useState } from 'react';
import './App.css';
import BoardListItem from 'components/BoardItem';
import latestBoardListMock from 'mocks/latest-board-list.mock';
import Top3Item from 'components/Top3Item';
import top3BoardListMock from 'mocks/top-3-board-list.mock';
import CommentItem from 'components/CommentItem';
import commentListMock from 'mocks/comment-list.mock';
import favoriteListMock from 'mocks/favorite-list.mock';
import FavoriteItem from 'components/FavoriteItem';
import InputBox from 'components/InputBox';

function App() {

  const [value, setValue] = useState<string>('');

  return (
    <>
    <InputBox label='이메일' type='text' placeholder='이메일 주소를 입력하세요.' value={value} error={true} setValue={setValue} message='올바른 이메일 형식으로 작성해주세요.'/>
    </>
  );
}

export default App;
