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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Search from 'components/Search';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const columns = [
    { id: 'OrderId', label: "OrderId", minWidth: 150 },
    { id: 'PackageName', label: "Package Name", minWidth: 150 },
    { id: 'UserName', label: "User Name", minWidth: 150 },
    { id: 'DeliveryBoy', label: "DeliveryBoy", minWidth: 150 },
    { id: 'Area', label: "Area", minWidth: 150 },
    { id: 'Slot', label: "Slot", minWidth: 100 },
    { id: 'Status', label: "Status", minWidth: 100 },
    { id: 'View', label: "View", minWidth: 100 },

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
    const [area, setArea] = React.useState('');
    const [search, setSearch] = useState("");
    const [id, setId] = useState("");
    const [productId, setProductId] = useState("");

    const [deliveryBoy, setDeliveryBoy] = React.useState('');
    const [deliveryTripId, setDeliveryTripId] = React.useState('');
    const [slotId, setSlotId] = React.useState('');
    const [packageId, setPackageId] = React.useState('');
    const [packageOrderId, setPackageOrderId] = React.useState('');
    const [packageName, setpackageName] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [productName, setProductName] = React.useState("");
    const [productImg, setProductImg] = React.useState("");
    const [statusOrder, setStatusOrder] = React.useState('');
    const [dataDeliveryTrip, setDataDeliveryTrip] = useState([]);
    const [dataDeliveryMan, setDataDeliveryMan] = useState([]);
    const [dataPackageorder, setDataPackageorder] = useState([]);
    const [dataPackage, setDataPackage] = useState([]);
    const [dataStation, setDataStation] = useState([]);
    const [dataAcc, setDataAcc] = useState([]);
    const [dataOrder, setDataOrder] = useState([]);
    const [dataOrderDetail, setDataOrderDetail] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    
    const handleClickOpen = (data) => {
        console.log("111111", data);
        dataOrderDetail.map(item =>{
            if(item.orderId == data.id){
                dataProduct.map(product => {
                    if(product.id == item.productId)  {
                        setProductImg(product.img)
                        setProductName(product.title)
                    }
                })
            }
        })
        setOpen(true);
        setId(data.id);
        setDeliveryTripId(data.deliveryTripId);
        setPackageOrderId(data.pacakeOrderId);
        setSlotId(data.slotId);
        setSelectedValue(data);
    };
    


    const handleClose = () => {
        setOpen(false);

    };
    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };
    const handleChangeDeliveryBoy = (event) => {
        setDeliveryBoy(event.target.value);
    };
    const handleChangeSlot = (event) => {
        setSlotId(event.target.value);
    };
    function createData(data) {
        let OrderId= data.id;

        let PackageName;
        dataPackageorder.map(item => {
            if (data.pacakeOrderId == item.id) {
                dataPackage.map(itemPack => {
                    if (itemPack.id == item.packageId) {
                        return PackageName = itemPack.title
                    }
                })
            }
        })
        let UserName;
        dataPackageorder.map(item => {
            if (data.pacakeOrderId == item.id) {
                dataAcc.map(name => {
                    if (name.id == item.customerId) {
                        return UserName = name.fullname
                    }
                })
            }
        })
        let DeliveryBoy;
        dataDeliveryTrip.map(local => {
            if (data.deliveryTripId == local.id) {
                dataDeliveryMan.map(name => {
                    if (name.id == local.deliveryManId) {
                        return DeliveryBoy = name.fullName
                    }
                })
            }
        })
        let Area;
        dataPackageorder.map(item => {
            if (data.pacakeOrderId == item.id) {
                dataStation.map(station => {
                    if (station.id == item.stationId) {
                        return Area = station.title
                    }
                })
            }
        })
        let Slot;
        dataSlot.map(slot => {
            if (slot.id == data.slotId) {
                return Slot = slot.name
            }
        })
        let Status = data.status;
        let View = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8" onClick={() => handleClickOpen(data)}>
            <RemoveRedEyeIcon />
        </button>);


        return { OrderId, PackageName, UserName, DeliveryBoy, Area, Slot, Status, View };
    }
    let Id;
    if (selectedValue.id != undefined) {
        Id = (<div className='max-w-5xl my-5 mx-auto'>
            <TextField className='w-96 my-5' onChange={e => setId(e.target.value)} defaultValue={selectedValue.id} disabled id="outlined-basic" label="Id" variant="outlined" />
        </div>)
    } else {
        Id = (<div className='max-w-5xl my-5 mx-auto'>
            <TextField className='w-96 my-5' onChange={e => setId(e.target.value)} defaultValue={selectedValue.id} id="outlined-basic" label="Id" variant="outlined" />
        </div>)
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
    const dataSlot = [
        { id: 1, name: "  Morning", location: "139-141 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh" },
        { id: 2, name: "Noon", location: "161 Xa Lộ Hà Nội, P. Thảo Điền, Q.2, TP. Hồ Chí Minh" },
        { id: 3, name: "Afternoon", location: "1311 Ông Cao Thắng, P.Tân Kì, Q.10, TP. Hồ Chí Minh" },

    ]

    useEffect(() => {
        featchDeliveryManList();
        featchAccList();
        featchStationList();
        featchDeliveryTripList();
        featchOrderList();
        featchPackageOrderList();
        featchProductList();
        featchOrderDetailList();
        featchPackageList();
        setPage(0);
    }, [search]);
    var today = new Date();
    var date = (today.getDate().length < 2 ? '0' + today.getDate() : today.getDate()) + ' - '
        + ((today.getMonth() + 1).length < 2 ? (today.getMonth() + 1) : '0' + (today.getMonth() + 1)) + ' - '
        + today.getFullYear();
    var InDay = today.getFullYear() + '-' +
        ((today.getMonth() + 1).length < 2 ? (today.getMonth() + 1) : '0' + (today.getMonth() + 1))
        + '-' + (today.getDate().length < 2 ? '0' + today.getDate() : today.getDate());
    async function featchDeliveryManList() {
        try {


            const requestURL = `http://www.subcriptionmilk.somee.com/api/DeliveryMen`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataDeliveryMan(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }
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
    async function featchStationList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/Stations/Getallstations`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataStation(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }

    async function featchDeliveryTripList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/DeliveryTrips/Getalldeliverytrip`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataDeliveryTrip(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }

    async function featchOrderList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/Orders/Getallorder?search=${InDay}`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataOrder(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }

    async function featchPackageOrderList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/PackageOrders/Getallpackageorder`;

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
            const requestURL = `http://www.subcriptionmilk.somee.com/api/Packages/Getallpackages?search=`;

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

    async function featchOrderDetailList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/OrderDetails`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataOrderDetail(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }

    async function featchProductList() {
        try {
            const requestURL = `http://www.subcriptionmilk.somee.com/api/Products/Getallproduct`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataProduct(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }


    const rows1 = dataOrder.map((data, index) => {
        return (createData(data));
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
                        Order In {date} / ({rows1.length})
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
                                    {dataDeliveryMan.map((delivery, index) => {
                                        return (
                                            <MenuItem key={index} value={delivery.id} >{delivery.fullName}</MenuItem>
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
                                    {dataStation.map((area, index) => {
                                        return (
                                            <MenuItem key={index} value={area.id} >{area.title}</MenuItem>
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
                                    value={slotId}
                                    label="Slot"
                                    onChange={handleChangeSlot}
                                >
                                    {dataSlot.map((slot, index) => {
                                        return (
                                            <MenuItem key={index} value={slot.id} >{slot.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                </div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle id="" onClose={handleClose}>
                        Information Order Detail
                    </BootstrapDialogTitle>
                    <DialogContent dividers >

                        {Id}


                        <div className='max-w-5xl my-5 mx-auto'>
                            <TextField className='w-96 my-5' defaultValue={productName} autoComplete='off' id="outlined-basic" label="Product" variant="outlined" />
                        </div>
                        <div className='max-w-5xl my-5 mx-auto'>
                            <img alt="" className=' h-64 w-64 my-5' src={productImg}/>
                        </div>
                    </DialogContent>

                </BootstrapDialog>
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