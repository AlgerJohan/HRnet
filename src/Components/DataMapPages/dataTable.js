import React from "react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
// import Button from "../shared/Button";
// import faker from "faker";
// const createUser = () => ({
//   id: faker.datatype.uuid(),
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   address: faker.address.streetAddress(),
//   bio: faker.lorem.sentence(),
//   image: faker.image.avatar(),
// });
// const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser);

// const fakeUsers = createUsers(2000);

// const TextField = styled.input`
//   height: 32px;
//   width: 200px;
//   border-radius: 3px;
//   border-top-left-radius: 5px;
//   border-bottom-left-radius: 5px;
//   border-top-right-radius: 0;
//   border-bottom-right-radius: 0;
//   border: 1px solid #e5e5e5;
//   padding: 0 32px 0 16px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

// const ClearButton = styled(Button)`
//   border-top-left-radius: 0;
//   border-bottom-left-radius: 0;
//   border-top-right-radius: 5px;
//   border-bottom-right-radius: 5px;
//   height: 34px;
//   width: 32px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const FilterComponent = ({ filterText, onFilter, onClear }) => (
//   <>
//     <TextField
//       id="search"
//       type="text"
//       placeholder="Filter By Name"
//       aria-label="Search Input"
//       value={filterText}
//       onChange={onFilter}
//     />
//     <ClearButton type="button" onClick={onClear}>
//       X
//     </ClearButton>
//   </>
// );

// const [filterText, setFilterText] = React.useState("");
// const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
// const filteredItems = fakeUsers.filter(
//   (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
// );

// const subHeaderComponentMemo = React.useMemo(() => {
//   const handleClear = () => {
//     if (filterText) {
//       setResetPaginationToggle(!resetPaginationToggle);
//       setFilterText("");
//     }
//   };

//   return (
//     <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
//   );
// }, [filterText, resetPaginationToggle]);

const columns = [
  {
    name: "First Name",
    sortable: true,
    selector: (row) => row.year,
  },
  {
    name: "Last Name",
    sortable: true,
    selector: (row) => row.title,
  },
  {
    name: "Start Date",
    sortable: true,
    selector: (row) => row.StartDate,
  },
  {
    name: "Department",
    sortable: true,
    selector: (row) => row.Department,
  },
  {
    name: "Date of Birth",
    sortable: true,
    selector: (row) => row.DateOfBirth,
  },
  {
    name: "Street",
    sortable: true,
    selector: (row) => row.Street,
  },
  {
    name: "City",
    sortable: true,
    selector: (row) => row.City,
  },
  {
    name: "State",
    sortable: true,
    selector: (row) => row.State,
  },
  {
    name: "Zip Code",
    sortable: true,
    selector: (row) => row.ZipCode,
  },
];

const data = [
  {
    id: 1,
    year: "John",
    title: "Doe",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1990",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 2,
    year: "Jane",
    title: "Doe",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1991",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 3,
    year: "John",
    title: "Smith",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 4,
    year: "John",
    title: "wick",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 5,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 6,
    year: "John",
    title: "Smith",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 7,
    year: "John",
    title: "wick",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 8,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 9,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 10,
    year: "John",
    title: "wick",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 11,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 12,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 13,
    year: "John",
    title: "wick",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 14,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 15,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 16,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 17,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 18,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 19,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 20,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 21,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 22,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 23,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 24,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 25,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 26,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 27,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 28,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 29,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
  {
    id: 30,
    year: "Johan",
    title: "Jojoban",
    StartDate: "01/01/2021",
    Department: "IT",
    DateOfBirth: "01/01/1992",
    Street: "123 Main St",
    City: "New York",
    State: "NY",
    ZipCode: "12345",
  },
];

const MyComponent = () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      defaultSortFieldId={1}
      subHeader
      persistTableHead
      highlightOnHover
      pointerOnHover
      // subHeaderComponent={subHeaderComponentMemo}
      // selectableRows
      // paginationResetDefaultPage={resetPaginationToggle}
    />
  );
};
export default MyComponent;
