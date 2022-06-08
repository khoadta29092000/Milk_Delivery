import * as React from 'react';
import { Link } from 'react-router-dom';
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


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
        id: 'Action',
        label: 'Action',
        minWidth: 100,
        align: '',
    },
];
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function Content() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const handleClickOpen = (data) => {
        console.log("111111", data);
        setOpen(true);
        setSelectedValue(data);
    };
    const handleClose = () => {
        setOpen(false);

    };
    function createData(data) {

        let UserName = data.UserName;
        let FullName = data.FullName;
        let PhoneNumber = data.PhoneNumber;
        let Action = (
            <div>
                <button className="text-white  outline-none bg-lightblue1 rounded-lg   h-8 w-8" >
                    <Link
                        to={{
                            pathname: "/DeliveryBoyDetail",
                            state: {
                                name: data.id
                            }
                        }} className=""> 
                      <RemoveRedEyeIcon />
                    </Link>
                </button>
                <button className="text-white mx-2  outline-none bg-blue-600 rounded-lg   h-8 w-8" onClick={() => handleClickOpen(data)}>
                    <EditIcon />
                </button>
                <button className="text-white  outline-none bg-red-600 rounded-lg   h-8 w-8">
                    <DeleteIcon />
                </button>
            </div>
        );
        let Image = (
            <img
                src={data.img}
                loading="lazy"
                className='h-28 w-28'
            />)
        return { Image, UserName, FullName, PhoneNumber, Action };
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

    let Id;
    if (selectedValue.id != undefined) {
        Id = (<div className='max-w-5xl my-5 mx-auto'>
            <TextField className='w-96 my-5' defaultValue={selectedValue.id} disabled id="outlined-basic" label="Id" variant="outlined" />
        </div>)
    } else {
        Id = (<div className='max-w-5xl my-5 mx-auto'>
            <TextField className='w-96 my-5' defaultValue={selectedValue.id}   id="outlined-basic" label="Id" variant="outlined" />
        </div>)
    }


    console.log("----------", page, rowsPerPage)

    const data = [
        { id: 1, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928", password: "khoa" },
        { id: 2, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "Ytiet@gmail.com", FullName: "Y Tiết", phone: "0151234156", password: "khoa" },
        { id: 3, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 4, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 5, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 6, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 7, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 8, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 9, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 10, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 11, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },
        { id: 12, img: "https://video.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/169145499_493556071827341_1392585511388666934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=v2aO4n689XUAX8wZK87&_nc_ht=video.fsgn2-2.fna&oh=00_AT-xIG9h9kjt_UeDR1i2nAwgcUttD9KxkrGWqAVluQfEjw&oe=62C3AAA2", UserName: "tiensidien1234@gmail.com", FullName: "Đỗ Trần Anh Khoa", phone: "0335739928" },

    ]

    const rows1 = data.map((data, index) => {

        return (createData(data))

    })

    const rows = [
    ];

    return (
        <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
            <Paper className='' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableHead >
                    <div className='pt-2 pl-4 block font-semibold text-xl'>
                        Delivery Boy Management
                    </div>
                </TableHead>
                <button className='bg-blue-600 text-white rounded-md ml-5 my-6 py-2 px-4' onClick={handleClickOpen}>
                    Add Delivery Boy
                </button>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add Delivery Boy
                    </BootstrapDialogTitle>
                    <DialogContent dividers >
                       {Id}
                        <div className='max-w-5xl my-5 mx-auto'>
                            <TextField className='w-96 my-5' defaultValue={selectedValue.UserName} id="outlined-basic" label="Full Name" variant="outlined" />
                        </div>
                        <div className='max-w-5xl my-5 mx-auto'>
                            <TextField className='w-96 my-5' defaultValue={selectedValue.FullName} autoComplete='off' id="outlined-basic" label="Username" variant="outlined" />
                        </div>
                        <div className='max-w-5xl my-5 mx-auto'>
                            <TextField className='w-96 my-5' autoComplete='off' defaultValue={selectedValue.password} id="outlined-basic" label="Password" variant="outlined" type="password" />
                        </div>
                        <div className='max-w-5xl my-5 mx-auto'>
                            <TextField className='w-96 my-5' defaultValue={selectedValue.phone} id="outlined-basic" label="Phone" variant="outlined" />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Save
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
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

