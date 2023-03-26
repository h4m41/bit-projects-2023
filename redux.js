import { createSlice } from '@reduxjs/toolkit'

const initialState = {
loading:false,
data: {language:''},
error: "",
}

const userSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    english:(state)=>{state.data ={language:"En"}},
    kurdish:(state) =>{state.data={language:''}}
  }
});

export const {english , kurdish} = userSlice.actions

export default userSlice.reducer