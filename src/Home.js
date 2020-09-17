import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GW_18thCountdown/P38983965_IN_WLME_SamsungGalaxy_M51_Countdown_With_Bank_PC_1500x600_3._CB403897375_.jpg" alt="Banner Image" />
            <Product 
            id="133136" 
            title="TP-Link TL-WA850RE N300 Wireless Router"
            price={1399.0} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/31N9ADI8c7L._AC_UY218_.jpg"/>
        </div>      
    )
}

export default Home
