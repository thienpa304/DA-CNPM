import { createSlice } from '@reduxjs/toolkit'

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    admin:true,
    customer:true,
  },
  reducers: {
    adminOn: (state) => {
      
      state.admin = true
    },
    adminOff: (state) => {
      state.admin =false
    },
    customerOn: (state) => {
      
      state.customer = true
    },
    customerOff: (state) => {
      state.customer =false
    },
  },
})

// Action creators are generated for each case reducer function
export const { adminOn, adminOff, customerOn, customerOff } = authorSlice.actions

export default authorSlice.reducer