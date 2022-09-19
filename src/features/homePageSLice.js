import { createSlice } from "@reduxjs/toolkit";

export const homePageSlice = createSlice({
  name: "homePage",
  initialState: {
    value: null,
  },
  reducers: {
    setValue: (state, action) => {
      state.firstName = action.firstName;
      state.lastName = action.payload.lastName;
      state.startDate = action.payload.startDate;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;
      state.DateOfBirth = action.payload.DateOfBirth;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.State = action.payload.State;
    },
  },
});

export const { setValue } = homePageSlice.actions;
export default homePageSlice.reducer;
