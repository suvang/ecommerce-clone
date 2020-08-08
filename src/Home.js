import React from 'react';
import './Home.css';
import Product from './Product';
import ProductOverview from './ProductOverview';
import {Link} from "react-router-dom";

function Home() {



    return (
        <div className="home">
           <img className="home__image"
           src="https://www.mangobay.com/wp-content/uploads/2015/06/Site-banners-ecom.jpg"
            alt=""
            />

        <div className="home__row">
       {/* <Link   to="/productoverview" style={{textDecoration: 'none', color: 'black'}}> </Link> */ }
       
            <Product
             id="123"
             title="ASUS TUF Gaming FX504 15.6-inch FHD Laptop GTX 1060 6GB Graphics (Core i5-8300H 8th Gen/8GB RAM/1TB SSHD + 256GB SSD/Windows 10/Gun Metal/2.30 Kg), FX504GM-E4392T"
             price={912.3}
             rating={5}
             description="Processor : 2.3 GHz Intel Core i5-8300H 8th Gen processor
             Display : 15.6-inch (16:9) LED-backlit FHD (1920x1080) 60Hz Anti-Glare IPS-level Panel with 45% NTSC.
             Memory and Storage : 8GB DDR4 RAM with NVIDIA GeForce GTX 1060 GDDR5 6GB Graphics | Storage : 1TB 5400 rpm Hybrid HDD (FireCuda) with PCIE NVME 256GB M.2 SSD
             OS : Windows 10 operating System | Weight : 2.30kg laptop
             Keyboard : Highlighted WASD keys | Desktop-inspired Design keyboard |Illuminated chiclet keyboard | lifespan of 20 million key press|0.25mm keycap curves |1.8mm of Key travel Distance.
             Hypercool Technology : Anti-Dust Cooling For Extended Lifespan | Powerful Dual Fan Architecture | Fan Overboost Technology | Patended Thermal-Friendly Chassis | Intelligent Keyboard Cooling.
             Audio : DTS Headphone:X | Authentic 7.1-Channel Surround Sound | Audophile-grade Equalizer Sound Options | Optimized Game/ Movie/ Sports Audio Profile."

             image="https://images-na.ssl-images-amazon.com/images/I/61HWikiDHFL._SL1036_.jpg"
            />
    
            <Product
             id="1234"
             title="DELL XPS 9300 13.3-inch UHD Laptop (10th Gen Core i7-1065G7/16GB/1TB SSD/Windows 10 Home Plus & MS Office/Intel HD Graphics), White"
             price={872.7}
             rating={5}
             description="This Certified Refurbished product is tested to work and look like new with minimal to no signs of wear & tear; the product comes with relevant accessories and is backed by a minimum six month supplier backed warranty; box may be generic
             10th Generation Intel Ci7-1065G7 Processor
             8MB Cache, up to 3.9 GHz8MB Cache, up to 3.9 GHz
             16GB 3733MHz
             1TB M.2 PCIe NVMe Solid State Drive"
             image="https://m.media-amazon.com/images/I/61u-7S8xE0L._AC_UY327_FMwebp_QL65_.jpg"
            />

        </div>
        

        <div className="home__row">

        <Product
             id="12345"
             title="Mi 10 (Twilight Grey, 8GB RAM, 128GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready"
             price={589.2}
             rating={5}
             description="108MP quad rear camera with OIS, ultra-wide, macro, portrait, night mode, AI scene recognition, HDR, pro mode | 20MP front camera
             16.94 centimeters (6.67-inch) FHD+ AMOLED capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 386 ppi pixel density and 19.5:9 aspect ratio | 3D Curved glass
             Memory, Storage and SIM: 8GB RAM | 256GB internal memory | Dual SIM (nano+nano) with support for 5G
             Android v10 operating system with 2.84GHz Qualcomm Snapdragon 865 with 7nm octa core processor
             4780mAH lithium-polymer battery with 30W wired fast charger in-box and support for up to 30W wireless charging
             1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase
             Box also includes: Power adapter, USB cable, sim eject tool, warranty card, user guide and clear soft case"

             image="https://images-eu.ssl-images-amazon.com/images/I/41T-pzuHZZL._AC_US240_FMwebp_QL65_.jpg"
            />

            <Product
             id="123456"
             title="Vega Crux Flip-up Helmet (Black, M)"
             price={54}
             rating={5}
             description="Leather finish touch; Weight:1100±50 gms
             Off-road look ; Shell: High Impact ABS Material Shell ; Aerodynamic Shape ; Visor: Scratch resistant & UV resistant. Visor in optical polycarbonate
             Easy fitting visor with good ventilation
             Use press button for smooth function of flip up action
             All helmets feel tight at first to meet safety requirements and foam takes time to adjust according to head size.
             Size: Small (55- 56cm), Medium(56- 58cm), Large(58- 59 cm), Extra Large(59- 60cm)"
             image="https://images-eu.ssl-images-amazon.com/images/I/41oCKGsh-GL._AC_SX184_.jpg"
            />

            <Product
             id="1234567"
             title="Morphy Richards OTG Besta 18-Litre Oven Toaster Grill (Black)"
             price={123}
             rating={5}
             description="Motorized rotisserie
                        60 minutes timer
                        Removable crumb tray
                        Temperature controller
                        Bake mode
                        Keep warm function
                        Capacity: 18 liters"
             image="https://images-eu.ssl-images-amazon.com/images/I/41j9D4kMZAL._AC_US240_FMwebp_QL65_.jpg"
            />

        </div>

        <div className="home__row">
        <Product
             id="122"
             title="Philips Daily Collection HD2583/90 600-Watt 2 in 1 Toaster and Grill (Black)"
             price={233.5}
             rating={5}
             description="8 browning settings for individual preference
             Easy to use; Number of slices: 2
             Integrated bun rack for heating rolls, pastries or buns
             Removable crumb tray for easy cleaning
             Extra auto shut-off protection
             Reheat, defrost in one go
             Cancel button to stop toasting at any time"
             image="https://images-eu.ssl-images-amazon.com/images/I/41ZNNF6vdVL._AC_US240_FMwebp_QL65_.jpg"
            />
        </div>
    </div>
    )
}

export default Home
