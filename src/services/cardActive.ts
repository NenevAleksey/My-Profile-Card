import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IActiveState {
   cardActive: string
}

const initialState:IActiveState = {
   cardActive: 'about'
}

export const activeSlice = createSlice({
   name: 'active',
   initialState,
   reducers: {
      changeCardActive: (state, action: PayloadAction<string>) => {
         state.cardActive = action.payload
      }
   },
})

export const { changeCardActive } = activeSlice.actions

export default activeSlice.reducer