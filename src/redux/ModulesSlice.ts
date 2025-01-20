import { createSlice } from '@reduxjs/toolkit'
import { IModules } from '../interfaces'

export const slice = createSlice({
  name: 'modules',
  initialState: [] as IModules[],
  reducers: {
    setModules(state, { payload }) {
      return payload
    }
  }
})

export const { setModules } = slice.actions

export const selectModules = (state: any) => {return state.modules}

export default slice.reducer