import {configureStore} from "@reduxjs/toolkit";
import  appreducer  from "./appslice";
const store = configureStore({
  reducer: {
    app: appreducer,
  },
});
export default store;