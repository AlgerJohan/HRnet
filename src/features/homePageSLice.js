import { createSlice } from "@reduxjs/toolkit";

export const homePage = createSlice({
  name: "homePage",
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployees: (state, { payload }) => {
      state.employees.push(payload);
    },
  },
});

export const { addEmployees } = homePage.actions;
export const selectEmployees = (state) => state.homePage.employees;
export default homePage.reducer;
