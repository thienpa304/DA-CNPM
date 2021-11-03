import { configureStore } from '@reduxjs/toolkit'
import authorReducer from '../reducers/author'

export default configureStore({
  reducer: {
    author: authorReducer,
  },
})