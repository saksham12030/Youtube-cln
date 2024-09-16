import {configureStore} from "@reduxjs/toolkit";
import  appreducer  from "./appslice";
import  chatreducer  from "./chatslice";
const store = configureStore({
  reducer: {
    app: appreducer,
    chat:chatreducer,
  },
});
export default store;