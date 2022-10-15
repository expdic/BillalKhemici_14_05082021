import { createSlice } from "@reduxjs/toolkit"; 

const userSlice = createSlice({
    name: "usersList",
    initialState: {
        value: [],
    },
    reducers: {
      userStore: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { userStore} = userSlice.actions;

export default userSlice.reducer; 