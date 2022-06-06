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
        id: 'Category',
        label: 'Category',
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
    function createData(img, Title, Category) {
        let  Image = (
            <img
            src={img}
            loading="lazy"
            className='h-28 w-28'
          />)
        let Edit = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
            <EditIcon />
        </button>);
        let Delete = (<button className="text-white  outline-none bg-blue-600 rounded-lg   h-8 w-8">
            <DeleteIcon />
        </button>);

        return { Image, Title, Category, Edit, Delete };
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
        { img: "https://product.hstatic.net/1000282430/product/sua-thanh-trung-khong-duong-180ml_81962797a0a2467dba94cc75c2f642d0.jpg", Title: "Sữa Đà Lạt",Category : "Fresh Milk" },
        { img: "https://cdn.tgdd.vn/Products/Images/2386/92114/bhx/thung-12-hop-sua-tuoi-tiet-trung-th-true-milk-nguyen-chat-hop-1-lit-201903131359109964.jpg", Title: "Th",Category : "Fresh Milk"  },
        { img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872", Title: "FBT Milk",Category : "Fresh Milk"  },
        { img: "https://cdn.tgdd.vn/Files/2019/10/03/1204592/sua-hat-la-gi-sua-thao-moc-la-gi-tac-dung-sua-hat-doi-voi-suc-khoe.jpg", Title: "Sữa óc chó",Category : "Sữa hạt"  },
        { img: "https://tuikhoeconban.com/wp-content/uploads/2019/03/cach-lam-sua-hat-oc-cho.jpg", Title: "Sữa đậu phộng",Category : "Sữa hạt"  },      
    ]

    const rows1 = data.map((data, index) => {
        return (createData(data.img, data.Title, data.Category))
    })

    const rows = [
    ];

    return (
        <section className=" ml-0 xl:ml-64  px-5 pt-10  ">
            <Paper className='mt-24 ' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableHead >
                    <div className='pt-2 pl-4 block font-semibold text-xl'>
                        Product Management
                    </div>
                </TableHead>
                <button className='bg-blue-600 text-white rounded-md ml-5 my-6 py-2 px-4'>
                    Add Product
                </button>
                <div className='pr-5 my-6 float-right'>
                    <Paper
                        component="form"

                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Product"
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