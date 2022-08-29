import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './sub/counter';
import { userReducer } from './sub/user';

export default configureStore({
  reducer: {
    counter: counterReducer,

    // example
    // app: appReducer, // { isLoading, isError, errorMessage }
    // game: gameReducer, // { runningGame[] { gameId, runningRound[] { round, playerChoice, computerChoice, win } } }
    user: userReducer, // { token, email, completeName, userId }
  },
  devTools: (import.meta.env.VITE_ENABLE_DEVTOOLS || 'true') === 'true'
})
