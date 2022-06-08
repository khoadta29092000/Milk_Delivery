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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const columns = [
    { id: 'PackageName', label: "Package Name", minWidth: 150 },
    { id: 'UserName', label: "User Name", minWidth: 150 },
    { id: 'DeliveryBoy', label: "DeliveryBoy", minWidth: 150 },
    { id: 'Area', label: "Area", minWidth: 150 },
    { id: 'Slot', label: "Slot", minWidth: 100 },
    { id: 'Status', label: "Status", minWidth: 100 },
    { id: 'View', label: "View", minWidth: 100 },

];


export default function Content() {
    const [area, setArea] = React.useState('');

    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };

    const [deliveryBoy, setDeliveryBoy] = React.useState('');

    const handleChangeDeliveryBoy = (event) => {
        setDeliveryBoy(event.target.value);
    };

    const [slot, setSlot] = React.useState('');

    const handleChangeSlot = (event) => {
        setSlot(event.target.value);
    };
    function createData(PackageName, UserName, DeliveryBoy, Area, Slot, status) {
        let View = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
            <RemoveRedEyeIcon />
        </button>);
        let Status;
        if (status === "Finished") {
            Status = (<div className='text-green-300'> {status} </div>)
        } else if (status === "Cancel") {
            Status = (<div className='text-red-400'> {status} </div>)
        } else {
            Status = (<div className='text-yellow-300'> {status} </div>)
        }
        return { PackageName, UserName, DeliveryBoy, Area, Slot, Status, View };
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
        { UserName: "Đỗ Trần Anh Khoa", PackageName: "3 Sữa các loại", DeliveryBoy: "Trần Duy Đan", Area: "Chung cư lô A", Slot: "Noon : 12:00 AM - 12:30 AM", Status: "Finished" },
        { UserName: "Nguyễn Quốc Bảo", PackageName: "1 Sữa Tươi, 1 Kemi", DeliveryBoy: "Trần Duy Đan", Area: "LandMark Park", Slot: "Afternoon : 5:30 AM - 6:00 AM", Status: "Pending" },
        { UserName: "Chu Đức Trí", PackageName: "3 Sữa các loại", DeliveryBoy: "Trần Duy Đan", Area: "SBTC Entertainment", Slot: "Noon : 12:00 AM - 12:30 AM", Status: "Finished" },
        { UserName: "Lê Bân Bân", PackageName: "3 Sữa các loại", DeliveryBoy: "Trần Duy Đan", Area: "Chung cư lô A", Slot: "Morning : 6:30 AM - 7:00 AM", Status: "Cancel" },
        { UserName: "Phạm Thị Hồng Ty", PackageName: "2 Sữa đậu, 1 Sữa hạt", DeliveryBoy: "Trần Duy Đan", Area: "Ocen City", Slot: "Afternoon : 5:30 AM - 6:00 AM", Status: "Pending" },
        { UserName: "Đặng Hoàng Việt", PackageName: "3 Sữa các loại", DeliveryBoy: "Trần Duy Đan", Area: "Chung cư lô A", Slot: "Noon : 12:00 AM - 12:30 AM", Status: "Finished" },

    ]

    const delivery = [
        { name: "Trần Duy đan" },
        { name: "Nguyễn Anh Tuấn" },
        { name: "Đào Lan Anh" },
    ]

    const areas = [{ id: 1, name: "Chung cư lô A", location: "139-141 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh" },
    { id: 2, name: "LandMark Park", location: "161 Xa Lộ Hà Nội, P. Thảo Điền, Q.2, TP. Hồ Chí Minh" },
    { id: 3, name: "Ocen City", location: "1311 Ông Cao Thắng, P.Tân Kì, Q.10, TP. Hồ Chí Minh" },
    { id: 4, name: "Ceberus", location: "15 Gò Xoài, P.An Đới, Q.Tân Phú, TP. Hồ Chí Minh" },
    { id: 5, name: "SBTC Entertainment", location: "415 Lê Văn Việt, P.Tân Thành, Q.9, TP. Thủ Đức" },]

    const slots = [ { name: "Morning" },
    { name: "Noon" },
    { name: "Afternoon" },]
       
  

    const rows1 = data.map((data, index) => {
        return (createData(data.PackageName, data.UserName, data.DeliveryBoy, data.Area, data.Slot, data.Status));
    })

    const rows = [
    ];

    var today = new Date();
    var date = (today.getDate().length < 2 ? today.getDate() : '0' + today.getDate()) + ' - '
        + ((today.getMonth() + 1).length < 2 ? (today.getMonth() + 1) : '0' + (today.getMonth() + 1)) + ' - '
        + today.getFullYear();

    return (
        <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
            <Paper className='mt-24 ' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableHead >
                    <div className='pt-2 pl-4 block font-semibold text-xl'>
                        Order In {date}
                    </div>
                </TableHead>
                <div className='float-left ml-5 gap-5 my-6  grid grid-cols-6'>
                    <div className='col-span-2 outline-none hover:outline-none'>
                        <Box sx={{ minWidth: 240 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Delivery Boy</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={deliveryBoy}
                                    label="Delivery Boy"
                                    onChange={handleChangeDeliveryBoy}
                                >
                                    {delivery.map((delivery, index) => {
                                        return (
                                            <MenuItem key={index} value={delivery.name} >{delivery.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='col-span-2'>
                        <Box sx={{ minWidth: 240 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Area</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={area}
                                    label="Area"
                                    onChange={handleChangeArea}
                                >
                                    {areas.map((area, index) => {
                                        return (
                                            <MenuItem key={index} value={area.name} >{area.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='col-span-1'>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={slot}
                                    label="Slot"
                                    onChange={handleChangeSlot}
                                >
                                    {slots.map((slot, index) => {
                                        return (
                                            <MenuItem key={index} value={slot.name} >{slot.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                </div>
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