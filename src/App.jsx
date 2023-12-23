import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadGames } from './actions/gameActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames())
  })

  return (
    <>
      <div>IGNITE APP</div>
    </>
  )
}

export default App
