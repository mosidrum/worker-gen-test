"use client";

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import TablePagination from "@mui/material/TablePagination";
import { users } from "@/utils";
import copilot from "../../../public/copilot-icon.png";
import Image from "next/image";

export const DataTable = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (checked: boolean) => {
    if (checked) {
      const currentRows = users.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      );
      setSelected(currentRows.map((user) => user.name));
    } else {
      setSelected([]);
    }
  };

  const handleCheckboxChange = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const isChecked = (name: string) => selected.includes(name);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="flex flex-col justify-between items-start bg-white m-2 px-2 py-4 rounded-md shadow-custom-light">
      <div className="flex justify-between border rounded-md border-gray-500 py-1 my-6 px-2 w-1/3">
        <input
          className="outline-none w-full tex-sm"
          placeholder="Sort, filter and search with Copilot"
        />
        <Image src={copilot} alt="microsoft copilot" className="w-6 h-6" />
      </div>
      <Paper className="w-full">
        <TableContainer>
          <Table aria-label="user data table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 &&
                      selected.length <
                        users.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ).length
                    }
                    checked={
                      paginatedRows.length > 0 &&
                      paginatedRows.every((row) => selected.includes(row.name))
                    }
                    onChange={(e) => handleSelectAllClick(e.target.checked)}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Topic</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((user) => (
                <TableRow
                  key={user.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isChecked(user.name)}
                      onChange={() => handleCheckboxChange(user.name)}
                      inputProps={{
                        "aria-label": `select ${user.name}`,
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-blue-500">{user.name}</TableCell>
                  <TableCell>{user.topic}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.createdOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
