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
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Search from 'components/Search';
const columns = [
    { id: 'PackageOrder', label: "Package Order", minWidth: 150 },
    { id: 'UserName', label: "User Name", minWidth: 150 },
    {
        id: 'PackageName',
        label: 'PackageName',
        minWidth: 150,
    },
    {
        id: 'StartDay',
        label: 'Start Day',
        minWidth: 100,
    },
    {
        id: 'EndDay',
        label: 'End Day',
        minWidth: 100,
    },
    {
        id: 'View',
        label: 'View',
        minWidth: 100,
    },
];


export default function Content() {
    const [dataAcc, setDataAcc] = useState([]);
    const [dataPackageorder, setDataPackageorder] = useState([]);
    const [dataPackage, setDataPackage] = useState([]);
    const [search, setSearch] = useState("");
    function createData(data) {
        let UserName= data.fullName;
        let PackageOrder= data.id;
     let PackageName;
        
                dataPackage.map(itemPack => {
                    if (itemPack.id == data.packageId) {
                        return PackageName = itemPack.title
                    }
                })
           
        let StartDay = data.startTime.slice(8,10) + "/" +data.startTime.slice(5,7) + "/" + data.startTime.slice(0,4);
        let EndDay = data.endTime.slice(8,10) + "/" +data.endTime.slice(5,7) + "/" + data.endTime.slice(0,4);
        let View = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
       
        <Link to={{
                            pathname: "/PackageOrderManagement/Details",
                            state: {
                                name: data.id
                            }
                        }}> <RemoveRedEyeIcon /></Link>
      </button>);
        return { PackageOrder, UserName, PackageName, StartDay, EndDay, View };
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
    useEffect(() => {   
        featchAccList();
        featchPackageOrderList();
        featchPackageList();
        setPage(0);
    }, [search]);
    async function featchAccList() {
        try {


            const requestURL = `http://www.subcriptionmilk.somee.com/api/Accounts`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataAcc(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }
    async function featchPackageOrderList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/PackageOrders/Getallpackageorder?search=${search}`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataPackageorder(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }
    async function featchPackageList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/Packages/Getallpackages`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataPackage(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }
    const rows1 = dataPackageorder.map((data, index) => {
        return (createData( data));
    })

    const rows = [
    ];
    const callbackSearch = (childData) => {
        setSearch(childData)

    };

    return (
        <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
            <Paper className='' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableHead >
                    <div className='pt-2 pl-4 block font-semibold text-xl'>
                    Package Order Management
                    </div>
                </TableHead>
                <div className='pr-5 my-6 float-right'>
                <Search parentCallback={callbackSearch} />
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