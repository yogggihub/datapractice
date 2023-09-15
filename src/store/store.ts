import { configureStore } from "@reduxjs/toolkit";
import foodDetailsSlice from "../store/foodDetailsSlice";
const store = configureStore({
  reducer: {
    foodDetails: foodDetailsSlice,
  },
});
export default store;
