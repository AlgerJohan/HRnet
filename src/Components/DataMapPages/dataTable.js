import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #625fed;
  color: #fff;
  border: 0;
  cursor: pointer;
`;

/* Creating the columns for the table. */
const columns = [
  {
    name: "First Name",
    sortable: true,
    selector: (row) => row.firstName,
  },
  {
    name: "Last Name",
    sortable: true,
    selector: (row) => row.lastName,
  },
  {
    name: "Start Date",
    sortable: true,
    selector: (row) => {
      const dateArray = row.startDate.split("T")[0].split("-");
      return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    },
  },
  {
    name: "Department",
    sortable: true,
    selector: (row) => row.department,
  },
  {
    name: "Date of Birth",
    sortable: true,
    selector: (row) => {
      const dateArray = row.dateOfBirth.split("T")[0].split("-");
      return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    },
  },
  {
    name: "Street",
    sortable: true,
    selector: (row) => row.street,
  },
  {
    name: "City",
    sortable: true,
    selector: (row) => row.city,
  },
  {
    name: "State",
    sortable: true,
    selector: (row) => row.state,
  },
  {
    name: "Zip Code",
    sortable: true,
    selector: (row) => row.zipCode,
  },
];

/**
 * It's a function that takes in a filterText, onFilter, and onClear function and returns a TextField
 * and ClearButton component.
 */
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Search"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

/**
 * @param props The props passed in from the parent component.
 */
const Filtering = (props) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = props.data.filter(
    (item) =>
      item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
      item.department.toLowerCase().includes(filterText.toLowerCase()) ||
      item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) ||
      item.street.toLowerCase().includes(filterText.toLowerCase()) ||
      item.city.toLowerCase().includes(filterText.toLowerCase()) ||
      item.state.toLowerCase().includes(filterText.toLowerCase()) ||
      item.zipCode.toLowerCase().includes(filterText.toLowerCase())
  );

  /* Using useMemo to memoize the subHeaderComponent. */
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      defaultSortFieldId={1}
      subHeader
      persistTableHead
      highlightOnHover
      pointerOnHover
      subHeaderComponent={subHeaderComponentMemo}
      paginationResetDefaultPage={resetPaginationToggle}
    />
  );
};
export default Filtering;
