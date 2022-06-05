import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const columns = [
  { id: 'Email', label: "Email", minWidth: 150 },
  {
    id: 'FullName',
    label: 'FullName',
    minWidth: 150,
    align: '',
  },
  {
    id: 'Active',
    label: 'Active',
    minWidth: 100,
    align: '',
  },
  {
    id: 'View',
    label: 'View',
    minWidth: 100,
    align: '',
  },
];


export default function Content() {
  function createData(Email, FullName, status) {
    let View = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
      <RemoveRedEyeIcon />
    </button>);
    let Active;
    if (status == true) {
      Active = (
        <button className="text-white  outline-none bg-green-500 px-3 py-2 rounded-xl  ">
          Active
        </button>)
    } else {
      Active = (
        <button className="text-white  outline-none bg-red-500 px-3 py-2 rounded-xl  ">
          Not Active
        </button>)
    }
    return { Email, FullName, Active, View };
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("----------", page, rowsPerPage)

  const data = [
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: "a" },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: false },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
    { Email: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", status: true },
  ]

  const rows1 = data.map((data, index) => {

    return (createData(data.Email, data.FullName, data.status))

  })

  const rows = [
  ];

  return (
    <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
        <Paper className='mt-24 ' sx={{ width: '100%', overflow: 'hidden' }}>
      <TableHead >
        <div className='pt-2 pl-4 block font-semibold text-xl'>
          Users Management
        </div>
      </TableHead>
      <div className='pr-5 my-6 float-right'>
        <Paper
          component="form"

          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Member"
            inputProps={{ 'aria-label': 'Search Product' }}
          />
          <IconButton className='' sx={{ p: '10px', outline: "none" }} >
            <SearchIcon />
          </IconButton>

        </Paper>
      </div>
      <TableContainer sx={{ }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className='z-0'>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}

                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];


                      return (
                        <TableCell key={column.id} >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper> 
    </section>
  );
}