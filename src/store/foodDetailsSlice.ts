import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  status: "idle",
  data: [],
};
const foodDetailsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    saveFoods(state, action: PayloadAction<string>) {
      // state.data[index] = {
      //   ...state.data[index],
      //   ...action.payload,
      // };
      // console.log(action.payload);
    },
  },
});
export const { saveFoods } = foodDetailsSlice.actions;
export default foodDetailsSlice.reducer;
