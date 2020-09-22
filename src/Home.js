import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GW_18thCountdown/P38983965_IN_WLME_SamsungGalaxy_M51_Countdown_With_Bank_PC_1500x600_3._CB403897375_.jpg" alt="Banner Image" />
            <div className="home_row">
                <Product 
                    id="143451" 
                    title="Mi Notebook 14 Horizon"
                    price={59999.0} 
                    rating={5} 
                    image="https://i01.appmifile.com/webfile/globalimg/in/cms/81DAE22D-023B-1742-5400-32A7760B0962.jpg?width=140&height=140"
                />
                <Product 
                    id="123452" 
                    title="Xiaomi Mi Mix Alpha"
                    price={199990.0} 
                    rating={4} 
                    image="https://i01.appmifile.com/webfile/globalimg/in/cms/5BC6E1D3-9499-8ADF-E75A-B34A498FB173.jpg?width=140&height=140"
                />
            </div>
            <div className="home_row">
                <Product 
                    id="123453" 
                    title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
                    price={2299.0} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_UL320_.jpg"
                />
                <Product 
                    id="123454" 
                    title="Apple iPhone 11 Pro Max (256GB) - Gold"
                    price={123899.0} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/611JavcU70L._AC_UY218_.jpg"
                />
                <Product 
                    id="123455" 
                    title="Apple AirPods with Wireless Charging Case"
                    price={16999.0} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/71IPFP9WJIL._AC_SX615_SY462_.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                    id="123456" 
                    title="Acer Predator Helios 700 Gaming Laptop PC, 17.3 Full HD NVIDIA G-SYNC 144Hz IPS Display, Intel i7-9750H, GeForce RTX 2070 8GB, 16GB DDR4, 512GB PCIe NVMe SSD, RGB Backlit Keyboard, PH717-71-7091"
                    price={187999} 
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81LmTELYhIL._SL1500_.jpg"
                />
            </div>
        </div>      
    )
}

export default Home
