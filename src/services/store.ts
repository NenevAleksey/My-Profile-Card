import { configureStore } from '@reduxjs/toolkit';
import activeSlice from './cardActive'

export const store = configureStore({
   reducer: {
      activeSlice,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch