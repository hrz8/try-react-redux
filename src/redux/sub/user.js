import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null
  },
  reducers: {
    init: (state) => {
      const token = localStorage.getItem('token')

      // validasi si token ke server

      if (token) {
        // kalau token ok dan usernya benar, make set value
        state.value = {
          name: 'johanna',
          email: 'johanna@email.com'
        }
      }
    },
    login: (state) => {
      // attempt to login

      // if get the token from server

      // set value and set localstorage
      if (true) {
        state.value = {
          name: 'johanna',
          email: 'johanna@email.com'
        }
  
        localStorage.setItem('token', 'abc')
      }

      // do nothing if login failed
    },
    logout: (state, params) => {
      console.log(params);
      state.value = null
      localStorage.removeItem('token')
    }
  }
});

export const {
  init,
  login,
  logout
} = userSlice.actions

export const userReducer = userSlice.reducer
