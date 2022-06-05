
import Header from 'components/DefaultHeaderDashboard';
import Content from 'components/Admindashboard/Content';
import DefaultNavbarAdmin from 'components/DefaultNavbarAdmin';
import { React, useState, } from 'react';
import Modal from '@mui/material/Modal';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AdminDashboard() {
    const [openNav, setOpenNav] = useState(false);
    const handleClose = () => setOpenNav(false);

    function callbackFunction(childData) {
        setOpenNav(childData);
        console.log("111111111111111", openNav)
    }

    let modal;
    var w = window,
        d = document,
        e = d.documentElement;
    if (openNav == true) {
        modal = (<Modal
            keepMounted
            open={openNav}
            onClose={handleClose}
            className={openNav == true ? `xl:hidden visible ` : ""}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <DefaultNavbarAdmin />
        </Modal>)
    }

    return (
        <>
            <div className=' grid grid-cols-12'>
                <div className=" invisible xl:visible absolute w-64 z-10  bg-lightblue2">
                    <DefaultNavbarAdmin className="" />
                    {modal}
                </div>
                <main className="ml-0 mb-0 w-screen h-screen ">
                    <div className='absolute   z-0'>
                        <Header parentCallback={callbackFunction} className="" />
                    </div>
                    <div className='bg-gray-100'>
                        <Content />
                    </div>
                     
                </main>

               
            </div>

        </>
    );
}
