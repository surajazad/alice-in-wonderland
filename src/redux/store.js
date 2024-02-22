import { configureStore } from '@reduxjs/toolkit'
import giftReducer from './gift'

export const store = configureStore({
  reducer: {
    categoriesData: giftReducer
  },
})