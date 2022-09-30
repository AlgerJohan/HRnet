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
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const Filtering = (props) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = props.data.filter(
    (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  // const filteredItems = props.data.filter(
  //   (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  // );
  // const filteredItems = props.data.filter(
  //   (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  // );

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
      selector: (row) => row.startDate,
    },
    {
      name: "Department",
      sortable: true,
      selector: (row) => row.department,
    },
    {
      name: "Date of Birth",
      sortable: true,
      selector: (row) => row.dateOfBirth,
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

  return (
    <DataTable
      columns={columns}
      data={props.data}
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
