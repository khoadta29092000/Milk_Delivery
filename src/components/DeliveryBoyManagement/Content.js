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
    { id: 'Image', label: "Image", minWidth: 150 },
    { id: 'UserName', label: "User Name", minWidth: 150 },
    {
        id: 'FullName',
        label: 'Full Name',
        minWidth: 150,
        align: '',
    },
    {
        id: 'PhoneNumber',
        label: 'Phone Number',
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
    function createData(img, UserName, FullName, PhoneNumber) {
        let View = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
            <RemoveRedEyeIcon />
        </button>);
        let Image = (
            <img
                src={img}
                loading="lazy"
                className='h-28 w-28'
            />)
        return { Image, UserName, FullName, PhoneNumber, View };
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
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },

    ]

    const rows1 = data.map((data, index) => {

        return (createData(data.img, data.UserName, data.FullName, data.phone))

    })

    const rows = [
    ];

    return (
        <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
            <Paper className='mt-24 ' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableHead >
                    <div className='pt-2 pl-4 block font-semibold text-xl'>
                        Delivery Boy Management
                    </div>
                </TableHead>
                <button className='bg-blue-600 text-white rounded-md ml-5 my-6 py-2 px-4'>
                    Add Delivery Boy
                </button>
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