import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) ?? false
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   login: (state,action) => {
    localStorage.setItem('user',JSON.stringify(action.payload));
    state.user = action.payload
   },
   logut: (state) => {
    localStorage.removeItem('user');
    state.user = false;
   }
  },
})

export const { login, logut } = auth.actions

export default auth.reducer