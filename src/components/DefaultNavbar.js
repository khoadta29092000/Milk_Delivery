import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';




export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" className="w-full" navbar>
            <NavbarContainer>
                <NavbarWrapper>
               
                        <NavbarBrand>Material Tailwind</NavbarBrand>

                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <Link to="/">
                                <NavLink
                                    ripple="light"
                                    className="my-link"
                                >
                                    <Icon name="home" size="2xl" />
                                    &nbsp;Home Page
                                </NavLink></Link>
                            <Link to="/Aboutus">
                                <NavLink
                                    ripple="light"
                                    className="my-link"
                                >
                                    <Icon name="apps" size="2xl" />
                                    &nbsp;About Us
                                </NavLink></Link>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                items
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/Product">
                                        <DropdownItem color="lightBlue">
                                            Product
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/Package">
                                        <DropdownItem color="lightBlue">
                                            Package
                                        </DropdownItem>
                                    </Link>

                                </Dropdown>
                            </div>
                            <Link to="/Subscription">
                                <NavLink
                                    rel="noreferrer"
                                    ripple="light"
                                >
                                    <SubscriptionsIcon

                                        size="xl"
                                    />
                                    &nbsp;Subscription
                                </NavLink>
                            </Link>
                            <Link to="/ServiceAreas">
                                <NavLink


                                    rel="noreferrer"
                                    ripple="light"
                                >
                                    <LocationOnIcon />
                                    <div className="">Areas</div>
                                </NavLink>
                            </Link>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <span className="ml-2">
                                                More
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/Product">
                                        <DropdownItem color="lightBlue">
                                            Blogs
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/ContractUs">
                                        <DropdownItem color="lightBlue">
                                            Contract Us
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/Product">
                                        <DropdownItem color="lightBlue">
                                            FAQs
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            <Dropdown
                                color="transparent"
                                size="sm"
                                buttonType="link"
                                buttonText={
                                    <div className="py-2.5 font-medium flex items-center">

                                        <SearchIcon className='text-white cursor-pointer  mb-5 lg:mb-0 mb ' />
                                    </div>
                                }
                                ripple="light"
                            >
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search Products"
                                        inputProps={{ 'aria-label': 'Search Product' }}
                                    />
                                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>

                                </Paper>
                            </Dropdown>
                            <Link
                                to="/login"

                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className=" text-white ml-2"
                                    ripple="dark"
                                >
                                    Sing In
                                </Button>
                            </Link>
                            <Link
                                to="/register"
                                rel="noreferrer"
                            >
                                <Button
                                    color="lightBlue"
                                    className="bg-white mt-5 lg:mt-0 text-black ml-2"
                                    ripple="dark"
                                >
                                    Sing Up
                                </Button>
                            </Link>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
