import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "./APIResponsesTypes";

interface AdoptedPetState {
  value: Pet | null;
}

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  } as AdoptedPetState,
  reducers: {
    adopt: (state, action: PayloadAction<Pet>) => {
      state.value = action.payload;
    },
  },
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
