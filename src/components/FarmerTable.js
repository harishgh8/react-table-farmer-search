import React, { useMemo, useState } from "react";
import { useTable, useFilters } from "react-table";
import FarmerSearch from "./FarmerSearch";
import "./table.css";

const FarmerTable = ({ farmerData }) => {
  const Columns = [
    {
      Header: "Farmer Name",
      accessor: "farmer_name",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Crop Protection Spend",
      accessor: "cp_spend",
    },

    {
      Header: "Seed (Bags)",
      accessor: "seed_purchases",
    },
  ];
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => farmerData, [farmerData]);

  const [filterInput, setFilterInput] = useState("");
  const handleChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("farmer_name", value);
    setFilterInput(value);
  };
  console.log(data);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );
  return (
    <>
      <FarmerSearch propFunction={handleChange} filterInput={filterInput} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FarmerTable;
