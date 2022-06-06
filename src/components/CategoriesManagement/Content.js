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
    { id: 'Image', label: "Image", minWidth: 150 },
    {
        id: 'Title',
        label: 'Title',
        minWidth: 150,
    },
    {
        id: 'Product',
        label: 'Product',
        minWidth: 100,
    },
    {
        id: 'Edit',
        label: 'Edit',
        minWidth: 100,
    },
    {
        id: 'Delete',
        label: 'Delete',
        minWidth: 100,
    },
];


export default function Content() {
    function createData(img, Title) {
        let Image = (
            <img
                src={img}
                loading="lazy"
                className='h-28 w-28'
            />)
        let Product = (
            <button className="text-white  outline-none bg-green-500 px-3 py-2 rounded-xl  ">
                View Products
            </button>)
        let Edit = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
            <EditIcon />
        </button>);
        let Delete = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
            <DeleteIcon />
        </button>);

        return { Image, Title, Product, Edit, Delete };
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
        { img: "http://gng.invatomarket.com/public/storage/uploads/GWd73gWqR3xAq0w9L3tHsG3SmFP9B3inxgmvzK9P.png", Title: "Fresh Milk, Milk" },
        { img: "http://gng.invatomarket.com/public/storage/uploads/GWd73gWqR3xAq0w9L3tHsG3SmFP9B3inxgmvzK9P.png", Title: "Sữa hạt, Milk" },
        { img: "http://gng.invatomarket.com/public/storage/uploads/GWd73gWqR3xAq0w9L3tHsG3SmFP9B3inxgmvzK9P.png", Title: "Sữa đậu nành, Milk" },
        { img: "http://gng.invatomarket.com/public/storage/uploads/GWd73gWqR3xAq0w9L3tHsG3SmFP9B3inxgmvzK9P.png", Title: "Sữa đậu, Milk" },
        { img: "http://gng.invatomarket.com/public/storage/uploads/GWd73gWqR3xAq0w9L3tHsG3SmFP9B3inxgmvzK9P.png", Title: "kem, Milk" },

    ]

    const rows1 = data.map((data, index) => {
        return (createData(data.img, data.Title))
    })

    const rows = [
    ];

    return (
        <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
            <Paper className='mt-24 ' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableHead >
                    <div className='pt-2 pl-4 block font-semibold text-xl'>
                        Category Management
                    </div>
                </TableHead>
                <button className='bg-blue-600 text-white rounded-md ml-5 my-6 py-2 px-4'>
                    Add Category
                </button>
                <div className='pr-5 my-6 float-right'>
                    <Paper
                        component="form"

                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Category"
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