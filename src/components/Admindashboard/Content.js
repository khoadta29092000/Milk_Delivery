import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Content() {
    const [dataProducts, setDataProduct] = useState([]);
    var data = [
        { id: 1, title: "Today", price: "30.000.000",count:"10"  },
        { id: 2, title: "This Month", price: "160.000.000",count:"152"  },
        { id: 3, title: "This Year", price: "2.000.000.000",count:"1501" },
        { id: 4, title: "All Time", price: "4.231.151.000",count:"4102" },
    ];
    var Products = [
        { id: 1, title: "Category", price: "30.000.000",count:"5"  },
        { id: 2, title: "Product", price: "160.000.000",count:"13"  },
        { id: 3, title: "Package", price: "2.000.000.000",count:"8" },
        { id: 4, title: "Areas", price: "4.231.151.000",count:"32" },
    ];
    var Members = [
        { id: 1, title: "User", price: "30.000.000",count:"1410"  },
        { id: 2, title: "Delivery Boi", price: "160.000.000",count:"46"  },
    ];
    
    
    useEffect(() => {
        //featchProductList();

    }, []);
    async function featchProductList() {
        try {
            setDataProduct(data);
            return data
        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }
    return (
        <section className=" ml-0 xl:ml-64   pt-10  ">
            <div className="mt-16 ml-8 ">
                <h2 className="font-bold text-2xl mb-2 "> Orders</h2>
            <div className='grid mr-5 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 gap-4'>
               {data.map((product, index) => {
                   return (
                       <Card key={product.id} className="" >
                           <button className="text-white bg-blue-600 rounded-lg mt-5 ml-5  h-12 w-12">
                           <CalendarMonthIcon  />
                           </button>
                         
                           <CardContent className="mt-0">
                               <Typography gutterBottom variant="h8" className='font-bold text-sm' component="div">
                                   {product?.title}
                               </Typography>
                               <Typography gutterBottom variant="h16" className=' font-semibold text-xl' component="div">
                               {product.count}
                               </Typography>
                           </CardContent>
                           <CardActions>
                           <Typography gutterBottom variant="h10" className='text-green-700 ml-2 font-semibold' component="div">
                                   {product?.price}<a className='underline'>đ</a>
                               </Typography>
                           </CardActions>
                       </Card>
                   )
               })}
           </div>
            </div>
             <div className="mt-5 ml-8 ">
                <h2 className="font-bold text-2xl mb-2 "> Product</h2>
            <div className='grid mr-5 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 gap-4'>
               {Products.map((product, index) => {
                   return (
                       <Card key={product.id} className="" >
                           <button className="text-white bg-blue-600 rounded-lg mt-5 ml-5  h-12 w-12"> 
                           <CalendarMonthIcon  />
                           </button>
                         
                           <CardContent className="mt-0">
                               <Typography gutterBottom variant="h8" className='font-bold text-sm' component="div">
                                   {product?.title}
                               </Typography>
                               <Typography gutterBottom variant="h16" className=' font-semibold text-xl' component="div">
                                  {product.count}
                               </Typography>
                           </CardContent>
                          
                       </Card>
                   )
               })}
           </div>
            </div>
            
             <div className="mt-5 ml-8 ">
                <h2 className="font-bold text-2xl mb-2 "> Member</h2>
            <div className='grid mr-5 grid-cols-1  sm:grid-cols-2  gap-4'>
               {Members.map((product, index) => {
                   return (
                       <Card key={product.id} className="" >
                           <button className="text-white bg-blue-600 rounded-lg mt-5 ml-5  h-12 w-12"> 
                           <CalendarMonthIcon  />
                           </button>
                         
                           <CardContent className="mt-0">
                               <Typography gutterBottom variant="h8" className='font-bold text-sm' component="div">
                                   {product?.title}
                               </Typography>
                               <Typography gutterBottom variant="h16" className=' font-semibold text-xl' component="div">
                                  15
                               </Typography>
                           </CardContent>
                           <CardActions>
                           <Typography gutterBottom variant="h10" className='text-green-700 ml-2 font-semibold' component="div">
                                   {product?.price}<a className='underline'>đ</a>
                               </Typography>
                           </CardActions>
                       </Card>
                   )
               })}
           </div>
            </div>
            
        </section>
    );
}
