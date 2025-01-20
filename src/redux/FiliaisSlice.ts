import { createSlice } from '@reduxjs/toolkit'
import { IFilial } from '../interfaces'

export const slice = createSlice({
  name: 'filiais',
  initialState: {
    filiais: [] as IFilial[],
    selected: -1
  },
  reducers: {
    reduxSetFiliais(state, { payload }) {
      return {...state, filiais: payload}
    },
    reduxSelectFilial(state, { payload }) {
      return {...state, selected: payload}
    }
  }
})

export const { reduxSetFiliais, reduxSelectFilial } = slice.actions

export const reduxGetFiliais = (state: any) => {return state.filiais.filiais}
export const reduxGetSelectedFilial = (state: any) => {return state.filiais.selected}

export default slice.reducer