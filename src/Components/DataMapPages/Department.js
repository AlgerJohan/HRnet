// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editData } from "../../features/homePageSLice";
// const Select = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.homePage.value);

//   const handleSelect = (e) => {
//     setSelectedOption(e.target.value);
//     dispatch(editData(data));
//   };
//   return (
//     <>
//       <label htmlFor="department">Department</label>
//       <select value={selectedOption} name="department" id="department" onChange={handleSelect}>
//         <option value="">Select a department</option>
//         <option value="Sales">Sales</option>
//         <option value="Marketing">Marketing</option>
//         <option value="Engineering">Engineering</option>
//         <option value="Human Resources">Human Resources</option>
//         <option value="Legal">Legal</option>
//       </select>
//     </>
//   );
// };

// export default Select;
