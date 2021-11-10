import { configureStore } from '@reduxjs/toolkit';
import questionaire from './questionaire/questionaire';


export default configureStore({
  reducer: {
    questionaire
  },
})