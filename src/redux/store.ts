import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import modulesReducer from './ModulesSlice'
import themeReducer from './ThemeSlice'
import filiaisReducer from './FiliaisSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    modules: modulesReducer,
    theme: themeReducer,
    filiais: filiaisReducer
  }
})