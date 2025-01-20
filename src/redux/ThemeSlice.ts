import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
  name: 'theme',
  initialState: {color: "light" as ("light" | "dark")},
  reducers: {
    setTheme(state, { payload }) {
      return {...payload}
    }
  }
})

export const { setTheme } = slice.actions

export const getTheme = (state: any) => {return state.theme}

export default slice.reducer