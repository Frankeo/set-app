import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchParams } from "./APIResponsesTypes";

interface searchParamsState {
  value: searchParams;
}

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  } as unknown as searchParamsState,
  reducers: {
    all: (state, action: PayloadAction<searchParams>) => {
      state.value = action.payload;
    },
  },
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
