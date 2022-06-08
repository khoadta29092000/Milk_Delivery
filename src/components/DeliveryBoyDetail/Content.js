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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const columns = [
    {
        id: 'OrderId',
        label: 'Order Id',
        minWidth: 100,
    },
    {
        id: 'Username',
        label: 'Username',
        minWidth: 150,
    },
    {
        id: 'PackageName',
        label: 'Package Name',
        minWidth: 150,
    },
    {
        id: 'Area',
        label: 'Area',
        minWidth: 150,
    },
    {
        id: 'Status',
        label: 'Status',
        minWidth: 150,
    },
    {
        id: 'CompletedAt',
        label: 'Completed At',
        minWidth: 150,
    },
   
];


export default function Content() {
    function createData(OrderId, Username, PackageName, Area, status, CompletedAt  ) {
        let Status;
        if (status === "Finished") {
            Status = (<div className='text-green-300'> {status} </div>)
        } else if (status === "Cancel") {
            Status = (<div className='text-red-400'> {status} </div>)
        } else {
            Status = (<div className='text-yellow-300'> {status} </div>)
        }

        return {  OrderId, Username, PackageName, Area,Status, CompletedAt };
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
        { id: 1, username:"khoa", PackageName: "3 Sữa các loại" ,name: "Chung cư lô A", status: "Finished", CompletedAt: "07/06/2022" },
        { id: 2, username:"Việt", PackageName: "2 Sữa đậu, 1 Sữa hạt" ,name: "LandMark Park", status: "Finished", CompletedAt: "08/06/2022" },
        { id: 3, username:"Gosu", PackageName: "2 Sữa đậu, 1 Sữa hạt",name: "Ocen City",status: "Finished", CompletedAt: "05/06/2022" },
        { id: 4, username:"Baker", PackageName: "3 Sữa các loại",name: "Ceberus",status: "Finished", CompletedAt: "04/06/2022"  },
        { id: 5, username:"Zeros", PackageName: "3 Sữa các loại",name: "SBTC Entertainment",status: "Finished", CompletedAt: "07/06/2022"  },
    ]

    const rows1 = data.map((data, index) => {
        return (createData(data.id, data.username,  data.PackageName, data.name, data.status, data.CompletedAt,))
    })

    const rows = [
    ];

    return (
        <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
            <Paper className='5' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableHead >
                    <div className='pt-2 pl-4 block font-semibold text-xl'>
                    Areas Management
                    </div>
                </TableHead>
                <button className='bg-blue-600 text-white rounded-md ml-5 my-6 py-2 px-4'>
                    Add Areas
                </button>
                <div className='pr-5 my-6 float-right'>
                    <Paper
                        component="form"

                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'Search Product' }}
                        />
                        <IconButton className='' sx={{ p: '10px', outline: "none" }} >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <TableContainer sx={{}}>
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